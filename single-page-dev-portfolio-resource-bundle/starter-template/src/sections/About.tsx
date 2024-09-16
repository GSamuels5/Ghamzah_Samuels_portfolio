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
import { TechIcon } from "@/components/Techicon";
import MapImage from "@/assets/images/Screenshot 2024-09-16 155655.png";
import SmileImoji from "@/assets/images/Screenshot_2024-09-16_155004-removebg-preview.png"



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
    iconType: VueIcon
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
    iconType: GitICon
  } ,{
    title: 'Chrome',
    iconType: Chrome,
  }
]
const skills = [
  {name: "funny",
    emoji: 😂
  }
]
export const AboutSection = () => {
  return (
    <div className="pb-96">
  <SectionHeader
  eyebrow="About Me"
description="Come and explore my journey"
  />
<div>
<Card>
  <div>
    <StarIcon/>
    <h3>My Reads</h3>
    <p>See the books shaping my perspectives</p>
  </div>
<Image src={bookImage} alt="book cover"/>
</Card>
<Card>
  <div>
    <StarIcon/>
    <h3>My Tech Stack</h3>
    <p>explore my software for developing software.</p>
  </div>
<div>
{toolboxItems.map(item =>(
  <div key={item.title}> 
  <TechIcon component={item.iconType}/>
    <span>{item.title}</span>
    </div>
))}
</div>
</Card>
<Card>
  <StarIcon/>
  <h3>Soft Skills and Hobbies</h3>
  <p>Explore my soft skill and hobbies beyond the coding environment.</p>
</Card>
<Card>
<Image src={MapImage} alt="map"/>
<Image src={SmileImoji} alt="smilimg memoji"/>
</Card>
</div>
</div>
);
};
