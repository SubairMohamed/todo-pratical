import { PlusCircleIcon } from '@heroicons/react/solid';
import { CalendarIcon } from '@heroicons/react/outline';
import { CheckIcon } from '@heroicons/react/solid';
import { TrashIcon } from '@heroicons/react/outline';


const Main = () => {
    return (
        // main
        <section id="main" className="grow font-nunito">
            <header className="mx-5 my-5 flex items-center justify-between">
                <div>
                    <h1 className="text-lg font-bold tracking-wider bg-yellow-600 text-white rounded-lg p-1 mb-1">My Todo App</h1>
                    <p className="text-gray-50 text-sm tracking-wider">Sava my todo app</p>
                </div>
                <div className="bg-yellow-500 text-white rounded-full flex justify-center items-center">
                    <button>
                        <PlusCircleIcon className='w-5 h-5 text-yellow-100' />
                    </button>
                </div>
            </header>
            <main className='bg-yellow-300 card-white'>
                <div id='tasks'>

                    {/* task one  */}

                    <div id='task' className='card-white border-l-4 border-yellow-900 flex justify-between max-w-lg'>
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

                    {/* task two */}
                    <div id='task' className='card-white border-l-4 border-yellow-900 flex justify-between max-w-lg'>
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

                    {/* task three */}

                    <div id='task' className='card-white border-l-4 border-yellow-900 flex justify-between max-w-lg'>
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

                </div>
            </main>
        </section>
    )
}

export default Main;