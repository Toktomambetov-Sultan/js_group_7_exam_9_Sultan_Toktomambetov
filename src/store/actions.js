const {
  ADD_NEW_CONTACT,
  CHANGE_CURRENT_CONTACT,
  DELETE_CONTACT,
} = require("./actionsType");

export const addNewContact = () => {
  return { type: ADD_NEW_CONTACT };
};
export const changeCurrentContact = (currentContact) => {
  return { type: CHANGE_CURRENT_CONTACT, currentContact };
};
export const deleteContact = (index) => {
  return { type: DELETE_CONTACT, index };
};
