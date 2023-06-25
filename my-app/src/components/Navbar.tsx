import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for the component

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call the provided onLogout function
    navigate("/"); // Navigate to the homepage using useNavigate
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="navbar-items">
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
