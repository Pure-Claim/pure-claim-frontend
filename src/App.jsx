import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import VerificationMethods from "./components/VerificationMethods";

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
