import { useEffect, useReducer } from "react"
import { TodoReducer } from "../08-useReducer/TodoReducer"


const initialState = []

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || []
}
//EL INIT ES EL TERCER ARUGEMNTO DEL REDUCER ESTA ES UNA FUNCION QUE SE EJECUTA 

export const useTodo = ()=>{

    
    const [todos, dispatch] = useReducer(TodoReducer, initialState,init)// EN ESTE CASO ESTAMOS UTILIZANDO UNA FUNCION TODOREDUCER Y EL ESTADO INICIAL DECLARADO ARRIBA
    console.log(todos)
    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos))

    }, [todos])
    
    const handleNewTodo = (newTODO)=>{
        const action = {
            type: '[TODO] add todo',
            payload: newTODO
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id)=>{
        const action = {
            type: '[TODO] delete todo',
            payload: id
        }

        dispatch(action)
    }

    const handleTogleTodo = (id)=>{
        const action = {
            type: '[TODO] Togle todo',
            payload: id
        }

        dispatch(action)
    }
     const allTodo = todos.length;
    const pendingTodoCont = todos.filter(todo => (!todo.done)).length;

    return{
        todos,
        allTodo,
        pendingTodoCont,
        handleDeleteTodo,
        handleNewTodo,
        handleTogleTodo
    }

}