import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpeg";

export default function Hero(){

return(

<section className="hero">

<div className="heroText">

<h1 className="heroName">
Barath V
</h1>

<TypeAnimation
sequence={[
"Full Stack Developer",
2000,
"Software Developer",
2000,
"Competitive Programmer",
2000
]}
speed={50}
repeat={Infinity}
/>

<p className="heroIntro">

MSc Computer Science Student at CEG, Anna University.
Passionate about building scalable web applications
and solving algorithmic problems.

</p>


</div>

<div className="heroImage">

<img src={profile} alt="profile"/>

</div>

</section>

)

}