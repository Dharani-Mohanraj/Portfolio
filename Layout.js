import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap'
import { Outlet,Link } from "react-router-dom";
        /* <script>
    AOS.init();
  </script> */
 const Lay=()=>{
    return(
        <>
<nav class="navbar navbar-expand-lg sticky-top bg-dark">
        <div class="container-fluid">
          <h6 className="text-light py-2 name">&ensp; <span style={{color:'bisque'}}>Dharani</span></h6>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor: "white"}}>
            <span class="navbar-toggler-icon" style={{color:"blue"}}></span>
          </button>
          <div class="collapse navbar-collapse  tex" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto text-danger">
              <a className="nav-link" aria-current="page"><Link to="/home" className="navli text-white ms-5">H<span style={{color:"red"}}>om</span>e</Link></a>
              <a className="nav-link"><Link to="/about" className="navli text-white ms-5">Abo<span style={{color:"red"}}>ut M</span>e</Link></a>
              <a className="nav-link"><Link to="/education" className="navli text-white ms-5">Educ<span style={{color:"red"}}>ati</span>on</Link></a>
              <a className="nav-link"><Link to="/skill" className="navli text-white ms-5"> Sk<span style={{color:"red"}}>il</span>ls</Link></a>
              <a className="nav-link"><Link to="/certification" className="navli text-white ms-5">Cert<span style={{color:"red"}}>ifica</span>tion</Link></a>
              <a className="nav-link"><Link to="/pro" className="navli text-white ms-5"> Pro<span style={{color:"red"}}>jec</span>ts </Link></a>
              <a className="nav-link"><Link to="/cnt" className="navli text-white ms-5">Conta<span style={{color:"red"}}>ct U</span>s</Link></a>
            </div>
          </div>
        </div>
      </nav>
       <marquee behavior="scroll" direction="right" scrollamount="5" className="text-white py-3 my-2 intro"><i> <b>Wel<b className="text-danger">co</b>me to my por<b className="text-danger">tfo</b>lio...!!!</b> </i> </marquee>
      {/* <marquee behavior="scroll" direction="right" className=" text-white  m-5 mar" scrollamount="5"> Front-End Developer </marquee>  */}
        <Outlet/>
        </>
    );
}
export default Lay;