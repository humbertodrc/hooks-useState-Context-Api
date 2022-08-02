import { useState, useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

export const NuevoTodo = () => {

	const [tarea, setTarea] = useState('')

	 const {todos, agregarTodos}= useContext(TodosContext)

	const cambiarTarea = e => setTarea(e.target.value)

	// console.log(todos);

	const agregarTarea = () => {
		agregarTodos({
			id: todos.length + 1,
			nombre:tarea
		})

		setTarea("")
	}

	return (
		<div>
			<p>Agregar Tarea</p>
			<input
				type="text"
				placeholder="Nombre de la tarea"
				onChange={cambiarTarea}
				value={tarea}
			/>
			<button onClick={agregarTarea}>Agregar</button>
		</div>
	);
};
