Home
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ProjectsSection } from "@/sections/Projects";
import { EducationSection } from "@/sections/Education";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>

   <Header/>
  
      <div id="hero">

      <HeroSection/>
   </div>
 
   <div id="about">

   <AboutSection/>
   </div>
   <div id="projects">

   <ProjectsSection/>
   </div>
   <TapeSection/>
   <div id="education/experience">

<EducationSection/>
</div>
   <div id="testimonials">

   <TestimonialsSection/>
   </div>
   <div id="contact">

   <ContactSection/>
   </div>
 
   
   
   
 
   
   
   <Footer />
    </div>
  );
}
