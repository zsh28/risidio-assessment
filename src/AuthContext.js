import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
  });

  const [userNFTs, setUserNFTs] = useState(() => {
    const storedNFTs = localStorage.getItem('userNFTs');
    return storedNFTs ? JSON.parse(storedNFTs) : [];
  });

  useEffect(() => {
    localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
  }, [loggedIn]);

  useEffect(() => {
    localStorage.setItem('userNFTs', JSON.stringify(userNFTs));
  }, [userNFTs]);

  const toggleLoggedIn = () => {
    setLoggedIn((prevLoggedIn) => !prevLoggedIn);
  };

  const logout = () => {
    setLoggedIn(false);
    setUserNFTs([]);
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userNFTs');
  };

  const addToWallet = (nftImage) => {
    setUserNFTs((prevNFTs) => [...prevNFTs, nftImage]);
  };

  return (
    <AuthContext.Provider
      value={{ loggedIn, toggleLoggedIn, logout, userNFTs, addToWallet }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
