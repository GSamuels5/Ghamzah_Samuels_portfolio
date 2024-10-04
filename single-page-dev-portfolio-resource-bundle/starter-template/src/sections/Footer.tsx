import { footer } from "framer-motion/client"
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
      <nav className="flex flex-col items-center md:flex-row gap-8">
        <a href="#" className="inline-flex items-center gap-1.5"><LinkedinIcon  className="w-[50px] h-[50px]" /></a>
        <a href="#"  className="inline-flex items-center gap-1.5" ><GithubIcon  className="w-[50px] h-[50px]" /></a>
        <a href="#"  className="inline-flex items-center gap-1.5"><CodePenIcon  className="w-[50px] h-[50px]"/></a>
      </nav>
    </div>
  </div>
  </footer>
  );
};
