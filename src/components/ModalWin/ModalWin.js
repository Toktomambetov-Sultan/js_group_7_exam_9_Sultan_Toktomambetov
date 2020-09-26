import {
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
}));

const ModalWin = (props) => {
  const classes = useStyle();
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogContent className={classes.DialogContent}>
        <div className="img">
          <img
            src={props.currentContact.imgSrc}
            alt={props.currentContact.name}
          />
        </div>
        <div className="info">
          <Typography className="info-item" variant="h4">
            {props.currentContact.name}
          </Typography>
          <Typography className="info-item" variant="h6">
            Phone number: <a href={"tel:" + props.currentContact.phoneNumber}>
              {props.currentContact.phoneNumber}
            </a>
          </Typography>
          <Typography className="info-item" variant="h6">
            Email: <a href={"mailto:" + props.currentContact.email}>
              {props.currentContact.email}
            </a>
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onDelete} color="primary">
          Edit
        </Button>
        <Button onClick={props.onEdit} color="primary" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalWin;
