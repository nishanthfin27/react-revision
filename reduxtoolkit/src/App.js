import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
