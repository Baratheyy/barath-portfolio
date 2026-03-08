import library from "../assets/Projects/library.jpeg";
import grade from "../assets/Projects/grade.jpeg";
import forum from "../assets/Projects/forum.jpeg";

import { FaReact, FaJava, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMysql, SiCplusplus, SiJavascript } from "react-icons/si";

export default function Projects(){

const projects=[

{
title:"Library Management System",
image:library,
desc:"Backend project using C++ and linked list to manage library data.",
tech:[<SiCplusplus/>, <SiMysql/>],
github:"https://github.com/Baratheyy"
},

{
title:"Student Grade Calculator",
image:grade,
desc:"Java + MySQL system to calculate grades and manage student marks.",
tech:[<FaJava/>, <SiMysql/>, <FaHtml5/>, <FaCss3Alt/>],
github:"https://github.com/Baratheyy"
},

{
title:"Student Faculty Forum",
image:forum,
desc:"React platform for collaboration between students and faculty.",
tech:[<FaReact/>, <SiJavascript/>, <FaHtml5/>, <FaCss3Alt/>, <SiMysql/>],
github:"https://github.com/Baratheyy"
}

];

return(

<section id="projects" className="projects">

<h2 className="sectionTitle">Projects</h2>

<div className="projectsGrid">

{projects.map((p,i)=>(

<div key={i} className="projectCard">

<img src={p.image} alt={p.title} className="projectImg"/>

<div className="projectContent">

<h3>{p.title}</h3>

<p>{p.desc}</p>

<div className="techIcons">
{p.tech.map((icon,index)=>(
<span key={index}>{icon}</span>
))}
</div>

<div className="projectBtns">

<a href={p.github} target="_blank" rel="noreferrer">

<button className="githubBtn">
<FaGithub/> Code
</button>

</a>

</div>

</div>

</div>

))}

</div>

</section>

)

}