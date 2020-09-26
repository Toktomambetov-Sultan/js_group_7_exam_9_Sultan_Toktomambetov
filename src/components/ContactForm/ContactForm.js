import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormInput from "./FormInput/FormInput";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2, "auto", 0),
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ContactForm = ({ onSubmit, onChange }) => {
  const classes = useStyles();
  const currentContact = useSelector((state) => state.currentContact);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form validate="true" onChange={onChange} onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <FormInput
              value={currentContact.name}
              label="name"
              id="name"
              required
            />
            <FormInput
              value={currentContact.phoneNumber}
              label="Phone number"
              id="phoneNumber"
              required
              type="number"
            />
            <FormInput
              value={currentContact.email}
              label="Email Adress"
              id="email"
            />
            <FormInput
              value={currentContact.imgSrc}
              label="URL for image"
              id="imgSrc"
            >
              <Avatar className={classes.avatar} alt="Persons image" src={currentContact.imgSrc} />
            </FormInput>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            continue
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ContactForm;
