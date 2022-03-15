import Main from './components/Main/Main';
import Left from './components/Asides/Left';
import Right from './components/Asides/Right';

const App = () => {
  return (
    <div className="flex min-h-screen bg-yellow-200">

      <Left />

      <Main />

      <Right />
    </div>
  );
}

export default App;
