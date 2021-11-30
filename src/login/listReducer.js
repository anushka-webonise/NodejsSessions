const initialState = {
  list: [],
  isLoading: false,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Set_todo": {
      return { ...state, list: [...action.payload] };
    }

    default:
      return state;
  }
};

export default listReducer;
