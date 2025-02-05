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
import CartItem from "../CartItem/cart-item";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const CartSheet = () => {
  const { items, updateCount, setItems } = useCartStore();
  const totalPrice = items.reduce(
    (sum, item) =>
      sum +
      Number.parseFloat(item.product.priceRange.maxVariantPrice.amount) *
        item.count,
    0
  );
  const currencyCode =
    items[0]?.product.priceRange.maxVariantPrice.currencyCode || "";

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
      <SheetContent className="overflow-y-auto">
        <SheetHeader className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <FaCartShopping className="size-5" />
            <SheetTitle className="p-2">CART</SheetTitle>
          </div>
          <div>
            <p className="font-bold">{`${totalPrice} ${currencyCode}`}</p>
          </div>
        </SheetHeader>
        <Separator />
        {items.length === 0 && (
          <div className="py-4">Items you add to cart will be here.</div>
        )}
        <div className="py-4">
          {items.length > 0 &&
            items.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                items={items}
                updateCount={updateCount}
                setItems={setItems}
              />
            ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
