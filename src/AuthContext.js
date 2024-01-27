import { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the logged in state and a function to toggle it
const AuthContext = createContext();

// Create a provider to wrap around the app and provide the logged in state
export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
  });
//set user nfts
  const [userNFTs, setUserNFTs] = useState(() => {
    const storedNFTs = localStorage.getItem('userNFTs');
    return storedNFTs ? JSON.parse(storedNFTs) : [];
  });
//set local storage
  useEffect(() => {
    localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
  }, [loggedIn]);
//set local storage 
  useEffect(() => {
    localStorage.setItem('userNFTs', JSON.stringify(userNFTs));
  }, [userNFTs]);
  //toggle logged in function
  const toggleLoggedIn = () => {
    setLoggedIn((prevLoggedIn) => !prevLoggedIn);
  };
//logout function
  const logout = () => {
    setLoggedIn(false);
    setUserNFTs([]);
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userNFTs');
  };
//add to wallet function
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
