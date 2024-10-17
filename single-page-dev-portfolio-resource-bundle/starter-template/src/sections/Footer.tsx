// import { footer } from "framer-motion/client"
import GithubIcon from '@/assets/icons/github.svg';
import LinkedinIcon from '@/assets/linkedin-svgrepo-com.svg';
import CodePenIcon from "@/assets/codepen-01-svgrepo-com.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      
  <div className="container">
    <div className="border-t border-white/15 py-6 flex flex-col items-center
   md:flex-row md:justify-between text-sm gap-8">
      <div>&copy;{currentYear} <p>All rights reserved </p></div>
      <nav className="flex items-center md:flex-row sm:inline gap-8">
        <a href="https://www.linkedin.com/in/ghamzahsamuels/" target='_blank' className="inline-flex items-center gap-1.5 px-2"><LinkedinIcon  className="w-[50px] h-[50px]" /></a>
        <a href="https://github.com/GSamuels5" target='_blank' className="inline-flex items-center gap-1.5 px-2" ><GithubIcon  className="w-[50px] h-[50px]" /></a>
        <a href="https://codepen.io/Ghamzah-Samuels"  target='_blank' className="inline-flex items-center gap-1.5 px-2"><CodePenIcon  className="w-[50px] h-[50px]"/></a>
      </nav>
    </div>
  </div>
  </footer>
  );
};
