const footerAdmin = () => {
  return /*html*/ `
  <footer class="page-footer" style="    background-color: #121212; color:white">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-sm-6">
        <p>
          Copyright
          <script>
            document.write(new Date().getFullYear());
          </script>
          &copy;
          <a href="#" style="text-decoration:none">Duong Van Duy</a>
        </p>
      </div>
      <div class="col-sm-6">
        <div class="socials">
          <a class="social-item" style="color:white; border: 0.25px solid white;" href="javascript:void(0)"
            ><i class="ti-facebook"></i
          ></a>
          <a class="social-item" style="color:white; border: 0.25px solid white;" href="javascript:void(0)"
            ><i class="ti-google"></i
          ></a>
          <a class="social-item" style="color:white; border: 0.25px solid white;"  href="javascript:void(0)"
            ><i class="ti-github"></i
          ></a>
          <a class="social-item"  style="color:white; border: 0.25px solid white;" href="javascript:void(0)"
            ><i class="ti-twitter"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</footer>
  
  `;
};

export default footerAdmin;
