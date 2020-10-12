import React from "react";
import { Router, Route } from "react-router-dom";

import StreamList from "./streams/StreamList";
import CreateStream from "./streams/CreateStream";
import DeleteStream from "./streams/DeleteStream";
import EditStream from "./streams/EditStream";
import ShowStream from "./streams/ShowStream";
import Header from "./Layout/Header";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import history from "../utils/history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={CreateStream} />
        <Route path="/streams/edit/:id" exact component={EditStream} />
        <Route path="/streams/delete" exact component={DeleteStream} />
        <Route path="/streams/show" exact component={ShowStream} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
      </Router>
    </div>
  );
};

export default App;
