import React from "react";
<<<<<<< HEAD
// import DashboardNavbar from "./Navbar/DashboardNavbar";
import DashboardSearchBar from "./DashboardSearchBar";
import DashboardCards from "./DashboardCards";
import Navbar from "./Navbar/Navbar";
const Dasboard = ({ setAppTabs, appTabs, windowWidth }) => {
=======
import DashboardNavbar from "./Navbar/DashboardNavbar";
import DashboardSearchBar from "./DashboardSearchBar";
import DashboardCards from "./DashboardCards";
import Navbar from "./Navbar/Navbar";
const Dasboard = () => {
>>>>>>> origin/master
  return (
    <>
      {/* <div>dasboard</div> */}
      <div>
        {/* <DashboardNavbar /> */}
        <Navbar />
        <DashboardSearchBar />
<<<<<<< HEAD
        <DashboardCards
          setAppTabs={setAppTabs}
          appTabs={appTabs}
          windowWidth={windowWidth}
        />
=======
        <DashboardCards />
>>>>>>> origin/master
      </div>
    </>
  );
};

export default Dasboard;
