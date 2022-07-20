import "./App.css";
import { NuevoTodo } from './components/NuevoTodo';
import { Todos } from './components/Todos';



function App() {
	return (
		<div className="App">
      <h1>Lista de tareas</h1>
      {
        // Para poder utilizar el contexto dentro de nuestros
        // componentes, necesitamos que los mismos se encuentren
        //"envueltos" dentro del provider.
      }
      <NuevoTodo />
      <Todos />
    </div>
	);
}

export default App;
