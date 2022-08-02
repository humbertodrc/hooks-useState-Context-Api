import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import {Todo} from "./Todo";

export const Todos = () => {

  const {todos} = useContext(TodosContext)

	return (
		<div className="todos">
			<p id="todos-title">Tareas agendadas</p>
			{todos.map((todo) => (
				<Todo key={todo.id} todo={todo}  />
			))}
		</div>
	);
};
