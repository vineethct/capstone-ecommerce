import {
  IGetProductsBySearch,
  IProduct,
} from "@/data/shopify/products/interfaces";
import { useEffect, useRef, useState } from "react";

type FetchDataFunction = (
  cursor: string | null | undefined,
  searchString: string | null | undefined
) => Promise<IGetProductsBySearch<IProduct>>;

const useInfiniteScroll = (
  fetchData: FetchDataFunction,
  hasMore: boolean,
  cursor: string | null | undefined,
  searchString: string | null | undefined
): ({
  isFetching: boolean,
  lastElementRef: (node: Element | null) => void,
}) => {
  const [isFetching, setIsFetching] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = (node: Element | null) => {
    if (isFetching) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setIsFetching(true);
      }
    });
    if (node) observer.current.observe(node);
  };

  useEffect(() => {
    if (!isFetching) return;

    const fetchMore = async () => {
      await fetchData(cursor, searchString);
      setIsFetching(false);
    };

    if (hasMore) {
      fetchMore();
    }
  }, [fetchData]);

  return { isFetching, lastElementRef };
};

export default useInfiniteScroll;
