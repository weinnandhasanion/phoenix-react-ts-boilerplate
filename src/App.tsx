import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from 'contexts';
import { RoutesGenerator } from 'components/routes';
import { routes } from 'constants/routes';
import 'App.css';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <RoutesGenerator routes={routes} />
      </Router>
    </AppProvider>
  );
}
