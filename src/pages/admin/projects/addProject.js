import { router, useEffect } from "@/lib";
// import { projects } from "../../data";
const ProjectAdd = () => {
  // const projects = JSON.parse(localStorage.getItem("projects")) || [];

  useEffect(() => {
    const form = document.querySelector("#form-add");
    const nameProject = document.querySelector("#name");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        name: nameProject.value,
      };
      // projects.push({
      //   id: projects.length + 1,
      //   name: name.value,
      // });
      // localStorage.setItem("projects", JSON.stringify(projects));
      fetch(`http://localhost:3000/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then(() => router.navigate("/admin/projects"));
    });
  });

  return `<div>
        <form id="form-add">
            <input type="text" id="name" style="outline:auto;" />
            <button class="btn btn-primary" >Thêm</button>
        </form>
    </div>`;
};

export default ProjectAdd;
