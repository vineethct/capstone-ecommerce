import { fetchShopify } from "../storefront";
import { ICollection } from "./interfaces";
import { getCollectionByIdQuery } from "./queries";

export const getCollectionById = async (
  collectionId: string
): Promise<ICollection> => {
  const query = getCollectionByIdQuery;
  const variables = { id: "gid://shopify/Collection/" + collectionId };
  return fetchShopify(query, variables);
};
