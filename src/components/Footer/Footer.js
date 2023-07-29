import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    // <div className="myFooter d-flex align-items-center" style={{ minHeight: "10vh" , miwidth:"100%" }}>
      <footer className="bg-dark text-center text-white" style={{ bottom:"0" , height: "100%"}}>
        <div className="container p-0 pb-0" style={{margin:"0px"}}>
          <section  className="mb-0 d-flex justify-content-center">
            <a className="btn text-white btn-floating m-5" style={{ backgroundColor: "#3b5998"}} href="#!" role="button">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="btn text-white btn-floating m-5" style={{ backgroundColor: "#55acee" }} href="#!" role="button">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="btn text-white btn-floating m-5" style={{ backgroundColor: "#dd4b39" }} href="#!" role="button">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a className="btn text-white btn-floating m-5" style={{ backgroundColor: "#ac2bac" }} href="#!" role="button">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="btn text-white btn-floating m-5" style={{ backgroundColor: "#0082ca" }} href="#!" role="button">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="btn text-white btn-floating m-5" style={{ backgroundColor: "#333333" }} href="#!" role="button">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </section>
          
          <div style={{display:"flex" ,flexFlow:"column", paddingRight:"10px" , alignItems:"center" , justifyContent:"center" , paddingTop:"22px"}} >
        <h5 class="text-uppercase">JobScouts</h5>
        <p>
          <a href="/About" style={{textDecoration:"none" , color:"#aba3a3"}}> About Us </a>
        </p>
      </div>
        
        
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2023 Copyright :
          <a className="text-white" href="#!" style={{textDecoration : "none"}}> JobScouts.com</a>
        </div>
      </footer>
    // </div>
  );
};

export default Footer;
