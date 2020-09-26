import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  DialogContent: {
    width: "500px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "strech",
    "& .img": {
      width: "150px",
      height: "150px",
    },
    "& img": {
      width: "100%",
      height: "100%",
    },
    "& .info": {
      flexGrow: "1",
      textAlign: "center",
    },
    "& .info-item": {
      margin: theme.spacing(1, 0),
    },
  },
  avatar: {
    margin: theme.spacing(2, "auto", 0),
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const ModalWin = (props) => {
  const classes = useStyle();
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogContent className={classes.DialogContent}>
        <div className="img">
          <Avatar
            className={classes.avatar}
            alt="Persons image"
            src={props.currentContact.imgSrc}
          />
        </div>
        <div className="info">
          <Typography className="info-item" variant="h4">
            {props.currentContact.name}
          </Typography>
          <Typography className="info-item" variant="h6">
            Phone number:{" "}
            <a href={"tel:" + props.currentContact.phoneNumber}>
              {props.currentContact.phoneNumber}
            </a>
          </Typography>
          <Typography className="info-item" variant="h6">
            Email:{" "}
            <a href={"mailto:" + props.currentContact.email}>
              {props.currentContact.email}
            </a>
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={props.onEdit}>Edit</Button>
        <Button onClick={props.onDelete} color="secondary" variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalWin;
