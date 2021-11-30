export const fetchTodo = ()=>{
    return function(dispatch){
        fetch('http://localhost:3000/todo')
        .then( response => response.json() )
        .then( data=> {
            console.log(data)
            dispatch( setTodo(data) );
        } );
    }
}

export const setTodo = (data=null)=>{
    if(data)
    {
        return{
            type : 'Set_todo',
            payload : data
        }
    }
}

export const deleteTodo = (data)=>{
    
    return function(dispatch){
        
        fetch('http://localhost:3000/todo/'+data,{
            method : 'DELETE'
        })
        .then( res => res.json() )
        .then( data => {
            dispatch(fetchTodo());
        } )
    }

    
}

export const addTodo = (data=null)=>{
    
    return function(dispatch){
        
        fetch('http://localhost:3000/todo',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        .then( res => res.json() )
        .then( dispatch(fetchTodo()) )
    }
}
