import { useEffect, useState } from "../../../lib";
import { router, render } from "../../../lib";
import axios from "axios";
import headerAdmin from "../../../component/admin/headerAdmin";
import footerAdmin from "../../../component/admin/footerAdmin";
const editAbout = ({ id }) => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/about/` + id)
      .then((response) => response.json())
      .then((data) => setAbout(data));
  }, []);
  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const name = document.querySelector("#name");
    const phone = document.querySelector("#phone");
    const email = document.querySelector("#email");
    const address = document.querySelector("#address");
    const job = document.querySelector("#job");
    const image = document.querySelector("#image");
    const description = document.querySelector("#description");
    const facebook = document.querySelector("#facebook");
    const github = document.querySelector("#github");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const urls = await upLoadFiles(image.files);
      const newInfo = {
        // id: currentProject.id,
        name: name.value,
        phone: phone.value,
        email: email.value,
        address: address.value,
        job: job.value,
        description: description.value,
        facebook: facebook.value,
        github: github.value,
        image: urls,
      };
      fetch(`http://localhost:3000/about/` + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newInfo),
      }).then(() => router.navigate("/admin/about"));
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
  <div class="container">
  <h1>Form chỉnh sửa thông tin</h1>
  <form id="form-edit">
        <div class="form-group mb-3">
        <lable>Họ và tên</lable>
          <input type="text" id="name" class="border" value="${about.name}" />
        </div>
        <div class="form-group mb-3" >
        <lable>Số điện thoại</lable>
          <input type="text" id="phone" class="border" value="${about.phone}" />
        </div>
        <div class="form-group mb-3" >
        <lable>Email</lable>
          <input type="text" id="email" class="border" value="${about.email}" />
        </div>
        <div class="form-group mb-3">
        <lable>Địa chỉ</lable>
          <input type="text" id="address" class="border" value="${
            about.address
          }" />
        </div>
        <div class="form-group mb-3">
        <lable>Công việc</lable>
          <input type="text" id="job" class="border" value="${about.job}" />
        </div>
        <div class="form-group mb-3">
        <lable>Mô tả</lable>
          <input type="text" id="description" class="border" value="${
            about.description
          }" />
        </div>
        <div class="form-group mb-3">
        <lable>Mô tả</lable>
          <input type="text" id="facebook" class="border" value="${
            about.facebook
          }" disabled/>
        </div>
        <div class="form-group mb-3">
        <lable>Mô tả</lable>
          <input type="text" id="github" class="border" value="${
            about.github
          }" disabled/>
        </div>
        <div class="form-group mb-3" >
        <lable>Ảnh</lable>
          <input type="file" id="image" class="border" value="${about.image}" />
          <input type="text" hidden id="image" class="border" value="${
            about.image
          }" />
          <img src="${about.image}" style="width:200px">
        </div>
        <div >
        
        <button class="btn btn-primary" style="color:white">Sửa</button>
        </div>
            
          
        </form>
  
  </div>
   ${footerAdmin()}
  `;
};

export default editAbout;
