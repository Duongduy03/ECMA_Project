import { useEffect, useState } from "../lib";
const footer = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/about")
      .then((respone) => respone.json())
      .then((data) => {
        setAbout(data);
      });
  }, []);
  return /*html*/ `
  <footer class="page-footer">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-sm-6">
        <p>
          Copyright
          <script>
            document.write(new Date().getFullYear());
          </script>
          &copy;
          <a href="#" >Duong Van Duy</a>
        </p>
      </div>
      ${about
        .map((about) => {
          return `    <div class="col-sm-6">
        <div class="socials">
          <a class="social-item" href="${about.facebook}"
            ><i class="ti-facebook"></i
          ></a>
          <a class="social-item" href="javascript:void(0)"
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
        `;
        })
        .join("")}
  
    </div>
  </div>
</footer>
  `;
};

export default footer;
