import { Home } from 'components/pages';
import { Route } from 'types';

export const routes: Route[] = [
  {
    path: '/',
    pathKey: '/',
    component: Home,
    type: 'public',
    restricted: false,
  },
];
