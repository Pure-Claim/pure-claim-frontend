import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import VerificationMethods from "./components/VerificationMethods";
import URLForm from "./Components/VerificationMethod/URLForm";
import BarcodeScanner from "./Components/VerificationMethod/BarcodeScanner";
import ManualForm from "./Components/VerificationMethod/ManualForm";
import MediaPicker from "./Components/VerificationMethod/MediaPicker";  
import "./App.css";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/verification",
      element:<VerificationMethods/>
    },
    {
      path:"/verification/urlform",
      element:<URLForm />
    },
    {
      path:"/verification/mannualform",
      element:<ManualForm/>
    },
    {
      path:"/verification/media",
      element:<MediaPicker />
    },
    {
      path:"/verification/barcode",
      element:<BarcodeScanner/>
    }
  ])

  // const [showVerificationMethods, setShowVerificationMethods] = useState(false);

  // const handleGetStartedClick = () => {
  //   setShowVerificationMethods(true); // Show verification methods and hide Home
  // };

  return (
    <div className="container-fluid">
      <Header />

      {/* <div>
        
        {!showVerificationMethods ? (
          <Home onGetStarted={handleGetStartedClick} />
        ) : (
          <VerificationMethods />
        )}
      </div> */}
      {/* <Home/> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
