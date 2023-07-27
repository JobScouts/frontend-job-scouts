import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    // <div className="myFooter d-flex align-items-center" style={{ minHeight: "10vh" , miwidth:"100%" }}>
      <footer className="bg-dark text-center text-white" style={{ bottom:"0" , height: "100%"}}>
        <div className="container p-0 pb-0">
          <section className="mb-4 d-flex justify-content-center">
            <a className="btn text-white btn-floating m-5" style={{ backgroundColor: "#3b5998" }} href="#!" role="button">
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
          
          
          <div style={{display:"flex" ,flexDirection:"column" , alignItems:"center" , alignContent:"center" , justifyContent:"center"}} >
        <h5 class="text-uppercase">Footer text</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias.
        </p>
      </div>
        
        
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2020 Copyright :
          <a className="text-white" href="#!" style={{textDecoration : "none"}}> SearchJob.com</a>
        </div>
      </footer>
    // </div>
  );
};

export default Footer;
