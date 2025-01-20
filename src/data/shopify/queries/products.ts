import { fetchShopify } from "../storefront";

export interface IProducts {
  data: {
    products: {
      nodes: Array<{ id: string, title: string }>,
    },
  };
  extensions: any;
}

export interface IProduct {
  category: string | null;
  id: string;
  title: string;
  description: string;
  images: {
    nodes: Image[],
  };
  priceRange: {
    maxVariantPrice: Price,
  };
}

interface Image {
  url: string;
}

interface Price {
  amount: string;
  currencyCode: string;
}

export interface IProductsByCollection{
  collection: {
    id: string,
    title: string,
    products: {
      nodes: IProduct[],
    },
    description:string;
  },
}

export interface IProductsByCollectionResponse {
  data: IProductsByCollection;
  extensions: {
    cost: {
      requestedQueryCost: number,
      actualQueryCost: number,
      throttleStatus: {
        maximumAvailable: number,
        currentlyAvailable: number,
        restoreRate: number,
      },
    },
  };
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

const getProductsByCollectionQuery = (collectionId: string) => `
query GetProductsByCollection {
  collection(id: "gid://shopify/Collection/${collectionId}") {
    id
    title
    description
    products(first: 20) {
      nodes {
        id
        title
        description
        images(first: 2) {
          nodes {
            url
          }
        }
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
`;

export const getProducts = async (): Promise<IProducts> => {
  return fetchShopify(QUERY_PRODUCTS);
};

export const getProductsByCollection = async (
  collectionId: string
): Promise<IProductsByCollectionResponse> => {
  const query = getProductsByCollectionQuery(collectionId);
  // const variables = { id: "gid://shopify/Collection/" + collectionId };

  return fetchShopify(query);
};
