import {Todo} from "./Todo";

export const Todos = () => {

  const todos =[]

	return (
		<div className="todos">
			<p id="todos-title">Tareas agendadas</p>
			{todos.map((todo) => (
				<Todo todo={todo} />
			))}
		</div>
	);
};
