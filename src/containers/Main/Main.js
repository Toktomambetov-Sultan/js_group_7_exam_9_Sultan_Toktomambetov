import React, { useState } from "react";
import { Container, List } from "@material-ui/core";
import ContactItem from "../../components/Main/ContactItem/ContactItem";
import ModalWin from "../../components/ModalWin/ModalWin";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentContact, deleteContact } from "../../store/actions";

const Main = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [index, setIndex] = useState(null);
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const closeModal = () => setIsOpenModal(false);

  const openModal = () => setIsOpenModal(true);

  const deleteContactHandler = (index) => dispatch(deleteContact(index));

  const onDelete = () => {
    closeModal();
    deleteContactHandler(index);
  };
  const onCardClick = (index) => {
    dispatch(changeCurrentContact({ ...state.contacts[index] }));
    setIndex(index);
    openModal();
  };
  return (
    <div>
      <Container>
        <List>
          {state.contacts.map((contact, index) => (
            <ContactItem
              key={index}
              onClick={() => onCardClick(index)}
              currentContact={contact}
            />
          ))}
        </List>
      </Container>
      <ModalWin
        open={isOpenModal}
        onClose={closeModal}
        currentContact={state.currentContact}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Main;
