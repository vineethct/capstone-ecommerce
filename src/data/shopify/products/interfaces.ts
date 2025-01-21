export interface IProducts {
  data: {
    products: {
      nodes: Array<{ id: string, title: string }>,
    },
  };
  extensions: any;
}

export interface IProduct {
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

export interface IProductsByCollection {
  collection: {
    id: string,
    title: string,
    products: {
      nodes: IProduct[],
    },
    description: string,
  };
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

export interface IGetProductsBySearch<T> {
  data: IProduct[]; // Array of data items (generic type `T`)
  hasNextPage: boolean; // Indicates if there are more pages to load
  cursor: string;
}
