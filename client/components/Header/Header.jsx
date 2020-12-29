import React from "react";

export const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/706/706164.svg"
          alt="logo"
        />
        <h1>POCKET PANTRY</h1>
      </div>

      <div className="header-buttons">
        <button className="btn-left">Sign Up</button>
        <button className="btn-right">Sign In</button>
      </div>
    </div>
  );
};
