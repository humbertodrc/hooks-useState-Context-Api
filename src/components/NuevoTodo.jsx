export const NuevoTodo = () => {
	return (
		<div>
			<p>Agregar Tarea</p>
			<input
				type="text"
				placeholder="Nombre de la tarea"
				onChange={console.log("Aqui va algo")}
				value={"Aqui también"}
			/>
			<button onClick={() => console.log("Y aquí")}>Agregar</button>
		</div>
	);
};
