"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaMagnifyingGlass } from "react-icons/fa6";
import InfiniteScroll from "react-infinite-scroller";
import Image from "next/image";
import { getProductsBySearch } from "@/data/shopify/products/products";
import { IProduct } from "@/data/shopify/products/interfaces";
import ProductsFromCollectionSekeleton from "../collection/[id]/skeleton";
import { Spinner } from "@radix-ui/themes";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

type PageInfo = {
  hasNextPage: boolean,
  endCursor: string | null | undefined,
};

const BrowseProducts = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    hasNextPage: false,
    endCursor: undefined,
  });
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const searchString = searchParams.get("search")?.toString()
    fetchProductsByCollectionId(searchString || "")
  },[])

  const fetchProductsByCollectionId = (inputString : string) => {
    getProductsBySearch(pageInfo.endCursor, inputString).then((data) => {
      const newProducts: IProduct[] = data.data;
      setProducts((prev) => [...prev, ...newProducts]);
      setPageInfo({ hasNextPage: data.hasNextPage, endCursor: data.cursor });
      setLoading(() => false);
    });
  };

  const handleSearch = useDebouncedCallback((inputString: HTMLInputElement["value"]) => {

    //update address
    const params = new URLSearchParams(searchParams);
    params.set("search", inputString || "");
    replace(`${pathname}?${params.toString()}`);

    setLoading(() => true);
    setProducts([]); // Clear existing products
    setPageInfo({ hasNextPage: false, endCursor: undefined }); // Reset pagination
    fetchProductsByCollectionId(inputString);
  },500);

  return (
    <div className="p-5">
      <h3 className={`text-3xl font-bold italic md:text-6xl`}>
        {`Browse Products`}
      </h3>

      <div className=" mt-6 flex max-w-md ">
        <Input
          ref={inputRef}
          onChange={(e) => handleSearch(e.target.value)}
          type="search"
          placeholder="Search..."
          className="rounded-r-none"
          defaultValue={searchParams.get("search")?.toString()}
        />
        <Button
          type="submit"
          variant="default"
          className="rounded-l-none bg-blackAccent text-white hover:bg-blue-600"
        >
          <FaMagnifyingGlass className="size-4" />
        </Button>
      </div>

      <div className="py-6">
        <InfiniteScroll
          pageStart={0}
          loadMore={()=>fetchProductsByCollectionId(inputRef.current?.value || "")}
          hasMore={pageInfo.hasNextPage}
          loader={
            <div key={0} className="mt-5">
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
            {`You've reached the end of the list.`}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseProducts;
