import { ChangeEvent, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { TodoService } from '../service/todoService'

const TodoHeader = () => {
    const { addTodo } = useActions()
    const [todo, setTodo] = useState('')

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (todo.trim().length > 4) {
            const newTodo = {
                text: todo,
                completed: false,
                timestamp: new Date().toLocaleDateString()
            }

            try {
                const res = await TodoService.addTodo(newTodo)
                addTodo(res.data)
                setTodo('')
            }

            catch (e) {
                console.log(e)
            }
        }

        else alert('At least 5 symbols')
    }

    return (
        <>
            <div className="todo__title text-center text-3xl font-bold capitalize mb-5  text-yellow-500">MERN to do app</div>
            <form className="todo__header flex justify-between gap-5" onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Add Note'
                    className='w-full px-2 rounded-sm'
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                />
                <button className='p-3 rounded-sm bg-yellow-500'>Submit</button>
            </form>
        </>
    )
}

export default TodoHeader