import React from "react";
import { useUserAuth } from "../configuration/UserAuthContext";
import { Button } from "react-bootstrap";

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
    <>
      {user ? (
        <>
          Hello <br />{user.email}
          <Button variant="primary" onClick={handleLogOut}>Log Out</Button>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </>
  );
  
};

export default HomePage;
