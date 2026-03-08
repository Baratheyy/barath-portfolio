import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact(){

return(

<section id="contact" className="contact">

<h2 className="sectionTitle">Contact</h2>

<div className="contactGrid">

<div className="contactItem">

<FaPhone className="contactIcon"/>

<p>8489573989</p>

</div>

<div className="contactItem">

<FaEnvelope className="contactIcon"/>

<p>bharathplkm1234@gmail.com</p>

</div>

<div className="contactItem">

<FaLinkedin className="contactIcon"/>

<a
href="https://www.linkedin.com/in/barath-v-70b794268/"
target="_blank"
rel="noreferrer"
>

LinkedIn Profile

</a>

</div>

</div>

</section>

)

}