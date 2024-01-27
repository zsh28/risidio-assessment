import React from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Wallet = () => {
    const navigate = useNavigate();
    const { toggleLoggedIn } = useAuth();
  
    const handleLogin = () => {
        toggleLoggedIn(); // Toggle login status
        navigate('/collections'); // Redirect to collections page after login
    };

    return (
        <>
            <div className="bg-slate-200 flex flex-col items-center pl-20 pr-16 py-11 max-md:px-5">
                <h2 className="text-black text-3xl font-extrabold mt-64 max-md:max-w-full max-md:mt-10">Choose the wallet to connect</h2>
                <div className="w-[699px] max-w-full mt-24 max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                            <div className="bg-neutral-50 flex w-[191px] shrink-0 h-[174px] flex-col mx-auto rounded-2xl max-md:mt-10" aria-label="Wallet 1" role="img" onClick={handleLogin}>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="bg-neutral-50 flex w-[191px] shrink-0 h-[174px] flex-col mx-auto rounded-2xl max-md:mt-10" aria-label="Wallet 2" role="img" onClick={handleLogin}>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="bg-neutral-50 flex w-[191px] shrink-0 h-[174px] flex-col mx-auto rounded-2xl max-md:mt-10" aria-label="Wallet 3" role="img" onClick={handleLogin}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wallet;
