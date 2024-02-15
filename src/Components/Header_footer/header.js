import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";

import { Link } from "react-router-dom";

import { CityLogo, showErrorToast, showSuccessToast } from "../Utils/tools";
import { firebase } from "../../firebase";

const Header = ({ user }) => {
    console.log(user)
  const logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        showSuccessToast("Good bye !!");
      })
      .catch((error) => {
        showErrorToast(error.message);
      });
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#98c5e9",
        boxShadow: "none",
        padding: "10px 0",
        borderBottom: "2px solod #00285e",
      }}
    >
      <Toolbar style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <div className="header_logo">
            <CityLogo link={true} linkTo={"/"} width="70px" height="70px" />
          </div>
        </div>

        <Link to="/the_team">
          <Button color="inherit">The Team</Button>
        </Link>
        <Link to="/the_matches">
          <Button color="inherit">Matches</Button>
        </Link>
        {user ? (
          <>
            <Link to="/dashboard">
              <Button color="inherit">Dashboard</Button>
            </Link>
            <Button color="inherit" onClick={() => logoutHandler()}>
              Log out
            </Button>
          </>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
