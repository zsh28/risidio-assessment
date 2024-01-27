import React from "react";
import { IoLogoDiscord } from "react-icons/io5";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-slate-200 flex w-full items-stretch justify-between gap-5 mt-40 pl-12 pr-14 py-9 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
      <section>
        <div className="text-zinc-800 text-2xl font-extrabold grow shrink basis-auto my-auto">
          MARKETPLACE.
        </div>
      </section>
     
      <div className="flex items-center justify-center ">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-800 text-lg font-semibold whitespace-nowrap flex items-center justify-center px-6 py-6 rounded-[10px] max-md:px-3 pt-4"
    aria-label="Facebook"
    role="button"
  >
    <FaFacebookF className="text-3xl" />
  </a>
  <a
    href="https://twitter.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-800 text-lg font-semibold whitespace-nowrap flex items-center justify-center px-6 py-6 rounded-[10px] max-md:px-3 pt-4"
    aria-label="Twitter"
    role="button"
  >
    <FaTwitter className="text-3xl" />
  </a>
  <a
    href="https://discord.gg/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-800 text-lg font-semibold whitespace-nowrap flex items-center justify-center px-6 py-6 rounded-[10px] max-md:px-3 pt-4"
    aria-label="Discord"
    role="button"
  >
    <IoLogoDiscord className="text-3xl" />
  </a>
  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-800 text-lg font-semibold whitespace-nowrap flex items-center justify-center px-6 py-6 rounded-[10px] max-md:px-3 pt-4"
    aria-label="Instagram"
    role="button"
  >
    <FaInstagram className="text-3xl" />
  </a>
</div>


    </div>
  );
}

export default Footer;
