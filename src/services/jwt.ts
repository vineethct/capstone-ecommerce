import jwt, { JwtPayload } from "jsonwebtoken";
import * as jose from "jose";

export interface FirebaseDecodedToken extends JwtPayload {
  uid: string;
  email: string;
  exp: number;
  [key: string]: any; // This allows for any additional fields that may be present
}

const getPublicKeys = async (): Promise<Record<string, string> | null> => {
  try {
    const response = await fetch(
      "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch public keys");
    }

    return (await response.json()) as Record<string, string>; // Public keys as key-value pairs (kid -> key)
  } catch {
    throw new Error("Error fetching Firebase public keys");
  }
};

const verifyToken = async (token: string) => {
  try {
    const decoded = jwt.decode(token, { complete: true });
    if (!decoded) {
      throw new Error("Invalid token");
    }

    const publicKeys = await getPublicKeys();
    if (!publicKeys) {
      throw new Error("Unable to fetch public keys");
    }

    const kid = decoded.header?.kid;
    if (!kid) {
      throw new Error("Token header does not contain kid");
    }

    const key = await jose.importX509(publicKeys[kid], "RS256");
    if (!key) {
      throw new Error("Public key not found");
    }

    // Verify the token with the public key
    return await jose.jwtVerify(token, key);
  } catch {
    throw new Error("Failed to validate token");
  }
};

export { verifyToken };
