import { ADD_NEW_CONTACT, CHANGE_CURRENT_CONTACT } from "./actionsType";

const initialState = {
  currentContact: {
    name: "",
    imgSrc: "",
    email: "",
    phoneNumber: "",
  },
  contacts: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_CONTACT:
      return {
        ...state,
        currentContact: { ...initialState.currentContact },
        contacts: [...state.contacts, { ...state.currentContact }],
      };
    case CHANGE_CURRENT_CONTACT:
      return {
        ...state,
        currentContact: action.currentContact,
      };
    default:
      return { ...state };
  }
};
export default reducer;
