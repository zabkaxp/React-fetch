import React from "react";
import "./User.css";

const User = props => {
  return (
    <div className={"containerDetails"}>
      <img src={props.picture} alt={props.name} />
      <h2>{props.title + " " + props.name + " " + props.surname}</h2>
      <h3>{props.email}</h3>
    </div>
  );
};
export default User;
