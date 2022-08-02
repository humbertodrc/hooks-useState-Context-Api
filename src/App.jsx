import "./App.css";
import { NuevoTodo } from './components/NuevoTodo';
import { Todos } from './components/Todos';
import TodosContextProvider from './context/TodosContext';



function App() {
	return (
		<div className="App">
      <h1>Lista de tareas</h1>
      <TodosContextProvider>
        <NuevoTodo />
        <Todos />
      </TodosContextProvider>
    </div>
	);
}

export default App;
