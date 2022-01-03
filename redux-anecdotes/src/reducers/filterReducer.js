export const addFilter = (filterText) => ({
  type: "GET_FILTERED",
  filterText,
});
const filterReducer = (state = "", action) => {
  if (action.type === "GET_FILTERED") {
    return action.filterText;
  }
  return state;
};

export default filterReducer;
