import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import Header from "./components/Header";
import Home from "./components/Home";
import VerificationMethods from "./components/VerificationMethods";
import "./App.css";
=======
import Header from "./Components/Header";
import Home from "./Components/Home";
import VerificationMethods from "./Components/VerificationMethods";
>>>>>>> 64b805337f0fbdc6a30e790af960428139cfefe1

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
