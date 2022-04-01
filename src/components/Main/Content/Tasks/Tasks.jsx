import Task from "./Task";

const Tasks = () => {
    return (
        // Tasks
        <div id='tasks' className='flex flex-col items-center justify-center bg-yellow-300 px-4 pt-10 rounded-lg'>
            <h1 className='text-left w-full font-bold border-b pb-2 mb-2 max-w-lg'>Lists</h1>

            <div id="Lists" className="w-full flex flex-col justify-center items-center">
                <Task />


            </div>
        </div>
    );
};

export default Tasks;