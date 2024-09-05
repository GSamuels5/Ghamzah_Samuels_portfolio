import pictureMe from '@/assets/images/new.jpg';
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg'
export const HeroSection = () => {
  return <div>
    <div className="container">
<Image src={pictureMe} alt="picture of Ghamzah"/>
<div></div>
<div> Available for new projects</div>
    </div>
    <h1>Welcome to the portfolio of Ghamzah Samuels</h1>
    <p>I create simple websites and digital branding </p>
    <div>
    <button> <span>Learn more </span>
    </button>
    <button> 
      <span><ArrowDown/>
        </span><span>Download my CV </span>
    </button>
    </div>
  </div>;
};
