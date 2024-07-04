import { useOutletContext } from "react-router-dom"

export const useLoggedUser = () => {
    const [user] = useOutletContext();
  return { user }
}