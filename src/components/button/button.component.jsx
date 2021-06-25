import React from "react";
import "./button-styles.scss";

function CustomButton({ children, google, ...otherProps}) {
  return <button  className={`${google?"google-button ":" "}custom-button`} type={otherProps.type} onClick={otherProps.handler} >{children}</button>;
}

export default CustomButton;
