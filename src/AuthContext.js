import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize loggedIn state with the value from localStorage if available
  const [loggedIn, setLoggedIn] = useState(
    () => localStorage.getItem('loggedIn') === 'true'
  );

  // Update localStorage whenever loggedIn state changes
  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn);
  }, [loggedIn]);

  const toggleLoggedIn = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, toggleLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
