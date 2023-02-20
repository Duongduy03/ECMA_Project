// import { projectFake } from "../../data";
import { useEffect, useState } from "@/lib";

const adminProjects = () => {
  /*
    B1: Khởi tạo state
    B2: Render HTML
    B3: CHạy vào hàm useEffect
        - Lấy ra các nút remove
        - Thêm sự kiện click cho các nút
    */
  const [data, setData] = useState([]);
  useEffect(() => {
    // const projects = JSON.parse(localStorage.getItem("projects")) || []; //
    // setData(projects);
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        const newProjects = data.filter((project) => project.id != id);
        localStorage.setItem("projects", JSON.stringify(newProjects));
        setData(newProjects);
        fetch(`http://localhost:3000/categories/${id}`, {
          method: "DELETE",
        });
      });
    }
  });

  //  B2
  return `

    
    <h1>Quản lý dự án</h1>
    <table class="table table-bordered">
    <thead>
      <tr>
        <th>Id</th>
        <th>Tên dự án</th>
        
       
        <th>Chức năng</th>
      </tr>
    </thead>
    <tbody>
    ${data
      .map(
        (project) =>
          `
            <tr>
            <td>${project.id}</td>
            <td>${project.name}</td>
           
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
  `;
};

export default adminProjects;
