import { SET_TITLE, SET_EDITING, SET_NEW_TITLE_TEXT } from "./../actions";

export const initialState = {
  title: "Learn about reducers",
  editing: false,
  newTitleText: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };

    case SET_EDITING:
      return { ...state, editing: action.payload };

    case SET_NEW_TITLE_TEXT:
      return { ...state, newTitleText: action.payload };
    default:
      return state;
  }
};

export default reducer;