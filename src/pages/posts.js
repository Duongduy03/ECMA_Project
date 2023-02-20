const postsPage = () => {
  return /*html*/ `
      <!-- Service section -->
    <section id="service" class="section">
    <div class="container text-center">
      <h6 class="subtitle">Service</h6>
      <h6 class="section-title mb-4">What I Do</h6>
      <p class="mb-5 pb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias
        dignissimos. <br />
        rerum commodi corrupti, temporibus non quam.
      </p>

      <div class="row">
        <div class="col-sm-6 col-md-3 mb-4">
          <div class="custom-card card border">
            <div class="card-body">
              <i class="icon ti-crown"></i>
              <h5>UI/UX Design</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-4">
          <div class="custom-card card border">
            <div class="card-body">
              <i class="icon ti-desktop"></i>
              <h5>Web Design</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-4">
          <div class="custom-card card border">
            <div class="card-body">
              <i class="icon ti-mobile"></i>
              <h5>App Design</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-4">
          <div class="custom-card card border">
            <div class="card-body">
              <i class="icon ti-bar-chart"></i>
              <h5>SEO</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End of Sectoin -->

  <!-- Skills section -->
  <section class="section">
    <div class="container text-center">
      <h6 class="subtitle">Skills</h6>
      <h6 class="section-title mb-4">Why Choose me</h6>
      <p class="mb-5 pb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias
        dignissimos. <br />
        rerum commodi corrupti, temporibus non quam.
      </p>

      <div class="row text-left">
        <div class="col-sm-6">
          <h6 class="mb-3">Photoshop</h6>
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              style="width: 89%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>89%</span>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <h6 class="mb-3">Web Design</h6>
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              style="width: 83%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>83%</span>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <h6 class="mb-3">App Design</h6>
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              style="width: 95%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>95%</span>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <h6 class="mb-3">SEO</h6>
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              style="width: 90%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>90%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End of Skills sections -->
  <!-- Testmonial Section -->
  <section id="testmonial" class="section">
  <div class="container text-center">
    <h6 class="subtitle">Testmonial</h6>
    <h6 class="section-title mb-4">What People Say About Me</h6>
    <p class="mb-5 pb-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias
      dignissimos. <br />
      rerum commodi corrupti, temporibus non quam.
    </p>

    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="card testmonial-card border">
            <div class="card-body">
              <img src="assets/imgs/avatar-1.jpg" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Magnam nostrum voluptates in enim vel amet?
              </p>
              <h1 class="title">Emma Re</h1>
              <h1 class="subtitle">Graphic Designer</h1>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card testmonial-card border">
            <div class="card-body">
              <img src="assets/imgs/avatar-2.jpg" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Magnam nostrum voluptates in enim vel amet?
              </p>
              <h1 class="title">James Bert</h1>
              <h1 class="subtitle">Web Designer</h1>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card testmonial-card border">
            <div class="card-body">
              <img src="assets/imgs/avatar-3.jpg" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Magnam nostrum voluptates in enim vel amet?
              </p>
              <h1 class="title">Michael Abra</h1>
              <h1 class="subtitle">Web Developer</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- End of testmonial section -->
  `;
};
export default postsPage;
