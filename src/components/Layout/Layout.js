import {
  AppBar,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import React from "react";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Link: {
    color: "#fff",
    background: green[500],
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(1),
    textDecoration: "none",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyle();

  return (
    <div>
      <header>
        <AppBar position="static">
          <Container>
            <Toolbar className={classes.Toolbar}>
              <Typography variant="h5" noWrap>
                Contacts
              </Typography>
              <Link to="/add" className={classes.Link}>
                <Typography variant="h6">add new contact</Typography>
              </Link>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
