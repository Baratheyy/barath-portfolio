import {
FaPython,
FaJava,
FaJs,
FaHtml5,
FaCss3Alt,
FaReact,
FaNodeJs,
FaDatabase,
FaGitAlt
} from "react-icons/fa";

export default function Skills(){

const skills=[
{icon:<FaPython size={50}/>, name:"Python"},
{icon:<FaJava size={50}/>, name:"Java"},
{icon:<FaJs size={50}/>, name:"JavaScript"},
{icon:<FaHtml5 size={50}/>, name:"HTML"},
{icon:<FaCss3Alt size={50}/>, name:"CSS"},
{icon:<FaReact size={50}/>, name:"React"},
{icon:<FaNodeJs size={50}/>, name:"Node.js"},
{icon:<FaDatabase size={50}/>, name:"MySQL"},
{icon:<FaGitAlt size={50}/>, name:"Git"}
];

return(

<section id="skills" style={{
padding:"100px",
background:"#020617",
color:"white",
textAlign:"center"
}}>

<h2 style={{
fontSize:"40px",
color:"#38bdf8",
marginBottom:"50px"
}}>

Skills

</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"40px"
}}>

{skills.map((skill)=>(

<div
key={skill.name}
style={{
padding:"20px",
background:"#0f172a",
borderRadius:"10px",
transition:"0.3s"
}}
>

<div style={{color:"#38bdf8"}}>
{skill.icon}
</div>

<p style={{marginTop:"10px"}}>
{skill.name}
</p>

</div>

))}

</div>

</section>

)

}