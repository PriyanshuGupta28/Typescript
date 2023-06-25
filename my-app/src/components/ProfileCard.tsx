import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "./AuthContext";
import "./ProfileCard.css"; // Import the CSS file for the component

interface ProfileCardProps {
  profilePic: string;
  name: string;
  city: string;
  address: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  profilePic,
  name,
  city,
  address,
}) => {
  const { user } = useContext(AuthContext);

  return (
    <motion.div
      className="profile-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Profile Page</h1>
      {user && (
        <div>
          <h2>Welcome, {user?.name}!</h2>
          <motion.img
            src={user?.avatar}
            alt="User Avatar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <p>City: {user?.city}</p>
          <p>Country: {user?.country}</p>
        </div>
      )}
    </motion.div>
  );
};

export default ProfileCard;
