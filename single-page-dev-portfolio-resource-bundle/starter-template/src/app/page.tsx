Home
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ProjectsSection } from "@/sections/Projects";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
   <Header/>
   <HeroSection/>
   <TapeSection/>
   <AboutSection/>
   <ProjectsSection/>
   <TestimonialsSection/>
   <ContactSection/>
   <Footer />
    </div>
  );
}
