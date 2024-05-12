import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal";

const NewProject = ({onAddProject, onCancelProject}) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const handleSaveProject = () => {
    const enteredName = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    
    const projects = {
        title:enteredName,
        description:enteredDescription,
        dueDate:enteredDueDate
    }
    if(enteredName.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
        modal.current.open();
        return;
    }
    onAddProject(projects)
  }
  return (
    <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 my-4">Ops... looks like you forgot to enter a value.</p>
            <p className="text-stone-600 my-4">Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button onClick={onCancelProject} className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button onClick={handleSaveProject} className="px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950">Save</button>
                </li>
            </menu>
            <div>
                <Input ref={title} type="text" label="Title" /> 
                <Input ref={description} type="text" label="Description" textarea/>
                <Input ref={dueDate} type="Date" label="Due Date" />
            </div>
        </div>
    </>
  )
}

export default NewProject