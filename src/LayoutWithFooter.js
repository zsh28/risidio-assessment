import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const LayoutWithFooter = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutWithFooter;
