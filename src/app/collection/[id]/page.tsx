"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import {
  IProductsByCollection,
  getProductsByCollection,
} from "@/data/shopify/queries/products";


const Products = () => {
  const { id }: { id: string } = useParams();
  const [collection, setCollection] = useState<IProductsByCollection>();

  useEffect(() => {
    if (id) {
      const fetchProductsByCollectionId = () => {
        getProductsByCollection(id).then((data) => {
          setCollection(data.data);
        });
      };
      fetchProductsByCollectionId();
    }
  }, [id]);

  useEffect(() => {
    if (collection) {
      console.log(collection, "-->collection");
    }
  }, [collection]);

  return (
    <div
      style={{
        padding: "30px",
        paddingTop: "20px",
      }}
    >
      <h3 className={`text-3xl  font-bold italic md:text-6xl`}>{collection?.collection.title}</h3>
    </div>
  );
};

export default Products;
