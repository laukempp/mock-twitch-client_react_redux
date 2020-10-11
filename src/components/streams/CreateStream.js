import React, { useState } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions/index";
import InputField from "../form/InputField";

const CreateStream = ({ createStream }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createStream(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <InputField
        name="title"
        type="text"
        label="Enter title"
        handleChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <InputField
        name="description"
        type="text"
        label="Enter description"
        handleChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button className="ui button primary">asdfsdf</button>
    </form>
  );
};

export default connect(null, { createStream })(CreateStream);
