import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    count:0,
    todos:[],
};

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id:Math.random()*100,
                text:action.payload,
            };
            state.todos.push(todo);
            state.count = state.count + 1;
        },
        removeTodo:(state,action)=>{
            state.todos= state.todos.filter((todo)=> todo.id!==action.payload)
            state.count -= 1;
        },
    },
});

export const {addTodo , removeTodo} = todoSlice.actions;

export default todoSlice.reducer;
