import footerAdmin from "../../../component/admin/footerAdmin";
import headerAdmin from "../../../component/admin/headerAdmin";
import { useEffect, useState } from "../../../lib";

const projectCategory = ({ id }) => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        const newProjects = data.filter((project) => project.id != id);
        localStorage.setItem("projects", JSON.stringify(newProjects));
        setProject(newProjects);
        fetch(`http://localhost:3000/projects/${id}`, {
          method: "DELETE",
        });
      });
    }
  }, []);
  const arr = [project];
  //   console.log(arr);
  return `
  ${headerAdmin()}
  <div class="container" style="height:100%">
  ${arr
    .map((pro) => {
      return `
    <h1>${pro.name}</h1>
    `;
    })
    .join("")}

  <table class="table table-bordered">
  <thead>
    <tr>
      <th>Id</th>
      <th>Tên dự án</th>
      <th>Mô tả dự án</th>
      <th>Ảnh</th>
      
     
      <th>Chức năng</th>
    </tr>
  </thead>
  <tbody>
  ${project.projects
    ?.map(
      (project) =>
        `
          <tr>
          <td>${project.id}</td>
          <td>${project.name}</td>
          <td>${project.description}</td>
          <td>

          <img src="/${project.img}" alt="" style="width:100%">
          </td>
         
         
          <td>
              <button data-id="${project.id}" class="btn btn-remove btn-danger"> Remove</button>
              <button data-id="${project.id}" class="btn btn-edit btn-danger">
              <a href="/admin/projects/edit/${project.id}">Sửa
              </a>
                </button>
               </button>
          </td>
        </tr>
          `
    )
    .join("")}
  

  </tbody>
</table>
<button  class="btn btn-primary">
<a href="/admin/projects/projectCategory/${id}/add" style="color:white">Thêm mới
</a>
  </button>
  </div>
  
  ${footerAdmin()}
  `;
};

export default projectCategory;
