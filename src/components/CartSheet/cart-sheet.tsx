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
import { Badge } from "../ui/badge";
import { useCartStore } from "@/store/cart-store";

const CartSheet = () => {
  const { items } = useCartStore();
  return (
    <Sheet>
      <SheetTrigger className="relative flex size-10 items-center justify-center rounded-full hover:bg-blackAccent hover:text-white">
        <FaCartShopping />
        {items.length > 0 && (
          <Badge
            className="absolute right-0 top-0 p-1 py-0"
            variant="secondary"
          >
            {items.length}
          </Badge>
        )}
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
