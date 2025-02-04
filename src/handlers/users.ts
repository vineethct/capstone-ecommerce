import { collection, addDoc } from "firebase/firestore";
import { IProduct } from "@/data/shopify/products/interfaces";
import { db } from "@/services/firebase";

interface IUserDoc {
  email: string;
  uid: string;
  cart: IProduct[] | [];
}

class UserHandler {
  async createUser(payload: IUserDoc) {
    try {
      await addDoc(collection(db, "users"), payload);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
export default UserHandler;
