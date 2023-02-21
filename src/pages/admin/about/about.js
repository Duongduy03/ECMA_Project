import footerAdmin from "../../../component/admin/footerAdmin";
import headerAdmin from "../../../component/admin/headerAdmin";
import { useState, useEffect } from "../../../lib";

const about = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/about`)
      .then((response) => response.json())
      .then((data) => setAbout(data));
  }, []);

  return `
    ${headerAdmin()}
    <div class="container" style="height:auto;margin:20px auto">
    ${about.map((about) => {
      return `
        <div class="about" style="display:flex;width:1200px;justify-content:space-around" >
     
            ${about.image.map((img) => {
              return `
                <img src="${img}" alt="" style="width:200px">
                `;
            })}
          
            
        
        
            <div class="info" style="width:500px">
            <p>Họ và tên: ${about.name}</p>
            <p>Số điện thoại: ${about.phone}</p>
            <p>Email: ${about.email}</p>
            <p>Địa chỉ: ${about.address}</p>
            
            <p>Công việc: ${about.job}</p>
            <p>Mô tả: ${about.description}</p>
            <button class="btn btn-primary">
            <a href="/admin/about/edit/${
              about.id
            }" style="color:white">Chỉnh sửa</a>
                
            </button>
            </div>
            </div>
  </div>
        `;
    })}
  
 
    ${footerAdmin()}
  `;
};

export default about;
