export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const alreadyAdded = state.some((item) => item.id === action.payload.id);
      if (alreadyAdded) {
        return state;
      }
      return [...state, action.payload];
    }
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}
