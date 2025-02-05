import {
  collection,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import { IProduct, IProducts } from "@/data/shopify/products/interfaces";
import { db } from "@/services/firebase";
import { IItem } from "@/store/cart-store";

interface IUserDoc {
  email: string;
  uid: string;
  cart: IItem[] | [];
}

interface IAddToCart {
  uid: string;
  cart: IItem[] | [];
}

class UserHandler {
  async createUser(payload: IUserDoc) {
    try {
      await setDoc(doc(db, "users", payload.uid), payload);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async addToCart(payload: IAddToCart) {
    try {
      const docRef = doc(db, "users", payload.uid);

      await updateDoc(docRef, {
        cart: payload.cart,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getCart(payload: { uid: string }) {
    try {
      const docRef = doc(db, "users", payload.uid);

      const docSnap = await getDoc(docRef);

      return docSnap.exists()
        ? { success: true, data: docSnap.data() as IUserDoc }
        : { success: false, message: "Document not found" };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
export default UserHandler;
