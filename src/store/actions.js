import axiosOrder from "../axiosOrder";
import {
  CHANGE_CURRENT_CONTACT,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_INIT,
  INIT_CURRENT_CONTACT,
} from "./actionsType";

export const changeCurrentContact = (currentContact) => {
  return { type: CHANGE_CURRENT_CONTACT, currentContact };
};

export const initCurrentContact = () => {
  return { type: INIT_CURRENT_CONTACT };
};

const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};
const fetchSuccess = () => {
  return { type: FETCH_SUCCESS };
};
const fetchError = (error) => {
  return { type: FETCH_ERROR, error };
};
const fetchInit = (data) => {
  return { type: FETCH_INIT, data };
};
export const initContacts = () => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await axiosOrder.get("/contacts.json");
      dispatch(fetchInit(response.data ? response.data : []));
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};

export const addNewContact = (currentContact) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      await axiosOrder.post("/contacts.json", currentContact);
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};

export const deleteContact = (id) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      await axiosOrder.delete("/contacts/" + id + ".json");
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};

export const changeContact = (currentContact) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      await axiosOrder.put(
        "/contacts/" + currentContact.id + ".json",
        currentContact,
      );
      dispatch(fetchSuccess());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};
