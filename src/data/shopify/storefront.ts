const SHOPIFY_GRAPHQL_URL = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}/graphql.json`;

export const fetchShopify = async (query: string, variables = {}) => {
  const response = await fetch(SHOPIFY_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": `${process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json: any = await response.json();
  return json.data;
};
