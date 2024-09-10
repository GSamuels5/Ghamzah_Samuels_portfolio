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
  <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent">
  <div className='absolute inset-0 -z-30 opacity-5' style={{
    backgroundImage: `url(${grainImage.src})`
  }} ></div>
  <div className=" hero-ring size-[620px]"></div>
  <div className=" hero-ring size-[820px]"></div>
  <div className=" hero-ring size-[1020px]"></div>
  <div className=" hero-ring size-[1220px]"></div>
  <HeroOrbit size={800} rotation={-72}> 
  <StarIcon className="size-28 text-emerald-300"/ >
  </HeroOrbit>
 <HeroOrbit size={550} rotation={45}>
 <StarIcon className="size-12 text-emerald-300"/ >
 </HeroOrbit>
 <HeroOrbit size={430} rotation={-14}>
 <SparkleIcon className="size-8 text-emerald-300  "/ >
 </HeroOrbit>
 <HeroOrbit size={420} rotation={79}>
 <SparkleIcon className="size-8 text-emerald-300  "/ >
 </HeroOrbit>
 <HeroOrbit size={530} rotation={178}>
 <SparkleIcon className="size-10 text-emerald-300  "/ >
 </HeroOrbit>
 <HeroOrbit size={530} rotation={-50}>
 <div className="size-3 rounded-full bg-emerald-300   "/ >
 </HeroOrbit>
 </div>
  <div className="container">
    <div className='flex flex-col items-center '>
  <Image src={pictureMe} className='size-[298px]' alt="picture of Ghamzah"/>
<div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
  <div className="bg-green-500 size-2.5 rounded-full "></div>
  <div className='text-m font-medium'>Available for new projects</div>
  </div>
  <div className='sm:text-m'>
  <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 w-full  px-4 word-wider hover:text-sm'>Welcome to the portfolio of Ghamzah Samuels</h1>
  <p className='mt-4 text-center text-white/60 md:text-lg'>I create simple websites and digital branding </p>
 
    </div>
    <div className='flex flex-col items-center md:flex-row justify-center mt-8 gap-4'>
    <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl '> 
    <span className='font-semibold'>Learn more </span>
    </button >
    <button className='inline-flex items-center gap-2 border border-white  h-12 px-6 rounded-xl bg-dark-500'> 
      <span><ArrowDown className="size-4"/>
        </span><span className='font-semibold'>Download my CV </span>
    </button>
    </div>

</div>
  </div>
</div>

  );
     
};
