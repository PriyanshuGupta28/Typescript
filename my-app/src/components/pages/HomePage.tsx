import { gapi } from "gapi-script";
import React, { useContext, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../AuthContext";
import "./HomePage.css"; // Import the CSS file

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
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

  const responseGoogle = (response: any) => {
    // Extract user information from the Google login response
    const user = {
      name: response?.profileObj.name,
      avatar: response?.profileObj?.imageUrl,
      city: "Example City",
      country: "Example Country",
    };

    setUser(user); // Set the user data in the context

    navigate("/homepage");
    // setIsLoggedIn(true);
    // router.push("/homepage"); // Navigates to the second page
    // setData(user);
    navigate("/profileage");
    console.log(response, "hihi");
  };

  const responseGoogleFailure = (response: any) => {
    console.log("Login failed:", response);
    // setIsLoggedIn(false);
    if (response.error === "popup_closed_by_user") {
      console.log("User closed the login popup");
      // Provide feedback to the user that the login process was canceled
    } else {
      // Handle other error cases
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Google SSO Login Page</h1>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogleFailure}
          cookiePolicy={"single_host_origin"}
        />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
