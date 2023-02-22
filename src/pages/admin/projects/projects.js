// import { projectFake } from "../../data";
import { useEffect, useState } from "@/lib";
import footerAdmin from "../../../component/admin/footerAdmin";
import headerAdmin from "../../../component/admin/headerAdmin";

const adminProjects = () => {
  /*
    B1: Khởi tạo state
    B2: Render HTML
    B3: CHạy vào hàm useEffect
        - Lấy ra các nút remove
        - Thêm sự kiện click cho các nút
    */
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  useEffect(() => {
    // const projects = JSON.parse(localStorage.getItem("projects")) || []; //
    // setData(projects);
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    // const projects = JSON.parse(localStorage.getItem("projects")) || []; //
    // setData(projects);
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data1) => setCategory(data1));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        const newProjects = data.filter((project) => project.id != id);
        localStorage.setItem("projects", JSON.stringify(newProjects));
        setData(newProjects);
        fetch(`http://localhost:3000/projects/${id}`, {
          method: "DELETE",
        });
      });
    }
  });

  //  B2
  return `
  ${headerAdmin()}
    <div class="container" style="height:auto">
    <h1>Quản lý dự án</h1>
    <table class="table table-bordered">
    <thead>
      <tr>
        <th>Id</th>
        <th>Tên dự án</th>
        <th>Mô tả</th>
        <th>Tên danh mục</th>
        <th>Ảnh</th>
        
       
        <th>Chức năng</th>
      </tr>
    </thead>
    <tbody>
    ${data
      .map((project) => {
        const newCategory = category.filter((cate) => {
          return cate.id == project.categoryId;
        });

        return `
            <tr>
            <td>${project.id}</td>
            <td>${project.name}</td>
            <td>${project.description}</td>
            <td>${project.categoryId}</td>
      
            <td style="display:flex;">
       
          <img src="${project.image}" style="width:200px;margin: 5px">
       
         
             
            </td>
           
            <td>
                <button data-id="${project.id}" class="btn btn-remove btn-danger"> Remove</button>
                <button data-id="${project.id}" class="btn btn-edit btn-danger">
                <a href="/admin/projects/edit/${project.id}" style="color:white">Sửa
                </a>
                  </button>
                 </button>
            </td>
          </tr>
            `;
      })

      .join("")}
    

    </tbody>
  </table>
  <button  class="btn btn-primary">
  <a href="/admin/projects/add" style="color:white">Thêm mới
  </a>
    </button>
    </div>
    
    ${footerAdmin()}
  `;
};

export default adminProjects;
