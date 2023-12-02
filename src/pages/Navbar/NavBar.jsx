import React from "react";
import { HeaderComponents } from "../../Components";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <HeaderComponents />
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;

