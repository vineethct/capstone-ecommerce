import { IItem } from "@/store/cart-store";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

const CartItem = ({
  item,
  items,
  updateCount,
}: {
  item: IItem,
  items: IItem[] | [],
  updateCount: (item: IItem, items: [] | IItem[]) => void,
}) => {
  return (
    <Card className="my-2">
      <CardHeader className="flex-row items-center gap-2">
        <div>
          <Image
            src={item.product.images.nodes[0].url}
            alt={item.product.title}
            width={50}
            height={50}
          />
        </div>
        <div>
          <CardTitle>{item.product.title}</CardTitle>
          {/* <CardDescription className="line-clamp-2">
            {item.product.description}
          </CardDescription> */}
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div>
          <p>
            {item.product.priceRange.maxVariantPrice.amount}{" "}
            {item.product.priceRange.maxVariantPrice.currencyCode}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant={"secondary"}
            size={"sm"}
            disabled={item.count === 1}
            onClick={() => {
              updateCount(
                { count: item.count - 1, product: item.product },
                items
              );
            }}
          >
            -
          </Button>
          <p>{item.count}</p>
          <Button
            variant={"secondary"}
            size={"sm"}
            disabled={item.count === 5}
            onClick={() => {
              updateCount(
                { count: item.count + 1, product: item.product },
                items
              );
            }}
          >
            +
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartItem;
