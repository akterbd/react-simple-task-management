import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects:[],
    tasks: [],
  });
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar />
      </main>
    </>
  );
}

export default App;
