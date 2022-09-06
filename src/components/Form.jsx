import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {/* TERNARY OPERATOR ----&&----- */}
      {props.isRegistered === false && <input type="password" placeholder="Confirm Password" />}
       {/* TERNARY OPERATOR ----?----- */}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
