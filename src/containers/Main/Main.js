import React, { useState } from "react";
import { Container, List } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import ContactItem from "../../components/Main/ContactItem/ContactItem";
import { Link, NavLink } from "react-router-dom";
import ModalWin from "../../components/ModalWin/ModalWin";

const Main = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);
  const closeModal = () => setIsOpenModal(false);
  const currentContact = {
    name: "",
    imgSrc: "",
    email: "",
    phoneNumber: "",
  };
  return (
    <div>
      <Container>
        <List>
          <ContactItem />
        </List>
      </Container>
      <ModalWin open={isOpenModal} currentContact={currentContact} />
    </div>
  );
};

export default Main;
