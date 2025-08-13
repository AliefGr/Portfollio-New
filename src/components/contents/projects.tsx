// Jangan pakai "use client" kalau mau fetch data di server
// "use client" 
import { getProjects } from "@/graphql";

import ProjectList from "./project-list";

 const ProjectsPage = async () => {
 const projectsData = await getProjects();
//   console.log("projectsData:", projectsData);  // <-- cek ini
  const data = projectsData.map((edge: any) => edge.node);
  console.log( "Ini data", data)
//   console.log("mapped data:", data);  // <-- cek ini juga
  return (
    <>
    <ProjectList projects={data} />
    </>
  );
}

export default ProjectsPage