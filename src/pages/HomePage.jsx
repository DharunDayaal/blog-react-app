import React from "react";
import { useUserAuth } from "../configuration/UserAuthContext";
import { Button } from "react-bootstrap";
import NavBar from "../components/navBar"

const HomePage = () => {
  const { user, logOut } = useUserAuth();
  console.log(user)

  const handleLogOut = async () => {
    try {
      await logOut()
    }
    catch(e){
      console.log(e.message)
    }
  }

  return (
    <div>
      {user ? (
        <div className="m-0 p-0">
          <NavBar />
        </div>
      ) : (
        <p>Loading blog data...</p>
      )}
    </div>
  );
  
};

export default HomePage;
