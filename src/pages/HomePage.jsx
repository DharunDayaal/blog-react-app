import React from "react";
import { useUserAuth } from "../configuration/UserAuthContext";

const HomePage = () => {
  const { user } = useUserAuth();
  console.log(user)

  return <div>Hello <br />{user&& user.email}</div>;
};

export default HomePage;
