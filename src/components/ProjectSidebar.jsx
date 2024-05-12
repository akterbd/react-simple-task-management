import Button from "./Button"

const ProjectSidebar = ({onCreateProject, projects, onSelected, selectedProjectId}) => {
  return (
    <>
        <aside className="w-1/3 px-8 py-16 bg-teal-700 text-stone-50 md:w-72">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-50">Your Projects</h2>
            <div className="pb-4 mb-4">
                <Button onClick={onCreateProject}>+ Add Project</Button>
            </div>
            {projects.length > 0 && 
                <ul className="space-y-2 border-t border-gray-200 pt-4">
                {projects.map((project) => {
                    let cssClasses = 'w-full flex gap-2 items-center p-2 text-base font-normal text-gray-100 rounded-lg  hover:bg-gray-100 hover:text-gray-700';
                    if(project.id === selectedProjectId) {
                        cssClasses += " bg-stone-100 text-gray-800"
                    } else {
                        cssClasses += " text-gray-100";
                    }
                    return (
                        <li key={project.id}>
                            <button onClick={() => onSelected(project.id)} className={cssClasses}>
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"></path></svg>
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
            }
            
        </aside>
        
    </>
  )
}

export default ProjectSidebar