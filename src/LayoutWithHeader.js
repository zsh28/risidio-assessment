// LayoutWithoutFooter.js
import React from 'react';
import Header from './components/Header';

const LayoutWithoutFooter = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutWithoutFooter;
