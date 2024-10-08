import React, { useState } from "react";

const ManualForm = () => {
  const [claims, setClaims] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle manual claim submission
    console.log("Claims:", claims);
    console.log("Ingredients:", ingredients);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Claims"
        value={claims}
        onChange={(e) => setClaims(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ManualForm;
