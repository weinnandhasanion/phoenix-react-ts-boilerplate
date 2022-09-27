import { useAppContext } from 'contexts';

// Accessible only to logged in users - Example: Login Page
const PrivateRoute = ({ component: Component, restricted, ...rest }: any) => {
  const { isLoggedIn } = useAppContext();
  return isLoggedIn && restricted && <Component {...rest} />;
};

export default PrivateRoute;
