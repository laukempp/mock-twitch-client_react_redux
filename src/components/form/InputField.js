import React, { useState, forwardRef, use } from "react";

const InputField = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...otherProps} onChange={handleChange} autoComplete="off" />
    </div>
  );
};

export default InputField;
