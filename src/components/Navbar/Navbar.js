import React from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import database from "../../database";
import "../Navbar/Navbar.css";

let loggedInUser;

const getLoggedInUser = () => {
  loggedInUser = database.find((user) => user.isLoggedIn === true);
  return loggedInUser?.username ?? "";
};

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav id="nav">
      <div className="title">Hello {getLoggedInUser()}</div>
      <div className="nav-right">
        <div className="challenge">Role Challenge - Software Engineering</div>
        <Button
          basic
          color="blue"
          className="logout"
          onClick={() => {
            navigate("/");
            loggedInUser.isLoggedIn = false;
          }}
        >
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
