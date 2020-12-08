export default (state, action) => {
  switch (action.type) {
    case "STORE_DEPARTMENT":
      return {
        ...state,
        department: action.payload,
      };
    case "STORE_BATCH":
      return {
        ...state,
        batch: action.payload,
      };
    case "STORE_SUBJECT":
      return {
        ...state,
        subject: action.payload,
      };

    default:
      return state;
  }
};
