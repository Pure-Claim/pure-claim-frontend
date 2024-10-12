import React, { useState } from "react";

const ManualForm = () => {
  const [claims, setClaims] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle manual claim submission
    console.log("Claims:", claims);
    console.log("Ingredients:", ingredients);
    
    alert(`Claims: ${claims}\nIngredients: ${ingredients}`); // Add an alert to confirm submission
  };

  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto">
      <div className="mb-3">
        <label htmlFor="claimsInput" className="form-label">
          Claims
        </label>
        <input
          id="claimsInput"
          type="text"
          className="form-control"
          placeholder="Enter Claims"
          value={claims}
          onChange={(e) => setClaims(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ingredientsInput" className="form-label">
          Ingredients
        </label>
        <input
          id="ingredientsInput"
          type="text"
          className="form-control"
          placeholder="Enter Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ManualForm;
