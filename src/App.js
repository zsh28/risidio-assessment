import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Collections from './pages/collectionspage';
import Wallet from './pages/walletpage';
import Home from './pages/home';
import NotFound from './pages/notfound';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomeWithHeaderAndFooter />} />
          <Route path='/collections' element={<CollectionsWithHeaderAndFooter />} />
          <Route path='/wallet' element={<WalletWithHeader />} />
          <Route path='*' element={<NotFoundWithHeaderAndFooter />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

// Define a component for the Wallet page with only one header
const WalletWithHeader = () => (
  <>
    <Header />
    <Wallet />
  </>
);

//define other components with header and footer
const HomeWithHeaderAndFooter = () => (
  <>
    <Header />
    <Home />
    <Footer />
  </>
);

const CollectionsWithHeaderAndFooter = () => (
  <>
    <Header />
    <Collections />
    <Footer />
  </>
);

const NotFoundWithHeaderAndFooter = () => (
  <>
    <Header />
    <NotFound />
    <Footer />
  </>
);

export default App;
