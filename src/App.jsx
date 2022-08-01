import "./App.css";
import { NuevoTodo } from './components/NuevoTodo';
import { Todos } from './components/Todos';



function App() {
	return (
		<div className="App">
      <h1>Lista de tareas</h1>
      <NuevoTodo />
      <Todos />
    </div>
	);
}

export default App;
