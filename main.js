// import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import { setupCounter } from "./counter.js";
// console.log(20);
// document.querySelector("#app").innerHTML = /*html*/ `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));
// import aboutPage from "./src/pages/about";
import homePage from "./src/pages/home";

import { render, router } from "./src/lib";
// import contactPage from "./src/pages/contact";
// import postDetail from "./src/pages/post-detail";
// import postsPage from "./src/pages/posts";
// import projectDetail from "./src/pages/project-detail";
// import projectsPage from "./src/pages/projects";
import adminProjects from "./src/pages/admin/projects/projects";
import categoryAdmin from "./src/pages/admin/categories/categoryAdmin";
const app = document.querySelector("#app");
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import AdminProjectEditPage from "@/editProjects";
import ProjectAdd from "./src/pages/admin/projects/addProject";
import ProjectEdit from "./src/pages/admin/projects/editProject";
import projectDetail from "./src/pages/projectDetail";
import err404 from "./src/pages/404";
import projectCategory from "./src/pages/admin/categories/projectCategory";
import addProjectCategory from "./src/pages/admin/categories/addProjectCategory";

// app.innerHTML = homePage();
// render(homePage, app);
// alt + shift + o window
// option + shift + o
// Navigo
router.on("/", () => {
  render(homePage, app);
});

// router.on("/about", () => {
//   render(aboutPage, app);
// });
// router.on("/contact", () => {
//   render(contactPage, app);
// });
// router.on("/post", () => {
//   render(postsPage, app);
// });
// router.on("/post-detail", () => {
//   render(postDetail, app);
// });
router.on("/projects/:id", ({ data }) =>
  render(() => projectDetail(data), app)
);
// router.on("/project/:id", (params) => {
//   render(projectDetail(params.data.id), app);
// });
router.on("/admin/projects", () => {
  render(adminProjects, app);
});

router.on("/admin", () => {
  render(categoryAdmin, app);
});
router.on("/admin/projects/add", () => {
  render(ProjectAdd, app);
});
router.on("/admin/projects/projectCategoryAdd", () => {
  render(addProjectCategory, app);
});
router.on("/admin/projects/edit/:id", ({ data }) =>
  render(() => ProjectEdit(data), app)
);
router.on("/admin/projects/projectCategory/:id", ({ data }) =>
  render(() => projectCategory(data), app)
);

router.notFound(render(err404, app));
router.resolve();
