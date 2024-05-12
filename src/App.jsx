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

  const handleCreateTask = (text) => {
    setProjectsState((prevState) => {
      const newTask = {
        text: text,
        id: Math.random(),
        selectedProjectId: prevState.selectedProjectId
      }
      return {
        ...prevState,
        tasks:[newTask, ...prevState.tasks]
      }
    })
  }
  const handleDeleteTask = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((project) => project.id !== id)
      }
    })
  }

  const handleCreateProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  const handleSelectedProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  const handleCancelProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  const handleAddProject = (projecData) => {
    setProjectsState((prevState) => {
      const newData = {
        ...projecData,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects:[newData, ...prevState.projects]
      }
    })
  }

  const handleDeleteProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    })
  }

  const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);

  let content = (
    <SelectedProject 
      projectData={selectedProject} 
      onDeleteProject={handleDeleteProject} 
      onAddTask={handleCreateTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
      selectedProjectId={projectsState.selectedProjectId}
      />
  );

  if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected  onCreateProject={handleCreateProject} />
  } else if(projectsState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} onCancelProject={handleCancelProject} />
  }
  
  return (
    <>
      <main className="min-h-dvh flex gap-8 bg-slate-100">
        <ProjectSidebar 
        onCreateProject={handleCreateProject} 
        projects={projectsState.projects} 
        onSelected={handleSelectedProject}
        selectedProjectId={projectsState.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
