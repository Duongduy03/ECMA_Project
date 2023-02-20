// import header from "../../../component/header";
import footerAdmin from "../../../component/admin/footerAdmin";
import headerAdmin from "../../../component/admin/headerAdmin";
import projectAdmin from "../../../component/admin/projectAdmin";
import footer from "../../../component/footer";

import { useEffect, useState } from "../../../lib";

const categoryAdmin = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/categories`)
      .then((respone) => respone.json())
      .then((data) => setCategories(data));
  }, []);

  return /*html*/ `
  
     
   ${headerAdmin()}
   ${projectAdmin()}
    ${footerAdmin()}
  `;
};

export default categoryAdmin;
