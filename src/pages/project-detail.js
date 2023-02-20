import header from "../component/header";
import { projectFake } from "../data";

const projectDetail = (id) => {
  const currentProject = projectFake.find((project) => project.id == id);
  if (!currentProject) {
    return "";
  } else {
    return `

    ${header()}
    <h1>${currentProject.name}</h1>
  
    `;
  }
};
export default projectDetail;
