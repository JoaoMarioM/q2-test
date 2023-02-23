import { AuthRoutes } from "./auth.routes";

import useAuth from "../hooks/auth"
import { AuthenticatedRoutes } from "./authenticated.routes";

export const Routes = () => {
  const { getData, user } = useAuth()

  // getData()

  if(user.uid) return <AuthenticatedRoutes/>;

  return <AuthRoutes />;
};
