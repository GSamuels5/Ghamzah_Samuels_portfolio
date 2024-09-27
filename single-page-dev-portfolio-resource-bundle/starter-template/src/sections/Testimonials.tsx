
import Joel from "@/assets/images/joel2 (1).jpg";
import CarlImage from "@/assets/images/20231009_110254.jpg";
import Razien from "@/assets/images/Screenshot 2024-08-16 100148.png";
import Tashreeq from "@/assets/images/20231009_110338.jpg";
import Rezaar from "@/assets/images/Rezaar.png";
import Zukisa from "@/assets/images/20231009_110713.jpg"
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg"
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Joel Mukanya",
    position: "Lecturer",
    text: "Ghamzah is a creative, and well-behaved individual who always prioritizes his work. He excels in collaborating with others and has gained proficiency in HTML5, CSS, and Bootstrap. Including Git and GitHub.",
    avatar: Joel,
  },

  {
    name: "Carl James",
    position: "Colleague",
    text: "Ghamzah is one of the best people I've worked with. His Developer skills are considered to be one of the top and if not he will find a way. He pays attention to detail when it comes to his work on a small and larger scale. Other than technical skills he is effective at communication. Wherever he goes he will be a great asset.",
    avatar: CarlImage,
  },
  {
    name: "Razien Mackenzie",
    position: "Colleague",
    text: "Ghamzah has been an amazing help in my team. He's always finding solutions to even the most challenging problems. He is a very kind person, yet he takes his work extremely seriously. He is definitely my go-to guy in a crunch, so I'm sure he'll make a valuable addition to your team.",
    avatar: Razien,
  },

  {
    name: "Tashreeq Lee",
    position: "Colleague",
    text: "Ghamzah Samuels is an excellent communicator, always willing to help out and take initiative. The energy he brings always lightens up the room and he always goes above and beyond to ensure that the job gets done and that it's done right.",
    avatar: Tashreeq,
  },
  {
    name: "Rezaar Osman",
    position: "Colleague",
    text: "Ghamzah Samuels patience is immeasurable. He has persistent composure in the face of stress. His efficient and has meticulous work ethic as if he was born to be an engineer. Nothing, in my opinion, could prevent him from being modest. I would expect and be proud to see him in high places someday.",
    avatar: Rezaar,
  },
  {
    name: "Zukisa Eric Maza",
    position: "Colleague",
    text: "Ghamzah, an Aspiring Software Developer, has shown remarkable dedication and hard work in his pursuit of a career in the tech industry. His journey began when he enrolled in a coding course at Life Choices Academy, where he honed his skills in modern web languages and developed future-oriented skills, such as data management and problem-solving. Ghamzah's strong work ethic and commitment to learning have allowed him to excel in his studies and gain valuable experience in the field.",
    avatar: Zukisa,
  },
];

export const TestimonialsSection = () => {
  return (
  <div className="py-16 lg:py-24">
    <div className="container">
    <SectionHeader eyebrow="Testimonials" description="Don't just take my word for it see what people said about me."/>
   <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%)]">
    <div className="flex gap-8 flex-none">
      {testimonials.map(testimonial =>(
        <Card key={testimonial.name} className="max-w-xs md:max-x-md p-6 md:p-8">
          <div className="flex gap-4 items-center">
<div className="size-16  inline-flex items-center justify-center flex-shrink-0">

<Image src={testimonial.avatar} alt={testimonial.name} className="rounded m-h-full"/>
</div>
          <div>

<div className="font-semi-bold">{testimonial.name}</div>
<div className="text-sm text-white/40">{testimonial.position}</div>
          </div>
          </div>
<p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>

        </Card>
      ))}
    </div>
    </div>
    </div>
  </div>
  );
};
