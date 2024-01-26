import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Collections from './pages/collectionspage';
import Wallet from './pages/walletpage';
import Home from './pages/home';
import NotFound from './pages/notfound';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='*' element={<NotFound />} /> 
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
