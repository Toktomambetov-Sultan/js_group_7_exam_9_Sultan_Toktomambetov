import React, { useCallback, useEffect, useState } from "react";
import { Container, List } from "@material-ui/core";
import ContactItem from "../../components/Main/ContactItem/ContactItem";
import ModalWin from "../../components/ModalWin/ModalWin";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentContact,
  deleteContact,
  initContacts,
} from "../../store/actions";

const Main = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const changeCurrentContactHandler = (index) => {
    dispatch(changeCurrentContact({ ...state.contacts[index] }));
  };
  const initContactsHandler = async () => {
    await dispatch(initContacts());
  };
  const initContactsCallbak = useCallback(initContactsHandler, [dispatch]);

  useEffect(() => {
    initContactsCallbak();
  }, [initContactsCallbak]);

  const closeModal = async () => {
    setIsOpenModal(false);
  };

  const openModal = () => setIsOpenModal(true);

  const deleteContactHandler = async (id) => {
    await dispatch(deleteContact(id));
  };

  const onDelete = async () => {
    await deleteContactHandler(state.currentContact.id);
    await initContactsHandler();
    closeModal();
  };
  const onCardClick = (id) => {
    const index = state.contacts.findIndex((elem) => elem.id === id);
    changeCurrentContactHandler(index);
    openModal();
  };
  const onEdit = () => {
    closeModal();
    props.history.push({ pathname: "/edit" });
  };
  return (
    <div>
      <Container>
        <List>
          {state.contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              onClick={() => onCardClick(contact.id)}
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
        onEdit={onEdit}
      />
    </div>
  );
};

export default Main;
