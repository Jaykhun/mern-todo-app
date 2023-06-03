import { useEffect, useState } from 'react'
import { TodoService } from '../service/todoService'
import { ITodo } from '../types/todoTypes'
import TodoHeader from './TodoHeader'
import TodoItem from './TodoItem'

const Todo = () => {
    const [todos, setTodos] = useState<ITodo[]>()

    const getAll = async () => {
        try {
            const todos = await TodoService.getAll()
            setTodos(todos.data)
        }

        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAll()
    }, [])

    return (
        <div className='todo'>
            <TodoHeader />

            <div className="todo__body">
                {todos && todos.map(todo => <TodoItem todo={todo} key={todo.timestamp} />)}
            </div>
        </div>
    )
}

export default Todo