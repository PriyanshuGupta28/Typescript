import React from "react";
import { motion } from "framer-motion";
import "./Card.css"; // Import the CSS file for the component

interface CardProps {
  thumbnail: string;
  title: string;
  description: string;
  cta: string;
}

const Card: React.FC<CardProps> = ({ thumbnail, title, description, cta }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <p>Thumbnail</p>
      <img src={thumbnail} alt="Thumbnail" />
      <h2>Title: {title}</h2>
      <p style={{ marginBottom: "8px" }}>Description: {description}</p>
      <button>Call To Action: {cta}</button>
    </motion.div>
  );
};

export default Card;
