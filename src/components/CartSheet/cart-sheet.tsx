import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaCartShopping } from "react-icons/fa6";
import { Separator } from "../ui/separator";

const CartSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex size-10 items-center justify-center rounded-full hover:bg-blackAccent hover:text-white">
        <FaCartShopping />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-row items-center gap-2">
          <FaCartShopping className="mt-2 size-5" />
          <SheetTitle className="p-2">CART</SheetTitle>
        </SheetHeader>
        <Separator />
        <div className="py-4">Items you add to cart will be here.</div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
