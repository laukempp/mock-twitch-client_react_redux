import React, { useState } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions/index";
import StreamForm from "./StreamForm";

const CreateStream = ({ createStream }) => {
  const handleSubmit = (title, description) => {
    createStream(title, description);
  };

  return (
    <div>
      <h3>Create a Stream</h3>
      <StreamForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(CreateStream);
