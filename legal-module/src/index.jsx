import React from "react";
import { useLoggedUser } from "./hooks/user/user.hook";

const LegalPage = () => {
  const { user } = useLoggedUser()

  if(user === undefined) return <p>LOADING</p>

  return <div>Bienvenido al módulo de Legal <b>{user.firstName} {user.lastName}</b></div>
};

export default LegalPage;
