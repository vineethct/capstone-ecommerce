import { fetchShopify } from "../storefront";

const QUERY_PRODUCTS = ``;

export const getRecommendedProducts = async () => {
  return fetchShopify(QUERY_PRODUCTS);
};
