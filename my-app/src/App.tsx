import React, { useEffect } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/pages/ProfilePage";
import { gapi } from "gapi-script";
import { AuthProvider } from "./components/AuthContext";
// import { AuthProvider } from "./AuthContext";

function App() {
  const clientId =
    "927445410653-rlbili14cc87hdhmd7n6mljm3ohtihh0.apps.googleusercontent.com";

  useEffect(() => {
    // Initialize Google API client
    function start() {
      gapi.client.init({
        clientId: clientId, // Set the client ID for authentication
        scope: "", // Set the scope of access permissions (if required)
      });
    }

    // Load the Google API client and start initialization
    gapi.load("client:auth2", start);
  }, []);

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/profileage" Component={ProfilePage} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
