import React from "react";
import './form-input.styles.scss';
function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input name={otherProps.name} type={otherProps.type} onChange={handleChange} className="form-input" />
      {label ? (
        <label
          htmlFor=""
          className={`${
            otherProps.value.length ? "shrink" : " "
          } form-input-label`}
        >
          {label}
        </label>
      ) : (
        ""
      )}
    </div>
  );
}

export default FormInput;
