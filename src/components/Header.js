import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import profileIcon from '../images/profileicon.png';
import vector from '../images/vector.png';
import signOut from '../images/sign_out.png';
import closeCard from '../images/closecard.png';
import styled from 'styled-components';

function Header() {
  const { loggedIn, logout, userNFTs } = useAuth();
  const [showAccountCard, setShowAccountCard] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleAccountCard = () => {
    setShowAccountCard(!showAccountCard);
  };

  const NFTContainer = styled.div`
    max-height: 550px;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `;

  // Conditionally apply a class for the wallet section
  const headerClass = location.pathname === '/wallet' ? 'bg-slate-200' : '';

  const renderBreakLines = location.pathname !== '/wallet';

  return (
    <>
      {renderBreakLines && <br />}
      <header className={`self-stretch flex items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap px-2 relative ${headerClass}`}>
        <div className="text-zinc-800 text-3xl font-extrabold grow shrink basis-auto my-auto">
          <a href="/" className="text-zinc-800 text-3xl font-extrabold grow shrink basis-auto my-auto">
            MARKETPLACE.
          </a>
        </div>
        {loggedIn ? (
          <button
            onClick={toggleAccountCard}
            className="text-zinc-800 text-base font-semibold whitespace-nowrap justify-center items-stretch border border-[color:var(--Black,#23252B)] self-stretch px-5 py-6 rounded-[87px] border-solid max-md:px-3 pt-4 relative z-10"
          >
            Account
          </button>
        ) : (
          <a
            href="/wallet"
            className="text-zinc-800 text-base font-semibold whitespace-nowrap justify-center items-stretch border border-[color:var(--Black,#23252B)] self-stretch px-5 py-6 rounded-[87px] border-solid max-md:px-3 pt-4 relative z-10"
          >
            Connect Wallet
          </a>
        )}
        {showAccountCard && loggedIn && (
          <div className="px-3 bg-white flex min-h-[800px] max-w-[460px] w-full flex-col mx-auto rounded-3xl border-2 border-solid border-slate-950 absolute top-0 right-0 z-50">
              <div className="flex-row ">
                <button className="z-50" onClick={toggleAccountCard}>
                  <img src={closeCard} alt="Close" />
                </button>
                <button className="z-50" onClick={toggleAccountCard}>
                  <img src={closeCard} alt="Close" />
                </button>
              </div>
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center">
                <img src={profileIcon} alt="Profile Icon" className="rounded-full" />
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">STV6Q...4Z7WD</div>
                </div>
                <div className="ml-3">
                  <img src={vector} alt="Vector" className="w-5 h-5" />
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-500" onClick={logout}>
                <img src={signOut} alt="Sign Out" />
              </button>
            </div>
            <div className="text-neutral-500 text-sm leading-8 tracking-wider max-w-[130px]">
              In your wallet
            </div>
            <div className="text-slate-950 text-4xl font-semibold leading-[60.804px] max-w-[200px]" aria-label="Bitcoin Price">
              0.129 BTC
            </div>
            <div className="text-black text-2xl font-extrabold max-w-[200px]">
              Your NFTs
            </div>
            <div className="text-slate-500 text-1xl max-w-[313px] mx-auto">
              {userNFTs.length > 0 ? (
                <NFTContainer className="flex flex-wrap justify-center">
                  {userNFTs.map((nft, index) => (
                    <img key={index} src={nft} alt={`NFT ${index}`} className="aspect-[1.72] object-cover object-center w-11/12 flex-grow h-full rounded-3xl mx-auto mt-4" />
                  ))}
                </NFTContainer>
              ) : (
                <>
                  <div>You don't own any NFTs yet</div>
                  <a href="/collections/"
                    className="text-neutral-50 text-base font-semibold whitespace-nowrap justify-center items-center bg-zinc-800 max-w-[248px] px-16 py-6 rounded-[87px] mx-auto mt-4"
                    aria-label="Start Shopping"
                    role="button"
                  >
                  <button>
                    Start Shopping
                  </button>
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </header>
      {renderBreakLines && <br />}
    </>
  );
}

export default Header;
