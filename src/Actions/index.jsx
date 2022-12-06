export const ADD_TODO =(data)=>{
    return{
        type:"add_todo",
        data,
    }
}
export const UPDATE_TODO =(data)=>{
    return{
        type:"update_todo",
        data,
    }
}
export const DELETE_TODO =(data)=>{
    return{
        type:"delete_todo",
        data,
    }
}