import Nav from "./nav";
import { useEffect, useState } from "../lib";

const header = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/about")
      .then((respone) => respone.json())
      .then((data) => {
        setAbout(data);
      });
  }, []);
  return /*html*/ `
  
      
         ${Nav()}
      ${about
        .map((about) => {
          return `
        
        <!-- Page Header -->
        <header class="header" id="home">
        <div class="container">
          <div class="infos">
            <h6 class="subtitle">Hello,I'm</h6>
          
            <h6 class="title">${about.name}</h6>
            <p>${about.job}</p>
    
            <div class="buttons pt-3">
              <button class="btn btn-primary rounded">HIRE ME</button>
              <button class="btn btn-dark rounded">DOWNLOAD CV</button>
            </div>
    
            <div class="socials mt-4">
              <a class="social-item" href="${about.facebook}"
                ><i class="ti-facebook"></i
              ></a>
              <a class="social-item" href=""
                ><i class="ti-google"></i
              ></a>
              <a class="social-item" href="${about.github}"
                ><i class="ti-github"></i
              ></a>
              <a class="social-item" href="javascript:void(0)"
                ><i class="ti-twitter"></i
              ></a>
            </div>
          </div>
          <div class="img-holder">
            <img src="assets/imgs/man.svg" alt="" />
          </div>
        </div>
    
        <!-- Header-widget -->
        <div class="widget">
          <div class="widget-item">
            <h2>124</h2>
            <p>Happy Clients</p>
          </div>
          <div class="widget-item">
            <h2>456</h2>
            <p>Project Completed</p>
          </div>
          <div class="widget-item">
            <h2>789</h2>
            <p>Awards Won</p>
          </div>
        </div>
      </header>
      <!-- End of Page Header -->
        `;
        })
        .join("")}

      
    `;
};
export default header;
