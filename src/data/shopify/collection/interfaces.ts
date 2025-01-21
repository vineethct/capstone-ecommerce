export interface ICollection {
  collection: {
    id: string,
    title: string,
    description: string,
  };
}

export interface ICollectionResponse {
  data: ICollection;
  extensions: any;
}
