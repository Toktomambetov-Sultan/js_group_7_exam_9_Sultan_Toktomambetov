import {
  Card,
  CardContent,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import React from "react";

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

const ContactItem = (props) => {
  const classes = useStyles();
  return (
    <ListItem>
      <Card className={classes.Card} onClick={props.onClick}>
        <CardContent className={classes.CardContent}>
          <div className="img">
            <img src={props.imgSrc} alt={props.name} />
          </div>
          <Typography variant="h5" className="ContactName">
            {props.name}
          </Typography>
        </CardContent>
      </Card>
    </ListItem>
  );
};

export default ContactItem;
