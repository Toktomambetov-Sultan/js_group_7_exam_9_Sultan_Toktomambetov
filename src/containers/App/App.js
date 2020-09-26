import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./App.css";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" />
          <Route path="/add" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
