import { configureStore } from '@reduxjs/toolkit'
import { todoStore } from './todoStore'

export const store = configureStore({
    reducer: {
        todos: todoStore.reducer
    }
})

export type TypedStoreState = ReturnType<typeof store.getState>