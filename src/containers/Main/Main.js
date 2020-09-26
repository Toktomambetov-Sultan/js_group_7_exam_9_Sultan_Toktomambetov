import React, { useState } from "react";
import { Container, List } from "@material-ui/core";
import ContactItem from "../../components/Main/ContactItem/ContactItem";
import ModalWin from "../../components/ModalWin/ModalWin";
import { useSelector } from "react-redux";

const Main = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const state = useSelector((state) => state);
  const closeModal = () => setIsOpenModal(false);
  return (
    <div>
      <Container>
        <List>
          {state.contacts.map((contact, index) => (
            <ContactItem
              key={index}
              name={contact.name}
              imgSrc={contact.imgSrc}
            />
          ))}
        </List>
      </Container>
      <ModalWin
        open={isOpenModal}
        onClose={closeModal}
        currentContact={state.currentContact}
      />
    </div>
  );
};

export default Main;
