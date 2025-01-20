import { fetchShopify } from "../storefront";

export interface ICollection {
    collection: {
        id: string,
        title: string,
        description: string,
      },
}

export interface ICollectionResponse {
  data: ICollection;
  extensions: any;
}

const getCollectionByIdQuery = `
query GetCollectionDetails($id: ID!) {
  collection(id: $id) {
    id
    title
    description
  }
}
`;

export const getCollectionById = async (
  collectionId: string
): Promise<ICollection> => {
  const query = getCollectionByIdQuery;
  const variables = { id: "gid://shopify/Collection/" + collectionId };
  return fetchShopify(query, variables);
};
