import { projectFake } from "../data";
import projectItem from "./projectItem";

const projectList = ({ projects }) => {
  return `
        ${projects?.map((project) => `${projectItem({ project })}`).join("")}
    `;
};
export { projectList };
