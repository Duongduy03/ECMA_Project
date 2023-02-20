import { router, useEffect } from "@/lib";
import axios from "axios";
import { useState } from "../../../lib";

const addProjectCategory = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const nameProject = document.querySelector("#name");
    const des = document.querySelector("#description");
    const image = document.querySelector("#image");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const urls = await upLoadFiles(image.files);
      // console.log(image.files);
      const formData = {
        name: nameProject.value,
        description: des.value,
        image: urls,
      };
      // projects.push({
      //   id: projects.length + 1,
      //   name: nameProject.value,

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
  }, []);
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
  return `<div class="container" style="height:400px">
            <form id="form-add">
            <div class="form-group mb-3">
            <lable>Tên Project</lable>
            <input type="text" class="form-control" id="name" style="outline:auto;" />
            </div>
            <div class="form-group mb-3">
            <lable>Danh mục</lable>
            <select name="" id="" class="form-group w-100">

                <option value="">Danh mục</option>
              
               
        </select>
            </div>
            <div class="form-group mb-3">
            <lable>Mô tả</lable>
            <input type="text" class="form-control" id="description" style="outline:auto;" />
            </div>
            <div class="form-group mb-3">
            <lable>Thêm ảnh</lable>
            <input type="file"  class="form-control" multiple id="image" style="outline:auto;" />
            </div>
               
               
                <button class="btn btn-primary" >Thêm</button>
            </form>
        </div>`;
};

export default addProjectCategory;
