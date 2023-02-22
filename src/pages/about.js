import { useState, useEffect } from "../lib";

const aboutPage = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/about")
      .then((respone) => respone.json())
      .then((data) => {
        setAbout(data);
      });
  }, []);

  return /*html*/ `
  ${about
    .map((about) => {
      return `
    <section id="about" class="section mt-3">
    <div class="container mt-5">
      <div class="row text-center text-md-left">
        <div class="col-md-3">
          <img
            src="${about.image}"
            alt=""
            class="img-thumbnail mb-4"
          />
        </div>
   
         <div class="pl-md-4 col-md-9">
         <h6 class="title">${about.name}</h6>
         <p class="subtitle">${about.job}</p>
         <p>
           ${about.description}
         </p>
         <p>
         ${about.description}
         </p>
         <button class="btn btn-primary rounded mt-3">DOWNLOAD CV</button>
       </div>
      
   
       
      </div>
    </div>
  </section>
    `;
    })
    .join("")}
   <!-- About section -->
 

  `;
};
export default aboutPage;
