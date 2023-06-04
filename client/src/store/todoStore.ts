import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ITodo } from './../types/todoTypes'

interface TypeTodoStore {
    todos: ITodo[]
}

const initialState: TypeTodoStore = {
    todos: []
}

export const todoStore = createSlice({
    name: 'todoStore',
    initialState,
    reducers: {
        getAllTodos(state, action: PayloadAction<ITodo[]>) {
            state.todos = action.payload
        },

        addTodo(state, action: PayloadAction<ITodo>) {
            state.todos = [...state.todos, action.payload]
        },

        deleteTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter(todo => todo._id !== action.payload)
        },

        updateText(state, action: PayloadAction<{ id: string, text: string }>) {
            const index = state.todos.findIndex(todo => todo._id === action.payload.id)
            state.todos[index].text = action.payload.text
        },

        updateStatus(state, action: PayloadAction<string>) {
            const index = state.todos.findIndex(todo => todo._id === action.payload)
            state.todos[index].completed = !state.todos[index].completed
        }
    }
})