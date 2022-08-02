import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

export const Todo = ({ todo }) => {
	
	const { eliminarTodos } = useContext(TodosContext)
	


	return (
		<div className="todo">
			<p>{todo.nombre}</p>
			<button onClick={() => eliminarTodos(todo.id)}>Eliminar</button>
		</div>
	);
};
