import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import React from "react";
import { AiOutlinePhone } from "react-icons/ai";

function Header() {
  return (

    <Navbar isBordered>
      <NavbarBrand>
      <img src="esepelogo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
      </NavbarBrand>
    </Navbar>

  );
}

export default Header;
