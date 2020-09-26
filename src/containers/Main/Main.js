import React from "react";
import {
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import ContactItem from "../../components/Main/ContactItem/ContactItem";

const useStyles = makeStyles((theme) => ({
  Card: {
    width: "100%",
  },
  CardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .img": {
      width: "100px",
      height: "100px",
      border: "2px solid " + green[500],
    },
    "& img": {
      width: "100%",
      height: "100%",
    },
    "& .ContactName": {
      flexGrow: "1",
      textAlign: "center",
    },
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <List>
          <ContactItem />
        </List>
      </Container>
    </div>
  );
};

export default Main;
