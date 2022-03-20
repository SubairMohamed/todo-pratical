import { PlusCircleIcon } from '@heroicons/react/solid';

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
            <main className='bg-yellow-600 m-3 px-3 py-3 text-xl font-bold rounded-md capitalize shadow-red-300 shadow-md'>
                main
            </main>
        </section>
    )
}

export default Main;