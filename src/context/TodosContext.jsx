import {createContext, useState} from 'react'

export const TodosContext = createContext()

const TodosContextProvider = ({ children }) => {
  
  const [todos, setTodos] = useState([]);

  const agregarTodos = (tarea) => {
    setTodos([...todos, tarea])

    // Opcion 2
    // const temporal = todos
    // temporal.push(tarea)
    // setTodos(temporal)
  }

  const eliminarTodos = (id) => {
    const todosFiltrados = todos.filter(todo => todo.id !== id)

    setTodos(todosFiltrados)
  }

  return (
    <TodosContext.Provider
      value={{
        agregarTodos,
        eliminarTodos,
        todos
      }}
    >
      {children}
    </TodosContext.Provider>
    )

}

export default TodosContextProvider;