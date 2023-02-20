import header from "../component/header";

const projectsPage = () => {
  return /* html*/ `
  
  <!-- Blog Section -->
  <section id="blog" class="section">
  <div class="container text-center">
    <h6 class="subtitle">My Blogs</h6>
    <h6 class="section-title mb-4">Latest News</h6>
    <p class="mb-5 pb-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias
      dignissimos. <br />
      rerum commodi corrupti, temporibus non quam.
    </p>

    <div class="row text-left">
      <div class="col-md-4">
        <div class="card border mb-4">
          <img
            src="assets/imgs/blog-1.jpg"
            alt=""
            class="card-img-top w-100"
          />
          <div class="card-body">
            <h5 class="card-title">Designe for Everyone</h5>
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
            <a href="javascript:void(0)">Read More..</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border mb-4">
          <img
            src="assets/imgs/blog-2.jpg"
            alt=""
            class="card-img-top w-100"
          />
          <div class="card-body">
            <h5 class="card-title">Web Layouts</h5>
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
            <a href="javascript:void(0)">Read More..</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border mb-4">
          <img
            src="assets/imgs/blog-3.jpg"
            alt=""
            class="card-img-top w-100"
          />
          <div class="card-body">
            <h5 class="card-title">Bootstrap Framework</h5>
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
            <a href="javascript:void(0)">Read More..</a>
          </div>
        </div>
      </div>
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
