<<<<<<< HEAD
import React, { useState, useEffect } from "react";

// Layout
import HomeLayout from "../layouts/Homepage.layout";
import Navbar from "../components/DashboardContainer/Navbar/Navbar";
import AppDashboard from "../components/DashboardContainer/AppDashboard";
import { useNavigate } from "react-router-dom";

const Home = ({ setAppTabs, appTabs }) => {
  const navigate = useNavigate();
  const user = {
    name: "DemoUser",
    email: "demo@gmail.com",
    role: "admin",
    token: "fuifweghfuigsaedfjkhfghui",
  };

  // const tempTab = [
  //   {
  //     id: 1,
  //     appName: "App 1",
  //     appLogo: "https://via.placeholder.com/40",
  //   },
  //   {
  //     id: 2,
  //     appName: "App 2",
  //     appLogo: "https://via.placeholder.com/40",
  //   },
  //   {
  //     id: 3,
  //     appName: "App 3",
  //     appLogo: "https://via.placeholder.com/40",
  //   },
  // ];
  // const [appTabs, setAppTabs] = useState(tempTab);
=======
import React,{useState,useEffect} from "react";

// Layout
import HomeLayout from "../layouts/Homepage.layout";
import Dasboard from "../components/DashboardContainer/Dasboard";
import Navbar from "../components/DashboardContainer/Navbar/Navbar";
import AppDashboard from "../components/DashboardContainer/AppDashboard";

const Home = () => {
  const user = {
    name: "DemoUser",
    email: "demo@gmail.com",
    role: "Admin",
    token: "fuifweghfuigsaedfjkhfghui",
  };

  const tempTab = [
    {
      id:1,
      appName: "App 1",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    },
    {
      id:2,
      appName: "App 2",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    },
    {
      id:3,
      appName: "App 3",
      appLogo: "https://via.placeholder.com/40",
      active: true,
    }
  ]
  const [appTabs, setAppTabs] = useState(tempTab) 
>>>>>>> origin/master
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
<<<<<<< HEAD
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  useEffect(() => {
    if (appTabs.length === 0) {
      navigate("/dashboard");
    }
  }, [appTabs]);

=======
    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

>>>>>>> origin/master
  return (
    <>
      {user?.token ? (
        <>
<<<<<<< HEAD
          <Navbar
            setAppTabs={setAppTabs}
            appTabs={appTabs}
            windowWidth={windowWidth}
          />

          <AppDashboard
            setAppTabs={setAppTabs}
            appTabs={appTabs}
            windowWidth={windowWidth}
          />
=======
          <Navbar setAppTabs={setAppTabs} appTabs={appTabs} windowWidth={windowWidth}/>
          <AppDashboard setAppTabs={setAppTabs} appTabs={appTabs} windowWidth={windowWidth} />
>>>>>>> origin/master
        </>
      ) : (
        <h1> Un-Authorize Access. Please Login .</h1>
      )}
    </>
  );
};

export default HomeLayout(Home);
