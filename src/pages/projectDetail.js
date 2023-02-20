import header from "../component/header";
import { useEffect, useState } from "../lib";
const projectDetail = ({ id }) => {
  const [project, setProject] = useState([]);
  const arr = [project];
  useEffect(() => {
    // console.log(id);
    fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
      .then((respone) => respone.json())
      .then((data) => {
        setProject(data);
        // setProject(data.data);
        // console.log(data);
      });
  }, []);
  //   console.log(project);
  //   console.log(project.projects);

  return `
    
    
<section id="blog" class="section">
<div class="container text-center">
  <h6 class="section-title mb-4">My Projects</h6>
  
  
  <p class="mb-5 pb-4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias
    dignissimos. <br />
    rerum commodi corrupti, temporibus non quam.
  </p>
  ${arr
    .map((pro) => {
      return `
        <h6 class="section-title mb-4">${pro.name}</h6>
        `;
    })
    .join("")}
  <div class="row text-left">
        ${project.projects
          ?.map((pro) => {
            return `
            <div class="col-md-4">
   
            <div class="card border mb-4">
              <img
                src="../${pro.img}"
                alt=""
                class="card-img-top w-100 "
                style="height:200px"
              />
              <div class="card-body">
                <h5 class="card-title"></h5>
                <div class="post-details">
                  <a href="javascript:void(0)">Posted By: Admin</a>
                  <a href="javascript:void(0)"
                    ><i class="ti-thumb-up"></i> 456</a
                  >
                  <a href="javascript:void(0)"
                    ><i class="ti-comment"></i> 123</a
                  >
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                  ad vel dolorum, iusto velit, minima? Voluptas nemo harum
                  impedit nisi.
                </p>
               
              </div>
            </div>
          </div>
            `;
          })
          .join("")}
  

   

   
  </div>
</div>
</section>
  `;
};

export default projectDetail;
