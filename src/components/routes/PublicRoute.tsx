// import { useAppContext } from '../contexts';

// restricted: false -> Accessible to all users - Example: Home
// restricted: true  -> Accessible to all users that are NOT logged in - Example: Sign In Page

const PublicRoute = ({ component: Component, ...rest }: any) => {
  // const { isLoggedIn } = useAppContext();
  return <Component {...rest} />;
};

export default PublicRoute;
