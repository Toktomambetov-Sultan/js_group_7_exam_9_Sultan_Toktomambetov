import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import {
  addNewContact,
  changeCurrentContact,
  initCurrentContact,
} from "../../store/actions";

const AddNewContactBlock = ({ history }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCurrentContact());
  }, [dispatch]);
  const changeCurrentContactHandler = (currentContact) =>
    dispatch(changeCurrentContact(currentContact));

  const addNewContactHandler = async (currentContact) =>
    await dispatch(addNewContact(currentContact));

  const onChange = (event) => {
    const { value, id: name } = event.target;
    changeCurrentContactHandler({ ...state.currentContact, [name]: value });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    await addNewContactHandler(state.currentContact);
    history.push({
      pathname: "/",
    });
  };
  const onCancel = () => {
    history.push({
      pathname: "/",
    });
  };
  return (
    <div>
      <ContactForm
        onChange={onChange}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </div>
  );
};

export default AddNewContactBlock;
