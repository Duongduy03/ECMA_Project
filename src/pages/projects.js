import header from "../component/header";
import { useEffect, useState } from "../lib";
const projectsPage = () => {
  const [category, setcategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((respone) => respone.json())
      .then((data) => {
        // setProject(data);
        setcategory(data);
      });
  }, []);
  console.log(category);
  return /* html*/ `
  
  <!-- Blog Section -->

   
<section id="blog" class="section">
<div class="container text-center">
  <h6 class="subtitle">My Projects</h6>
  <h6 class="section-title mb-4">Latest News</h6>
  <p class="mb-5 pb-4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias
    dignissimos. <br />
    rerum commodi corrupti, temporibus non quam.
  </p>

  <div class="row text-left">
  ${category
    .map((category) => {
      return `
    <div class="col-md-4">
   
    <div class="card border mb-4">
    <img
      src="${category.image[0]}"
      alt=""
      class="card-img-top w-100 "
      style="height:200px"
    />
   
     
      <div class="card-body">
        <h5 class="card-title">${category.name}</h5>
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
        <button data-id=${category.id} class="btn">
        <a href="/projects/${category.id}">Read More..</a>
        </button>
        
      </div>
    </div>
  </div>
    `;
    })
    .join("")}
   

   
  </div>
</div>
</section>


<!-- Hire me section -->
<section class="bg-gray p-0 section">
  <div class="container">
    <div class="card bg-primary">
      <div class="card-body text-light">
        <div class="row align-items-center">
          <div class="col-sm-9 text-center text-sm-left">
            <h5 class="mt-3">Hire Me For Your Project</h5>
            <p class="mb-3">
              Accusantium labore nostrum similique quisquam.
            </p>
          </div>
          <div class="col-sm-3 text-center text-sm-right">
            <button class="btn btn-light rounded">Hire Me!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- End od Hire me section. -->
    `;
};
export default projectsPage;
