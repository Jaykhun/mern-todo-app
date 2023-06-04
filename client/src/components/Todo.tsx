import { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { TodoService } from '../service/todoService'
import TodoHeader from './TodoHeader'
import TodoItem from './TodoItem'

const Todo = () => {
    const { getAllTodos } = useActions()
    const { todos } = useTypedSelector(store => store.todos)

    const getAll = async () => {
        try {
            const res = await TodoService.getAll()
            getAllTodos(res.data)
        }

        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAll()
    }, [])

    return (
        <div className='container max-w-3xl my-10 mx-auto px-4'>
            <div className='todo'>
                <TodoHeader />

                <div className="todo__body">
                    {todos.map(todo => <TodoItem todo={todo} key={todo._id} />)}
                </div>
            </div>
        </div>
    )
}

export default Todo