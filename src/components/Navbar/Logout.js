import React from "react";
import Spinner from "../common/spinner/Spinner";
const Logout = ({ loading, onLogout }) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="logout-window">
      <button onClick={onLogout}>Sign Out</button>
    </div>
  );
};

export default Logout;
