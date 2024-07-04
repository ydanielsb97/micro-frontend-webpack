import React from "react";
import { useLoggedUser } from "../../../hooks/user/user.hook";

const HomePage = () => {
  const { user } = useLoggedUser()

  return (
    (user == undefined ? 
      <p>LOADING</p> : 
      <div>Welcome to Home Page <b>{user.firstName} {user.lastName}</b></div>)
  );
};

export default HomePage;