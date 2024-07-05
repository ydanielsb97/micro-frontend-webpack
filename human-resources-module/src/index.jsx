import React from "react";
import { useLoggedUser } from "./hooks/user/user.hook";

const HumanResourcesPage = () => {
  const { user } = useLoggedUser()

  if(user === undefined) return <p>LOADING</p>

  return <div>Bienvenido al módulo de Recursos Humanos <b>{user?.firstName} {user?.lastName}</b></div>
};

export default HumanResourcesPage;
