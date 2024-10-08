import React, { useState } from "react";

const MediaPicker = () => {
  const [mediaFile, setMediaFile] = useState(null);

  const handleMediaChange = (e) => {
    setMediaFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle media submission
    console.log("Media submitted:", mediaFile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleMediaChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MediaPicker;
