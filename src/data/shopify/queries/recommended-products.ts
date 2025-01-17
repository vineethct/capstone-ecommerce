import { fetchShopify } from "../storefront";

const QUERY_PRODUCTS = ``;

export interface IRecommendedProducts {
  data: {
    collection: {
      id: string, // Shopify Collection ID
      title: string, // Collection Title
      products: {
        nodes: IProductNode[], // Array of Product Nodes
      },
    },
  };
  extensions: {
    cost: {
      requestedQueryCost: number, // Cost of the requested query
      actualQueryCost: number, // Actual cost of the query
      throttleStatus: {
        maximumAvailable: number, // Maximum available throttle capacity
        currentlyAvailable: number, // Current available throttle capacity
        restoreRate: number, // Rate at which capacity is restored
      },
    },
  };
}

interface IProductNode {
  category: string | null; // Product category, nullable
  id: string; // Shopify Product ID
  title: string; // Product Title
  images: {
    nodes: IImageNode[], // Array of Image Nodes
  };
  description: string; // Product Description
}

interface IImageNode {
  url: string; // URL of the product image
}

export const getRecommendedProducts = async () => {
  return fetchShopify(QUERY_PRODUCTS);
};
