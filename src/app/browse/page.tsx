"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaMagnifyingGlass } from "react-icons/fa6";
import InfiniteScroll from "react-infinite-scroller";
import Image from "next/image";
import { getProductsBySearch } from "@/data/shopify/products/products";
import { IProduct } from "@/data/shopify/products/interfaces";
import ProductsFromCollectionSekeleton from "../collection/[id]/skeleton";
import { Spinner } from "@radix-ui/themes";

type PageInfo = {
  hasNextPage: boolean,
  endCursor: string | null | undefined,
};

const BrowseProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [inputString, setInputString] = useState<string>("");
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    hasNextPage: false,
    endCursor: undefined,
  });
  const [loading, setLoading] = useState(false);

  const fetchProductsByCollectionId = () => {
    getProductsBySearch(pageInfo.endCursor, inputString).then((data) => {
      const newProducts: IProduct[] = data.data;
      setProducts((prev) => [...prev, ...newProducts]);
      setPageInfo({ hasNextPage: data.hasNextPage, endCursor: data.cursor });
      setLoading(() => false);
    });
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(() => true);
    setProducts([]); // Clear existing products
    setPageInfo({ hasNextPage: false, endCursor: undefined }); // Reset pagination
    fetchProductsByCollectionId();
  };

  return (
    <div className="p-5">
      <h3 className={`text-3xl font-bold italic md:text-6xl`}>
        {`Browse Products`}
      </h3>

      <form onSubmit={handleSearch} className=" mt-6 flex max-w-md ">
        <Input
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          type="search"
          placeholder="Search..."
          className="rounded-r-none"
        />
        <Button
          type="submit"
          variant="default"
          className="rounded-l-none bg-blackAccent text-white hover:bg-blue-600"
        >
          <FaMagnifyingGlass className="size-4" />
        </Button>
      </form>

      <div className="py-6">
        <InfiniteScroll
          pageStart={0}
          loadMore={fetchProductsByCollectionId}
          hasMore={pageInfo.hasNextPage}
          loader={
            <div key={0}>
              <Spinner size="3" />
            </div>
          }
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, index) => (
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
                    <Button>Buy Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>

        {loading && <ProductsFromCollectionSekeleton showTitle={false} />}

        {!pageInfo.hasNextPage && products.length > 0 && (
          <div className="mt-6 text-center text-gray-500">
            {`You've reached the end of the product list.`}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseProducts;
