import axios from 'axios'
import { ITodo, ReqTodo } from '../types/todoTypes'

const instance = axios.create({
    baseURL: 'http://localhost:3001',
})

export const TodoService = {
    async getAll() {
        return instance<ITodo[]>({
            url: '/todo',
            method: 'GET'
        })
    },

    async addTodo(todo: ReqTodo) {
        return instance<ITodo>({
            url: '/todo/new',
            method: 'POST',
            data: todo
        })
    },

    async updateTodo(todo: string, id: string) {
        return instance({
            url: `/todo/${id}`,
            method: 'PUT',
            data: { text: todo }
        })
    },

    async updateStatus(id: string) {
        return instance({
            url: `/todo/completed/${id}`,
            method: 'PUT'
        })
    },

    async deleteTodo(id: string) {
        return instance({
            url: `/todo/${id}`,
            method: 'DELETE'
        })
    },
}