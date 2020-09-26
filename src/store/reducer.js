import {
  CHANGE_CURRENT_CONTACT,
  FETCH_ERROR,
  FETCH_INIT,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  INIT_CURRENT_CONTACT,
} from "./actionsType";

const initialState = {
  currentContact: {
    name: "",
    imgSrc: "",
    email: "",
    phoneNumber: "",
  },
  contacts: [],
  isLoading: false,
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_CONTACT:
      return {
        ...state,
        currentContact: action.currentContact,
      };
    case FETCH_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_INIT:
      return {
        ...state,
        contacts: Object.keys(action.data).map((key) => ({
          ...action.data[key],
          id: key,
        })),
      };
    case INIT_CURRENT_CONTACT:
      return {
        ...state,
        currentContact: { ...initialState.currentContact },
      };
    case FETCH_SUCCESS:
      return { ...state, isLoading: false };
    case FETCH_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return { ...state };
  }
};
export default reducer;
