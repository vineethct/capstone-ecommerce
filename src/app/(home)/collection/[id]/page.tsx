"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { getProductsByCollection } from "@/data/shopify/products/products";
import {
  IProduct,
  IProductsByCollection,
} from "@/data/shopify/products/interfaces";
import ProductsFromCollectionSekeleton from "./skeleton";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IItem, useCartStore } from "@/store/cart-store";
import { FaCheck } from "react-icons/fa";

const Products = () => {
  const { id }: { id: string } = useParams();
  const [collection, setCollection] = useState<IProductsByCollection>();
  const [loading, setLoading] = useState(true);
  const { items, setItems } = useCartStore();

  useEffect(() => {
    if (id) {
      const fetchProductsByCollectionId = () => {
        getProductsByCollection(id).then((data) => {
          setTimeout(() => {
            setLoading(false);
            setCollection(data.data);
          }, 1500);
        });
      };
      fetchProductsByCollectionId();
    }
  }, [id]);

  const handleAddToCart = (product: IProduct) => {
    const item: IItem = { product, count: 1 };
    setItems([...items, item]);
  };

  const isItemInCart = (productId: string) => {
    for (const item of items) {
      if (item.product.id === productId) {
        return true;
      }
    }
    return false;
  };

  return (
    <div
      style={{
        padding: "30px",
        paddingTop: "20px",
      }}
    >
      {loading ? (
        <ProductsFromCollectionSekeleton />
      ) : (
        <>
          <h3 className={`text-3xl font-bold italic md:text-6xl`}>
            {collection?.collection.title}
          </h3>
          <p className="mt-5">{collection?.collection.description}</p>
          <div className="mt-5">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {collection?.collection.products.nodes.map((product) => (
                <div
                  key={product.id}
                  className="overflow-hidden rounded-lg bg-[#ededed] shadow-lg dark:bg-blackAccent"
                >
                  <Image
                    src={product.images.nodes[0].url}
                    alt={product.title}
                    width={100}
                    height={0}
                    className="h-48 w-full object-contain pt-1 mix-blend-multiply transition-transform hover:scale-110 dark:mix-blend-normal"
                  />
                  <div className="p-4">
                    <h2 className="mb-2 line-clamp-2 h-[56px]  text-lg font-semibold">
                      {product.title}
                    </h2>
                    <p className="mb-4 line-clamp-2 h-[40px] text-sm">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold ">
                        ₹{product.priceRange.maxVariantPrice.amount}
                      </span>
                      {isItemInCart(product.id) ? (
                        <Button disabled onClick={() => {}}>
                          Added to Cart <FaCheck />
                        </Button>
                      ) : (
                        <Button onClick={() => handleAddToCart(product)}>
                          Add to Cart
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
