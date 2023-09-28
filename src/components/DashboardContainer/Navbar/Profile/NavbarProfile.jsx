import React, { useState } from "react";
<<<<<<< HEAD

import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const NavbarProfile = () => {
  const user = {
    name: "DemoUser",
    email: "demo@gmail.com",
    role: "user",
    token: "fuifweghfuigsaedfjkhfghui",
  };

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const adminProfileOptions = [
    {
      id: "1",
      optionName: "View Profile",
      optionLogo: CgProfile,
    },

    {
      id: "2",
      optionName: "Add Application",
    },
    {
      id: "3",
      optionName: "Remove Application",
    },
    {
      id: "4",
      optionName: "modify Application",
    },
    {
      id: "5",
      optionName: "Sign Out ",
    },
  ];

  const userProfileOptions = [
    {
      id: "1",
      optionName: "View Profile",
      optionLogo: CgProfile,
    },
    {
      id: "2",
      optionName: "Change Password",
    },
    {
      id: "3",
      optionName: "Sign Out",
    },
  ];
  const profileOptions =
    user.role === "admin" ? adminProfileOptions : userProfileOptions;

  return (
    <>
      {/* profile  */}
      <div
        onClick={() => setIsProfileOpen(!isProfileOpen)}
        className=" flex items-center justify-between relative cursor-pointer"
=======
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import NavbarAppList from "../AppList/NavbarAppList";

const NavbarProfile = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const profileOptions = [
    {
      id: "1",
      optionName: "option 1",
    },
    {
      id: "2",
      optionName: "option 2",
    },
    {
      id: "3",
      optionName: "option 3",
    },
    {
      id: "4",
      optionName: "option 4",
    },
    {
      id: "5",
      optionName: "option 5",
    },
  ];
  return (
    <>
      {/* hamburger */}
      <div
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        className="md:hidden cursor-pointer "
      >
        {isHamburgerOpen ? (
          <RxCross2 size={40} />
        ) : (
          <GiHamburgerMenu size={40} />
        )}
      </div>
      {isHamburgerOpen && (
        <div className=" absolute shadow-lg py-3 top-20 left-0 w-full z-20 flex flex-col gap-2 bg-white border border-gray-200">
          <NavbarAppList />
        </div>
      )}
      {/* profile  */}
      <div
        onClick={() => setIsProfileOpen(!isProfileOpen)}
        className=" hidden md:flex items-center justify-between relative cursor-pointer"
>>>>>>> origin/master
      >
        <span className="mr-2">
          <CgProfile size={30} />
        </span>
<<<<<<< HEAD
        <span className="mr-2 text-lg">{user.name}</span>
=======
        <span className="mr-2 text-lg">Name</span>
>>>>>>> origin/master
        <span>
          {isProfileOpen ? (
            <IoMdArrowDropup size={30} />
          ) : (
            <IoMdArrowDropdown size={30} />
          )}
        </span>

        {isProfileOpen && (
<<<<<<< HEAD
          <div className=" absolute shadow-lg py-3 top-10 -right-0 w-72 z-20 flex flex-col gap-2 bg-white border border-rounded-lg border-gray-200">
            {profileOptions.map((items, index) => (
              <>
                <button
                  onClick={items.optionFunction}
                  className=" ml-7 flex justify-start items-center gap-1"
                >
                  {/* <span></span> */}
                  <span>{items.optionName} </span>
                </button>
              </>
            ))}
=======
          <div className=" absolute shadow-lg py-3 -bottom-14 -right-0 w-36 z-20 flex flex-col gap-2 bg-white border border-gray-200">
            <button> Sign Out</button>
>>>>>>> origin/master
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarProfile;
