import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import { addNewContact, changeCurrentContact } from "../../store/actions";

const AddNewContactBlock = ({ history }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const changeCurrentContactHandler = (currentContact) =>
    dispatch(changeCurrentContact(currentContact));

  const addNewContactHandler = () => dispatch(addNewContact());

  const onChange = (event) => {
    const { value, id: name } = event.target;
    changeCurrentContactHandler({ ...state.currentContact, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addNewContactHandler();
    history.push({
      pathname: "/",
    });
  };

  return (
    <div>
      <ContactForm onChange={onChange} onSubmit={onSubmit} />
    </div>
  );
};

export default AddNewContactBlock;
