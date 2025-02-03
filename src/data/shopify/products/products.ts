import { fetchShopify } from "../storefront";
import {
  IGetProductsBySearch,
  IProduct,
  IProducts,
  IProductsByCollectionResponse,
} from "./interfaces";
import {
  getLatestProductsQuery,
  getProductsByCollectionQuery,
  getProductsBySearchQuery,
} from "./queries";

export const getLatestProducts = async (): Promise<IProducts> => {
  return fetchShopify(getLatestProductsQuery);
};

export const getProductsByCollection = async (
  collectionId: string
): Promise<IProductsByCollectionResponse> => {
  const query = getProductsByCollectionQuery(collectionId);
  return fetchShopify(query);
};

export const getProductsBySearch = async (
  cursor: string | null | undefined,
  searchString: string | null | undefined
): Promise<IGetProductsBySearch<IProduct>> => {
  const query = getProductsBySearchQuery;

  const variables = {
    query: `title:*${searchString}*`,
    first: 6,
    after: cursor,
  };

  const result = await fetchShopify(query, variables);
  const edges = result.data.products.edges;

  return {
    data: edges.map((edge: { node: IProduct }) => edge.node),
    cursor: result.data.products.pageInfo.endCursor,
    hasNextPage: result.data.products.pageInfo.hasNextPage,
  };
};
