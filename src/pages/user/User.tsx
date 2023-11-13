import React from "react";
import "./user.scss";
import Single from "../../components/single/Single";
const User = () => {
  // Fetch data and send to Single Component
  return (
    <div className="user">
      <Single />
    </div>
  );
};

export default User;
