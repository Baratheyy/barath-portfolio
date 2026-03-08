import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GithubStats from "./components/GithubStats";
import LeetcodeStats from "./components/LeetcodeStats";
import Experience from "./components/Experience";

function App(){

return(

<div>

<Navbar/>

<Hero/>

<About/>


<GithubStats/>
<LeetcodeStats/>

<Skills/>

<Projects/>
<Experience/>
<Contact/>

</div>

)

}

export default App;