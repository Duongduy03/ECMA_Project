import { router, useEffect, useState } from "@/lib";
import footerAdmin from "../../../component/admin/footerAdmin";
import headerAdmin from "../../../component/admin/headerAdmin";
import axios from "axios";
const ProjectEdit = ({ id }) => {
  // const projects = JSON.parse(localStorage.getItem("projects")) || [];
  // const currentProject = projects.find((project) => project.id == id);
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/categories/` + id)
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, []);
  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const name = document.querySelector("#name");
    const image = document.querySelector("#image");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const urls = await upLoadFiles(image.files);
      const newProject = {
        // id: currentProject.id,
        name: name.value,
        image: urls,
      };
      fetch(`http://localhost:3000/categories/` + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      }).then(() => router.navigate("/admin/projects"));
    });
    // localStorage.setItem("projects", JSON.stringify(newProjects));
  });
  const upLoadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "dc9iifdjv";
      const PRESET_NAME = "upload";
      const urls = [];
      const FOLDER_NAME = "ECMA";
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      const formData = new FormData();

      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);
      for (const file of files) {
        formData.append("file", file);
        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        urls.push(response.data.secure_url);
      }
      return urls;
    }
  };
  return `
  ${headerAdmin()}
  <div class="container" style="height:85vh">
  <h1>Form sửa</h1>
        <form id="form-edit">
        <div >
        <lable></lable>
          <input type="text" id="name" class="border" value="${project.name}" />
        </div>
        <div >
        <lable></lable>
          <input type="file" id="image" class="border" value="${
            project.image
          }" />
          <input type="text" hidden id="image" class="border" value="${
            project.image
          }" />
          <img src="${project.image}" style="width:200px">
        </div>
        <div >
        
        <button class="btn btn-primary" style="color:white">Sửa</button>
        </div>
            
          
        </form>
    </div>
    ${footerAdmin()}
    `;
};

export default ProjectEdit;
