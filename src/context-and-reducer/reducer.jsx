export const initialState = {
  total: 0,
  products: [],
};
const storeReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        products: action.payload,
      };
    case "remove":
      return {
        ...state,
        products: action.payload,
      };
    case "update":
      return {
        ...state,
        total: action.payload,
      };
    default:
      throw Error("cannat have this case");
  }
};
export default storeReducer;
