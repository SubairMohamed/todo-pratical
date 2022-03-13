
function App() {
  return (
    <div className="flex min-h-screen">
      {/* aside left */}

      <aside id="left" className="bg-blue-400 w-20 lg:w-28 flex-none">
        left
      </aside>
      {/* main */}

      <section id="main" className="bg-green-200 grow">
        <header>header</header>
        <main>main</main>
      </section>

      {/* aside right */}

      <aside id="right" className="bg-red-200 sm:hidden md:block md:w-80 lg:w-96">
        right
      </aside>

    </div>
  );
}

export default App;
