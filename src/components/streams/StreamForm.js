import React, { useState } from "react";
import InputField from "../form/InputField";

const StreamForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form className="ui form" onSubmit={onSubmit}>
      <InputField
        name="title"
        type="text"
        label="Enter title"
        handleChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder={props.title ? props.title : ""}
      />
      <InputField
        name="description"
        type="text"
        label="Enter description"
        handleChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder={props.description ? props.description : ""}
      />
      <button className="ui button primary">Create Stream</button>
    </form>
  );
};

export default StreamForm;
