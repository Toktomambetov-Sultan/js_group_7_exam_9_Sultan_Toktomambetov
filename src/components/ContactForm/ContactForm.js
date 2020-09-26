import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormInput from "./FormInput/FormInput";

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

const ContactForm = (props) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form Validate>
          <Grid container spacing={2}>
            <FormInput label="name" id="name" />
            <FormInput label="Phone number" id="phoneNumber" />
            <FormInput label="Email Adress" id="email" />
            <FormInput label="URL for image" id="imgSrc">
              <Avatar className={classes.avatar} alt="Persons image" src={""} />
            </FormInput>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ContactForm;
