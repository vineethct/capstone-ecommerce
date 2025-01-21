const getLatestProductsQuery = `
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

const getProductsBySearchQuery = `
query SearchProducts($query: String!, $first: Int, $after: String) {
  products(query: $query, first: $first, after: $after) {
    edges {
      cursor
      node {
        id
        title
        description
        images(first: 1) {
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
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`;

export {
  getLatestProductsQuery,
  getProductsByCollectionQuery,
  getProductsBySearchQuery,
};
