
export const TodoReducer = (initialState = [], action)=>{

    switch (action.type) {
        case '[TODO] add todo':
            
            return [...initialState, action.payload];
        
        case '[TODO] delete todo' :
            return  initialState.filter(todo => todo.id !==  action.payload) //ACA ESTOY MANDANDO POR EL PAYLOAD EL ID QUE QUIERO ELIMINAR POR ESO
                                                                            // LE DIGO QUE EL FILTER ME TRAIGA TODOS LOS ID MENOS EL QUE QUIERO ELIMINAR
        
        case '[TODO] Togle todo':
            return initialState.map(todo =>{ //el map retorna un array
                if(todo.id === action.payload){//el action payload es el id que quiero cambiar a false o true
                    return { 
                        ...todo,
                        done: !todo.done //aca me cambia de true a false o de false a true solo con poner el ! antes de la variable
                    }
                }
                return todo;
            })
        default:  
        return initialState;                                                            
    }
}