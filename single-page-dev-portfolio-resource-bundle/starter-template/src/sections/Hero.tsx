
import pictureMe from '@/assets/images/20231009_110208-removebg-preview.png';
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from '@/assets/icons/star.svg'
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg'
export const HeroSection = () => {
  return(
<div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
  <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
  <div className='absolute inset-0 -z-30 opacity-5' style={{
    backgroundImage: `url(${grainImage.src})`
  }} ></div>
  <div className="hero-ring size-[620px]"></div>
  <div className="hero-ring size-[820px]"></div>
  <div className="hero-ring size-[1020px]"></div>
  <div className="hero-ring size-[1220px]"></div>
  <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' > 
  <SparkleIcon className="size-8 text-emerald-300/20" shouldSpin spinDuration='3s' / >
  </HeroOrbit>
  <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s'> 
  <SparkleIcon className="size-5 text-emerald-300/20" shouldSpin spinDuration='3s' / >
  </HeroOrbit>
 <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
 <div className="size-2 rounded-full bg-emerald-300/20  "/ >
 </HeroOrbit>
  <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='36s'> 
  <SparkleIcon className="size-10 text-emerald-300/20" shouldSpin spinDuration='3s'/ >
  </HeroOrbit>
  <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s'>
  <StarIcon className="size-12 text-emerald-300" shouldSpin spinDuration='7s'/>
  </HeroOrbit>
  <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='40s'>
  <StarIcon className="size-8 text-emerald-300" shouldSpin spinDuration='6s'/>
  </HeroOrbit>
 <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
 <div className="size-2 rounded-full bg-emerald-300/20  "/ >
 </HeroOrbit>
  <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='44s'> 
  <SparkleIcon className="size-14 text-emerald-300/20" shouldSpin spinDuration='6s' / >
  </HeroOrbit>
  {/* Circles */}
 <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='46s'>
 <div className="size-3 rounded-full bg-emerald-300/20  "/ >
 </HeroOrbit>
  <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='6s'>
  <StarIcon className="size-28 text-emerald-300"/>
  </HeroOrbit>

 </div>
  <div className="container">
    <div className='flex flex-col items-center '>
  <Image src={pictureMe} className='size-[298px]' alt="picture of Ghamzah"/>
<div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
  <div className="bg-green-500 size-2.5 rounded-full relative z-10"></div>
  <div className="bg-green-500 absolute size-2.5 rounded-full bg-green-500 opacity-75  animate-ping-large "></div>
  <div className='text-m font-medium'>Available for new projects</div>
  </div>
  <div className='sm:text-m'>
  <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 w-full  px-4 word-wider hover:text-sm'>Welcome to the portfolio of Ghamzah Samuels</h1>
  <p className='mt-4 text-center text-white/60 md:text-lg'>I create simple websites and digital branding </p>
 
    </div>
    <div className='flex flex-col items-center md:flex-row justify-center mt-8 gap-4'>
    <button className='inline-flex 
    z-50 relative
    items-center gap-2 border border-white/15 px-6 h-12 rounded-xl '> 
    <a href="#about" className='font-semibold'>Learn more </a>
    </button >
    <a href="https://drive.google.com/file/d/1xaPPEw1ccTa038d6pzZWcu04B9SpqjEP/view?usp=sharing" rel="noopener noreferrer" target="_blank"className='inline-flex items-center gap-2 border border-white  h-12 px-6 rounded-xl bg-dark-500 z-50 relative'
    aria-label="Download my CV (opens in a new tab)">
    <span><ArrowDown className="size-4" aria-hidden="true" />
        </span><span className='font-semibold'>Download my CV </span>
    </a>

    </div>

</div>
  </div>
</div>

  );
     
};
