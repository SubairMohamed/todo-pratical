const Left = () => {
    return (
        //  aside left 
        <aside id="left" className="w-20 lg:w-28 xl:w-60 flex-none shadow-xl shadow-sky-100 border-2 border-sky-100 rounded-tr-2xl bg-white">
            <div id="logo" className="flex items-center justify-center">
                <div className="logo my-5 mx-3 rounded-full flex justify-center items-center">
                    <img src="/images/todo logo 2.jpg" className="lg:w-14 lg:h-auto m-0 p-0 rounded-md shadow-yellow-200 shadow-xl flex justify-center items-center" />
                </div>
                <div id="logo-text" className="hidden xl:block">
                    <h1 className="text-lg font-bold tracking-wider bg-yellow-600 inline-block text-white rounded-lg p-1 mb-1">My Todo App</h1>
                    <p className="text-gray-50 text-sm tracking-wider">Sava my todo app</p>
                </div>
            </div>
        </aside>
    )
}

export default Left;