import pictureMe from '@/assets/images/20231009_110208-removebg-preview.png';
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from '@/assets/icons/star.svg'
export const HeroSection = () => {
  return(
<div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
  <div className='absolute inset-0 -z-30 opacity-5' style={{
    backgroundImage: `url(${grainImage.src})`
  }} ></div>
  <div className=" hero-ring size-[620px]"></div>
  <div className=" hero-ring size-[820px]"></div>
  <div className=" hero-ring size-[1020px]"></div>
  <div className=" hero-ring size-[1220px]"></div>
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-red-500 size-[800px]">
  <div className=' border border-red-500 animate-spin'>
  <div className="inline-flex border border-red-500 animate-spin [animation-duration:5s]">
  <StarIcon className="size-28 text-emerald-300"/ >
  </div>
    
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
