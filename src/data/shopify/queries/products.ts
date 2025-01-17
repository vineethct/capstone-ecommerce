import { fetchShopify } from "../storefront";

export interface IProducts {
  data: {
    products: {
      nodes: Array<{ id: string, title: string }>,
    },
  };
  extensions: any;
}

const QUERY_PRODUCTS = `
  query {
    products(first: 10) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

export const getProducts = async (): Promise<IProducts> => {
  return fetchShopify(QUERY_PRODUCTS);
};
