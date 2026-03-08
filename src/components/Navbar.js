import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Navbar(){

return(

<nav className="navbar">

<div className="logo">Barath V</div>

<div className="navLinks">

<a href="#home">Home</a>
<a href="#projects">Projects</a>
<a href="#about">About</a>
<a href="#experience">Experience</a>
<a href="#contact">Contact</a>

<a href="/resume.pdf" target="_blank" className="resumeBtn">
Resume →
</a>

<a
href="https://github.com/Baratheyy"
target="_blank"
className="socialIcon"
>
<FaGithub/>
</a>

<a
href="https://www.linkedin.com/in/barath-v-70b794268/"
target="_blank"
className="socialIcon"
>
<FaLinkedin/>
</a>

<a
href="https://instagram.com/baratheyy"
target="_blank"
className="socialIcon"
>
<FaInstagram/>
</a>

</div>

</nav>

)

}