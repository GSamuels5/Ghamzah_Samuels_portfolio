import { footer } from "framer-motion/client"
import GithubIcon from '@/assets/icons/github.svg';
import LinkedinIcon from '@/assets/linkedin-svgrepo-com.svg';
import CodePenIcon from "@/assets/codepen-01-svgrepo-com.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
  <div className="container">
    <div>
      <div>&copy;{currentYear} <p>All rights reserved </p></div>
      <nav className="flex flex-col justify-center items-center w-full ">
        <a href="#"><LinkedinIcon  className="w-[50px] h-[50px]" /></a>
        <a href="#" ><GithubIcon  className="w-[50px] h-[50px]" /></a>
        <a href="#" ><CodePenIcon  className="w-[50px] h-[50px]"/></a>
      </nav>
    </div>
  </div>
  </footer>
  );
};
