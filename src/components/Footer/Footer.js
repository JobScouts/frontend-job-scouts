import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (

<div>
    <footer class="bg-dark text-center text-white">
      <div class="container p-4 pb-0">
        <section class="mb-4">

          <a
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          ><i class="fab fa-facebook-f"></i
          ></a>

          <a
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          ><i class="fab fa-twitter"></i
          ></a>

          <a
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          ><i class="fab fa-google"></i
          ></a>

          <a
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          ><i class="fab fa-instagram"></i
          ></a>

          <a
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          ><i class="fab fa-linkedin-in"></i
          ></a>

          <a
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          ><i class="fab fa-github"></i
          ></a>

        </section>

        <div style={{ display: "flex", flexFlow: "column", paddingRight: "130px", alignItems: "center", justifyContent: "center" , paddingTop:"0px"}} >
          <h5 class="text-uppercase">JobScouts</h5>
          <p>
            <a href="/About" style={{ textDecoration: "none", color: "#aba3a3" }}> About Us </a>
          </p>
        </div>


      </div>



      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2023 Copyright :
        <a className="text-white" href="#!" style={{ textDecoration: "none" }}> JobScouts.com</a>
      </div>

    </footer>

    </div>

  );
};

export default Footer;