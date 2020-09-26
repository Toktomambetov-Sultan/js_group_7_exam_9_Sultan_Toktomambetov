import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { changeContact, changeCurrentContact } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

export const EditPage = ({ history }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const changeCurrentContactHandler = (currentContact) =>
    dispatch(changeCurrentContact(currentContact));

  const changeContactHandler = async (currentContact) =>
    await dispatch(changeContact(currentContact));

  const onChange = (event) => {
    const { value, id: name } = event.target;
    changeCurrentContactHandler({ ...state.currentContact, [name]: value });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    await changeContactHandler(state.currentContact);
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
