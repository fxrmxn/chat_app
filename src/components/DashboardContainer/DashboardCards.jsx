<<<<<<< HEAD
import React from "react";
import "./Styles/DashboardCards.css";
import { useNavigate } from "react-router-dom";
const DashboardCards = ({ setAppTabs, appTabs, windowWidth }) => {
  const navigate = useNavigate();
  const cardsData = [
    // { id: 1, title: "BasketHunt Academy", content: "Content for Card 1" },
    {
      id: 1,
      appName: "App 1",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      appName: "App 2",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      appName: "App 3",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 4,
      appName: "App 4",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 5,
      appName: "App 5",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 6,
      appName: "App 6",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 7,
      appName: "App 7",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 8,
      appName: "App 8",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 9,
      appName: "App 9",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 10,
      appName: "App 10",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 11,
      appName: "App 11",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 12,
      appName: "App 12",
      appLogo: "https://via.placeholder.com/40",
    },
    {
      id: 13,
      appName: "App 13",
      appLogo: "https://via.placeholder.com/40",
    },
  ];

  const addTab = (item) => {
    if (appTabs !== 0) {
      setAppTabs((prev) => {
        const presentData = prev.find((data) => data.id === item.id);
        if (!presentData) {
          if (windowWidth >= 1280) {
            if (prev.length === 3) prev.pop();
            return [item, ...prev];
          } else if (windowWidth < 640) {
            return [item];
          } else if (windowWidth < 1280) {
            if (prev.length === 2) prev.pop();
            return [item, ...prev];
          }
          return prev;
        }
        return prev;
      });
    }
  };
  const openApp = (card) => {
    addTab(card);
=======
import React, { useState } from "react";
import "./Styles/DashboardCards.css";
import { useNavigate } from "react-router-dom";

const DashboardCards = () => {
  const navigate = useNavigate();
  const cardsData = [
    { id: 1, title: "BasketHunt Academy", content: "Content for Card 1", image: "./image_cloud.png" },
    { id: 2, title: "BasketHunt Work", content: "Content for Card 2", image: "./image_cloud.png" },
    { id: 3, title: "BasketHunt office", content: "Content for Card 3", image: "./image_cloud.png" },
    { id: 4, title: "Basekthunt Traning", content: "Content for Card 4", image: "./image_cloud.png" },
    { id: 5, title: "BasketHunt wiki", content: "Content for Card 5", image: "./image_cloud.png" },
    { id: 6, title: "Baskethunt work", content: "Content for Card 6", image: "./image_cloud.png" },
    { id: 7, title: "BasketHunt careers", content: "Content for Card 7", image: "./image_cloud.png" },
    { id: 8, title: "zoho cliq", content: "Content for Card 8", image: "./image_cloud.png" },
  ];

  const openApp = () => {
>>>>>>> origin/master
    navigate("/appdashboard");
  };

  return (
<<<<<<< HEAD
    <div className="body-middle  ">
      <div className="card-grid ">
        {cardsData.map((card, index) => (
          <div
            onClick={() => openApp(card)}
            className="card cursor-pointer"
            key={card.id}
          >
            <h2>{card.appName}</h2>
            {/* <p>{card.content}</p> */}
          </div>
        ))}
=======
    <div className="body-middle">
      <div className="card-grid">
        {cardsData.map((card) => (
          <div onClick={openApp} className="card cursor-pointer" key={card.id}>
            <img className="imgc" src={card.image} alt="img" />
            <h2>{card.title}</h2>
            {/* <p>{card.content}</p> */}
          </div>
        ))}
        <img className="img" src="./circle image.png" alt="img" />
>>>>>>> origin/master
      </div>
    </div>
  );
};

export default DashboardCards;
