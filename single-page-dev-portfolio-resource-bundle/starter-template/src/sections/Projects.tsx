import WeatherPic from "@/assets/images/Screenshot 2024-07-17 091923.png";
import CapstonePic from "@/assets/images/Screenshot 2024-04-05 150507.png";
import EcommercePic from "@/assets/images/Screenshot 2024-09-12 154307.png";
import Image from "next/image";
import checkCircle from '@/assets/icons/check-circle.svg'
import ArrowUpIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "LC Studio",
    year: "2024",
    title: "Weather website",
    results: 'This team project was created using Python and the Flask framework.',
    link: "https://weather-report-ochre.vercel.app/",
    github: 'https://github.com/GSamuels5/Weather_report.git',
    image: WeatherPic,
  },
  {
    company: "Life Choices Academy",
    year: "2024",
    title: "Employee management system",
    results: 'My employee management system was created for my final project at Life Choices Academy and it was a Full Stack project. ',
    link: "https://capstone-ee11b.web.app/",
    github: 'https://github.com/GSamuels5/Capstone_project.git',
    image: CapstonePic,
  },
  {
    company: "Life Choices Academy",
    year: "2024",
    title: "E-commerce website ",
    results: 'My E-commerce website was created using HTML,CSS,Bootstrap and Javascript language.',
    link: "https://javascript-e-commerce.vercel.app/",
    github: 'https://github.com/GSamuels5/Javascript_E-commerce.git',
    image: EcommercePic,
  },

];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Projects" description="View my design to software transformation" />
        <div className="flex justify-center">

          {/* <h1 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-4xl">Projects</h1> */}
        </div>
        {/* <p className="font-serif text-3xl md:text-5xl text-center mt-6 pb-2"></p> */}
        <div className="flex flex-col mt-10 gap-20 md:mt-20 ">
          {portfolioProjects.map((project, projectIndex) => {
            return (
              <Card key={project.title} className="px-8 pt-8 pb-0
               md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky "
               style={{
                top: `calc(64px + ${projectIndex * 40}px`
               }} >

                <div className="absolute inset-0 -z-10 opacity-5" style={{
                  backgroundImage: `url(${grainImage.src})`
                }}></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex
               font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl mt-2 ">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <p className="flex flex-col gap-4 mt-4 md:mt-5 mb-2">


                      {project.results}

                    </p>
                    <div className="flex flex-col md:flex-row md:space-x-2">
                      <a href={project.link} className="w-full md:w-auto ">
                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-4 md:mt-0 px-3">
                          <span>Visit website</span>
                          <ArrowUpIcon className="size-4" />
                        </button>
                      </a>
                      <a href={project.github} className="w-full md:w-auto">
                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-4 md:mt-0 px-3">
                          <span>Github link</span>
                          <ArrowUpIcon className="size-4" />
                        </button>
                      </a>
                    </div>

                  </div>
                  <div className="relative">

                    <Image src={project.image} alt={project.title} className="mt-8 -mb-4  lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-xl" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
