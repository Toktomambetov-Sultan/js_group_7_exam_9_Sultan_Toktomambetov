import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Main from "../Main/Main";
import "./App.css";
import AddNewContactBlock from "./../AddNewContactBlock/AddNewContactBlock"

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/add" exact component={AddNewContactBlock} />
          <Route path="/" exact component={Main} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
