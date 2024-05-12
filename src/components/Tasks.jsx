import NewTask from "./NewTask"

const Tasks = ({onAdd, onDelete, tasks, selectedProjectId}) => { 
  return (
    <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAdd={onAdd} />
        {tasks.filter(task => task.selectedProjectId === selectedProjectId).length === 0 && <p className="text-stone-800 mb-4">This project does not have any tasks yet.</p>}
        {tasks.filter(task => task.selectedProjectId === selectedProjectId).length > 0 && <ul className="">
                {
                    tasks.filter(task => task.selectedProjectId === selectedProjectId).map(task => (
                        <li className="flex justify-between my-2 rounded-md bg-stone-200 p-3" key={task.id}>
                            <span>{task.text}</span>
                            <button onClick={() => onDelete(task.id)} className="text-stone-700 hover:text-red-500">Clear</button>
                        </li>
                    ))
                }
            </ul>
        }
        
    </section>
  )
}

export default Tasks