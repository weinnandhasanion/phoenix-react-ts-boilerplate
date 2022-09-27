import { createContext, useContext, useState } from 'react';

const AppContext = createContext({
  isLoggedIn: false,
  toggleLogin: () => {},
});

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn((state) => !state);

  const providerValue = { isLoggedIn, toggleLogin };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
