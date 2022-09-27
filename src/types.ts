export type Route = {
  path: string;
  pathKey: string;
  component: React.FC;
  type: 'public' | 'private';
  restricted: boolean;
};

export type ErrorObject = { [key: string]: string };
