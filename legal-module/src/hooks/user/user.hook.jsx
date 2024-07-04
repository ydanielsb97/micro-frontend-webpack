import { useOutletContext } from "react-router-dom";

export const useLoggedUser = () => {
  const context = useOutletContext();

  if (context === null) return { user: null };

  const [user] = context;

  return { user };
};
