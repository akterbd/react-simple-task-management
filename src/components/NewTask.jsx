import { useRef, useState } from "react";
import Modal from "./Modal";

const NewTask = ({onAdd}) => {
  const modal = useRef();
  const [taskState, setTaskState] = useState('');
  const handleSaveTask = () => {
    if(taskState.trim() === ''){
      modal.current.open();
      return;
    }
    onAdd(taskState);
    setTaskState('');
  }

  const handleOnchange = (event) => {
    setTaskState(event.target.value);
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 my-4">Ops... looks like you forgot to enter a value.</p>
        </Modal>
      <div className="flex items-center gap-4">
          <input onChange={handleOnchange} type="text" value={taskState} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
          <button onClick={handleSaveTask} className="text-stone-700 hover:text-stone-950">Add Task</button>
      </div>
    </>
  )
}

export default NewTask;