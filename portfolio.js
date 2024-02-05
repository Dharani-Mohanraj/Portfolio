import React from "react";
import './portfolio.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img_1 from "./IMG-20230224-WA0011.jpg";
import img_2 from "./Coursera-1.png";
import img_3 from "./FrontEnd.png";



export function Home() { 
    return (<>
        <div className="container py-5 my-5">
            <p className="h"> <i>This  is Dharani </i></p>
            <p className="h"> <i>Front End Developer</i></p>
            <p className="h"> <i> Here, It is my portfolio </i></p><br/>
        </div>
    </>)
}

 export function About() {
    return (
        <>    
    <div className="container abt">
      <div className="row">
        <div className="col-lg-6 py-5">
          <img height={450}src={img_1} className="profile"  href="#"alt="Your Image"/>
        </div>
        <div className="col-lg-6">
          <div className="text-white abt_txt py-5">
          <p>
        I'm Dharani, a passionated <b> <i className="text-warning">Front-End Developer </i></b>. I have a strong background in this field.
      </p>
      <p>
        My mission is to become a Developer. I'm enthusiastic about photography, and I'm always looking for new challenges and opportunities to grow and learn.
      </p>
      <button className="btn btn-primary my-5"> Download CV</button>
    </div>
          </div>  
        </div>
      </div>
   
        </>
    )
}

// export default function resume(){
//   const [dat,setdat]=useState([0])
//   useEffect(()=>{
//       fetch("C:\Users\jeeva\my\src\Components\Portfolio\M.J.Dharani.pdf")
//       .then(res=>res.json())
//       .then(details=>setdat(details))
//   })
//   return( 
//        dat.map((index,value)=>(
//         <a href="#" class="btn btn-primary">Download CV</a>
//        )
//        )   
//       )
//     }

  


export function Educate() {
    return (
        <>
            <div class="d-flex align-items-center justify-content-center edu">
                <div className="row d-flex align-items-center justify-content-center col-sm-12 col-lg-12 my-2">
                    <div class="card mx-5 g-2 text-white cd bg-primary">
                        <div><h5 class="card-title p-3 m-2 "> &nbsp;&nbsp;B.A.,English</h5>
                            <br/>  <p class="card-text text-center"> Government Arts College (Autonomous),Karur </p></div> </div>

                    <div class="card mx-5 g-2 text-white cd-1 bg-danger">
                        <div><h5 class="card-title p-3 m-2"> &nbsp;&ensp;&ensp; HSLC </h5>
                            <br/>  <p class="card-text text-center"> Bharathi Higher Secondary School,Velliyanai</p></div> </div>

                    <div class="card mx-5 g-2 text-white cd-2 bg-success">
                        <div><h5 class="card-title p-3 m-2"> &nbsp;&ensp;&ensp;  SSLC </h5>
                            <br/>  <p class="card-text text-center"> Ashram Higher Secondary School, Manavadi</p></div> </div>
                </div>
            </div>
        </>
    )
}

export function Skill() {
    return (
        <>
            <div className="sk d-flex p-5 align-items-center justify-content-center">
                <div class="row align-items-center justify-content-center my-5 rounded-4">
                    <div class="col">
                        <div class="card bg-dark mx-5">
                            <div class="p-4  border-4 rounded ">
                                <h5 class="card-title text-primary">TECHNICAL SKILLS </h5>
                                <div className="text-white ">
                                <ul type="circle">
                                    <li> HTML5 </li>
                                    <li> CSS3 </li>
                                    <li> Bootstrap</li>
                                    <li>Javascript</li>
                                    <li>React.js</li>                      
                                </ul></div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-dark mx-5">
                            <div class="p-4  border-4 rounded">
                                <h5 class="card-title text-primary  text-center">SOFT SKILLS </h5>
                                <div className="text-white py-3">
                                <ul type="circle">
                                    <li> Self Learning </li>
                                    <li> Adaptative </li>
                                    <li> Team Work </li>
                                </ul></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function Certify() {
    return (
      <div className="certi row row-cols-1 row-cols-md-2 g-4 ">
        <img  src={img_2} alt="Image 1" />
        <img  src={img_3} alt="Image 2" />
    </div>
    )
}

 export function Project() {

    const projects = [
      {
        title: 'Project 1',
        description: 'A web application for managing tasks and to-dos.',
        link: 'https://project1link.com',
      },
      {
        title: 'Project 2',
        description: 'An e-commerce website for selling handmade crafts.',
        link: 'https://project2link.com',
      },
      {
        title: 'Project 3',
        description: 'A mobile app for tracking daily fitness activities.',
        link: 'https://project3link.com',
      },
    ];
  
    return (
      <div className="projects text-center text-white">
        <h2 className="p-5">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    );
  }
  
export function Contact() {
    return (
        <>             
    <div className="contact text-white">
      <h2 className="m-2 py-3"> &ensp; Contact Me</h2>
      <p className="m-3">You can contact me by given ways:</p>
      <ul>
        <li> <FontAwesomeIcon icon={faEnvelope}/>&nbsp;Email: <a href="mailto:youremail@example.com" className="text-white"> jeevadharani28@gmail.com</a></li>
        <li> <FontAwesomeIcon icon={faLinkedin}/> LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" className="text-white"> https://www.linkedin.com/in/dharani-m-j-b65b0a276</a></li>
        <li> <FontAwesomeIcon icon={faGithub}/> GitHub: <a href="https://github.com/yourusername" className="text-white"> https://github.com/Dharani-Mohanraj</a></li>
      </ul>
    </div>
    <div class="container-fluid text-center py-2" >
    <div class="row">
              <div class="col">
              <p className="text-dark copy bg-white"> <FontAwesomeIcon icon={faCopyright}/> Copyrights2023</p>
              </div>
          </div>
      </div>
        </>
       
    )
}
