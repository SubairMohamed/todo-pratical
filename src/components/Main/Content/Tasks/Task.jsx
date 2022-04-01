import { CalendarIcon } from '@heroicons/react/outline';
import { CheckIcon } from '@heroicons/react/solid';
import { TrashIcon } from '@heroicons/react/outline';

const Task = () => {
    return (
        //  task one  

        <div id='task' className='card-white border-l-4 border-yellow-900 flex justify-between max-w-lg w-full'>
            <div id='leftside'>
                <div id='catogery'>
                    <h5 className='font-semibold text-slate-800'>Learnning</h5>
                </div>
                <div id='content'>
                    <h1 className='text-xl font-bold tracking-wider'>Learning Mern stack</h1>
                    <div className='flex gap-2 mt-1 items-center'>
                        <CalendarIcon className='w-5 h-5 text-slate-800' />
                        <span className='text-sm text-slate-800'>2021/2/02</span>
                    </div>
                </div>
            </div>
            <div id='rightside' className='flex flex-col gap-2'>
                <CheckIcon className='w-6 h-6 cursor-pointer text-green-500' />
                <TrashIcon className='w-6 h-6 cursor-pointer text-red-500' />
            </div>
        </div>
    );
};

export default Task;