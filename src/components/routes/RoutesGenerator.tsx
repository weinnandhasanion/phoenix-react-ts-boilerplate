import { Routes, Route } from 'react-router-dom';
import { Route as RouteType } from 'types';
import { PublicRoute, PrivateRoute } from '.';

const RoutesGenerator = ({ routes }: any) => {
  return (
    <Routes>
      {routes.map(({ type, pathKey, ...rest }: RouteType) => {
        const { path } = rest;

        const FinalRoute =
          type === 'public' ? (
            <PublicRoute {...rest} />
          ) : (
            <PrivateRoute {...rest} />
          );

        return <Route key={pathKey} path={path} element={FinalRoute} />;
      })}
    </Routes>
  );
};

export default RoutesGenerator;
