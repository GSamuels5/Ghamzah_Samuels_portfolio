import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from '@/assets/icons/star.svg'
import Image from "next/image";
import bookImage from '@/assets/images/book-cover.png'
import JavascriptIcon from '@/assets/icons/square-js.svg'
import CplusIcon from '@/assets/icons/c.svg'
import PythonIcon from "@/assets/icons/python-svgrepo-com.svg"
import LinuxIcon from "@/assets/icons/linux-svgrepo-com.svg"
import SqlIcon from "@/assets/icons/mysql-svgrepo-com.svg"
import NodeIcon from "@/assets/icons/node-svgrepo-com.svg"
import VueIcon from "@/assets/icons/vue-9-logo-svgrepo-com.svg"
import HtmlIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import GitICon from '@/assets/icons/github.svg'
import Chrome from '@/assets/icons/chrome.svg'
import MapImage from "@/assets/images/Screenshot 2024-09-16 155655.png";
import SmileImoji from "@/assets/images/Screenshot_2024-09-16_155004-removebg-preview.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";



const toolboxItems = [
  {
    title: 'C++',
    iconType: CplusIcon,
    
  },
  {
    title: 'Python',
    iconType: PythonIcon,
    
  }, {
    title: 'Linux',
    iconType: LinuxIcon,
  
  }, {
    title: 'MySQL',
    iconType: SqlIcon,
 
  }, {
    title: 'Node js',
    iconType: NodeIcon,
   
  }, {
    title: 'Vue 3',
    iconType: VueIcon,
    
  }, {
    title: 'Javascript',
    iconType: JavascriptIcon,
   
  }, {
    title: 'CSS',
    iconType: CssIcon,
    
  }, {
    title: 'HTML',
    iconType: HtmlIcon,
    
  },
  {
    title: 'Github',
    iconType: GitICon,
   
  } ,{
    title: 'Chrome',
    iconType: Chrome,
  }
]
const skills = [
  {name: "Communication",
    emoji: '🗣️',
    left:'50%',
    top:'50%',
  },
  {name: "Time management",
    emoji: '⏳',
    left:'',
    top:'',
  },
  {name: "Networking",
    emoji: '👥',
    left:'',
    top:'',
  },
  {name: "Critical Thinking",
    emoji: '🕵️',
    left:'',
    top:'',
  },
  {name: "Running",
    emoji: '🏃',
    left:'',
    top:'',
  },
  {name: "Reading",
    emoji: '📖',
    left:'',
    top:'',
  },
  {name: "Hiking",
    emoji: '⛰️',
    left:'',
    top:'',
  },
  {name: "Fitness",
    emoji: '🏋️‍♀️',
    left:'',
    top:'',
  },
]
export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
  <SectionHeader
  eyebrow="About Me"
description="Come and explore my journey"
  />
<div className="mt-20 flex flex-col gap-8">
<Card className="h-[320px]">
 <CardHeader title="My Reads" description="See the books shaping my perspectives"/>
  <div className="w-40 mx-auto mt-8">
<Image src={bookImage} alt="book cover"/>
</div>
</Card>
<Card className="h-[320px] p-0">
<CardHeader title="My Tech Stack" 
description="Explore my software for developing software" className="px-6 pt-6"/>
 <ToolboxItems items={toolboxItems} className="mt-6" />
 <ToolboxItems items={toolboxItems} className="mt-6" ItemsWrapperClassName="-translate-x-1/2" /> 
 </Card>
<Card className="h-[320px] p-0 flex flex-col ">
<CardHeader title="Soft Skills and Hobbies" 
description="Explore my soft skill and hobbies beyond the coding environment"
className="px-6 py-6"
/>
 
 
  <div className="relative flex-1 ">
    {skills.map((skill) => (
      <div key={skill.name} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 
      rounded-full py-1.5 absolute" style={{
        left:skill.left,
        top: skill.top,
      }}>
        <span className="font-medium text-gray-950">{skill.name}</span>
        <span>{skill.emoji}</span>
      </div>
    ))}
  </div>
</Card>
<Card>
<Image src={MapImage} alt="map"/>
<Image src={SmileImoji} alt="smilimg memoji"/>
</Card>
</div>
</div>
</div>
);
};
