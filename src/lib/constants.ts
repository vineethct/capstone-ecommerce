const transparentBase64 =
  "data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg==";

const COLLECTION_ID = {
  LEGO: "488313880874",
  HOT_WHEELS: "488314208554",
  DISNEY: "488314667306",
};

const PAGE_ROUTES = {
  HOME: "/",
  LEGO: `/collection/${COLLECTION_ID.LEGO}`,
  HOT_WHEELS: `/collection/${COLLECTION_ID.HOT_WHEELS}`,
  DISNEY: `/collection/${COLLECTION_ID.DISNEY}`,
  LOGIN: "/login",
  LOGOUT: "/logout",
  SIGNUP: "/signup",
  BROWSE: "/browse",
};

export { transparentBase64, PAGE_ROUTES, COLLECTION_ID };
