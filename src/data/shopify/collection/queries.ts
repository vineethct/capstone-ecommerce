const getCollectionByIdQuery = `
query GetCollectionDetails($id: ID!) {
  collection(id: $id) {
    id
    title
    description
  }
}
`;

export { getCollectionByIdQuery };
