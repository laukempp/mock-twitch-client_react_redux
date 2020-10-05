import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import StreamList from "./streams/StreamList";
import CreateStream from "./streams/CreateStream";
import DeleteStream from "./streams/DeleteStream";
import EditStream from "./streams/EditStream";
import ShowStream from "./streams/ShowStream";
import Header from "./Layout/Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={CreateStream} />
        <Route path="/streams/edit" exact component={EditStream} />
        <Route path="/streams/delete" exact component={DeleteStream} />
        <Route path="/streams/show" exact component={ShowStream} />
      </BrowserRouter>
    </div>
  );
};

export default App;
