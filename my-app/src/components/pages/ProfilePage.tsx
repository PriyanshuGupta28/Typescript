import React, { useState } from "react";
import Navbar from "../Navbar";
import ProfileCard from "../ProfileCard";
import Card from "../Card";
import EditCard from "../EditCard";
import "./ProfilePage.css"; // Import the CSS file for the component

const ProfilePage: React.FC = () => {
  const handleLogout = () => {
    // Perform logout logic
    // Redirect to login page on successful logout
    // history.push("/");
  };

  const [profileData, setProfileData] = useState({
    profilePic: "",
    name: "",
    city: "Example City",
    address: "Example Address",
  });

  const [cardData, setCardData] = useState({
    thumbnail: "",
    title: "",
    description: "",
    cta: "",
  });

  const handleCardSave = (updatedData: any) => {
    setCardData(updatedData);
  };

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <div className="profile-page-container">
        {" "}
        {/* Apply the profile-page-container class */}
        <div className="left-section">
          <ProfileCard {...profileData} />
        </div>
        <div className="right-section">
          <Card {...cardData} />
          <EditCard onSave={handleCardSave} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
