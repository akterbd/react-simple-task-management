import Tasks from "./Tasks";

const SelectedProject = ({onAddTask, projectData, onDeleteProject, onDeleteTask, tasks, selectedProjectId}) => {
  const date = new Date(projectData.dueDate);
  const formattedDate = `${date.getDate()} ${date.toLocaleString('en-US', { month: 'short' })}, ${date.getFullYear()}`;
  return (
    <div className="w-[50rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">{projectData.title}</h1>
                <div className="flex items-center justify-between gap-3">
                  <button onClick={onDeleteProject} className="text-stone-600 hover:text-red-700">Delete</button>
                  {/* <button className="px-4 py-3 text-xs md:text-base rounded-md bg-teal-900 text-stone-100 hover:bg-teal-950 hover:text-stone-100">Edit Project</button> */}
                </div>
            </div>
            <p className="mb-4 text-stone-600"><strong>Deadline:</strong> {formattedDate}</p>
            <p className="text-stone-600 whitespace-pre-wrap">{projectData.description}</p>
        </header>
        <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} selectedProjectId={selectedProjectId} />
    </div>
  )
}

export default SelectedProject