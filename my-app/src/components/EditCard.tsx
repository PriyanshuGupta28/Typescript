import React, { useState } from "react";
import { motion } from "framer-motion";
import "./EditCard.css"; // Import the CSS file for the component

interface EditCardProps {
  onSave: (updatedData: any) => void;
}

const EditCard: React.FC<EditCardProps> = ({ onSave }) => {
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cta, setCta] = useState("");

  const handleSave = () => {
    const updatedData = {
      thumbnail,
      title,
      description,
      cta,
    };

    onSave(updatedData);
    setThumbnail("");
    setTitle("");
    setDescription("");
    setCta("");
  };

  return (
    <motion.div className="edit-card-container">
      <h3>Edit Card</h3>
      <div>
        <label>Thumbnail:</label>
        <motion.input
          type="text"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          whileFocus={{ borderColor: "#ff8f00" }}
        />
      </div>
      <div>
        <label>Title:</label>
        <motion.input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          whileFocus={{ borderColor: "#ff8f00" }}
        />
      </div>
      <div>
        <label>Description:</label>
        <motion.textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          whileFocus={{ borderColor: "#ff8f00" }}
        />
      </div>
      <div>
        <label>Call to Action:</label>
        <motion.input
          type="text"
          value={cta}
          onChange={(e) => setCta(e.target.value)}
          whileFocus={{ borderColor: "#ff8f00" }}
        />
      </div>
      <motion.button whileHover={{ scale: 1.05 }} onClick={handleSave}>
        Save
      </motion.button>
    </motion.div>
  );
};

export default EditCard;
