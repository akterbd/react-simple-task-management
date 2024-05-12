
import Button from './Button';
const NoProjectSelected = ({onCreateProject}) => {
  return (
    <div className="mt-24 text-center w-2/3">
        <p className='text-center'>
          <svg className="w-28 h-28 m-auto text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"/>
          </svg>
        </p>
        <h2 className="text-xl font-bold text-stone-500 my-4">No Project selected</h2>
        <p className="text-stone-400 mb-4">Select a project or get startd with a new one</p>
        <p className="mt-8">
            <Button onClick={onCreateProject}>Create new project</Button>
        </p>
    </div>
  )
}

export default NoProjectSelected