import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import VerificationMethods from "./Components/VerificationMethods";

function App() {
  const [showVerificationMethods, setShowVerificationMethods] = useState(false);

  const handleGetStartedClick = () => {
    setShowVerificationMethods(true); // Show verification methods and hide Home
  };

  return (
    <div className="container-fluid">
      <Header />

      <div> 
        {/* Conditionally render either the Home or VerificationMethods */}
        {!showVerificationMethods ? (
          <Home onGetStarted={handleGetStartedClick} />
        ) : (
          <VerificationMethods />
        )}
      </div>
    </div>
  );
}

export default App;
