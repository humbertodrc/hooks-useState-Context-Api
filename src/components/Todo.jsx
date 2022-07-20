export const Todo = ({todo}) => {
	return (
		<div className="todo">
			<p>{todo.nombre}</p>
			<button onClick={console.log("Eliminamos la tarea :)")}>Eliminar</button>
		</div>
	);
};
