import React from 'react';
import { useAuth } from '../AuthContext';

function Header() {
  const { loggedIn, toggleLoggedIn } = useAuth();

  const buttonText = loggedIn ? 'Account' : 'Connect Wallet';

  return (
    <>
      <br />
      <header className="self-stretch flex items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap px-2">
        <div className="text-zinc-800 text-3xl font-extrabold grow shrink basis-auto my-auto">
          <a href="/" className="text-zinc-800 text-3xl font-extrabold grow shrink basis-auto my-auto">
            MARKETPLACE.
          </a>
        </div>
        <button 
          aria-label="Connect Wallet" 
          className="text-zinc-800 text-base font-semibold whitespace-nowrap justify-center items-stretch border border-[color:var(--Black,#23252B)] self-stretch px-5 py-6 rounded-[87px] border-solid max-md:px-3 pt-4"
          onClick={toggleLoggedIn}
        >
          {buttonText}
        </button>
      </header>
      <br />
    </>
  );
}

export default Header;
