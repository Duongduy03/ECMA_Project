import { router, useEffect, useState } from "@/lib";
import footerAdmin from "../../../component/admin/footerAdmin";
import headerAdmin from "../../../component/admin/headerAdmin";
import axios from "axios";
const ProjectEdit = ({ id }) => {
  // const projects = JSON.parse(localStorage.getItem("projects")) || [];
  // const currentProject = projects.find((project) => project.id == id);
  const [project, setProject] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}?_expand=category`)
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/categories/`)
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);
  const newCategory = category.filter((category) => {
    return category.id != project.categoryId;
  });
  // console.log(newCategory);
  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const name = document.querySelector("#name");
    const image = document.querySelector("#image");
    const des = document.querySelector("#description");
    const admin = document.querySelectorAll("#admin");
    const category = document.querySelectorAll("category");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const urls = await upLoadFiles(image.files);
      const newProject = {
        // id: currentProject.id,
        name: name.value,
        description: des.value,
        aboutId: admin.value,
        categoryId: category.value,
        image: urls,
      };
      fetch(`http://localhost:3000/projects/` + id, {
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
  <div class="container" style="height:auto">
  <h1>Form sửa</h1>
        <form id="form-edit">
        <div class="form-group mb-3">
        <lable>Tên dự án</lable>
        <input type="text" class="form-control" id="name" style="outline:auto;" value="${
          project.name
        }"/>
        </div>
        <div class="form-group mb-3">
        <lable>Mô tả dự án</lable>
        <input type="text" class="form-control" id="description" style="outline:auto;" value="${
          project.description
        }" />
        </div>
        <div class="form-group mb-3">
        <lable>Người thực hiện</lable>
        <input type="text" class="form-control" id="admin" style="outline:auto;" value="1" disabled />
        </div>
        <div class="form-group mb-3">
        <lable>Danh mục dự án</lable>
        <select name="" id="category" class="form-group w-100">
           <option value="${project.categoryId}">${
    project.category?.name
  }</option>
           ${newCategory
             .map((category) => {
               return `
            <option value="${category.id}">${category.name}</option>
            `;
             })
             .join("")}
          
          
                
              
              
               
        </select>
        </div>
        <div class="form-group mb-3">
        <lable>Thêm ảnh</lable>
        <input type="file"  class="form-control" multiple id="image" style="outline:auto;" />
        <img src="${project.img}" atl="" style="width:100px">
        </div>
           
           
            <button class="btn btn-primary" >Sửa</button>
            
          
        </form>
    </div>
    ${footerAdmin()}
    `;
};

export default ProjectEdit;
