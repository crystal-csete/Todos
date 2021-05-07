  
export const SET_TITLE = "SET_TITLE";
export const SET_EDITING = "SET_EDITING";
export const SET_NEW_TITLE_TEXT = "SET_NEW_TITLE_TEXT";

export const setTitle = (title) => {
  return { type: SET_TITLE, payload: title };
};

export const setEditing = (willEdit) => {
  return { type: SET_EDITING, payload: willEdit };
};

export const setNewTitleText = (titleText) => {
  return { type: SET_NEW_TITLE_TEXT, payload: titleText };
};