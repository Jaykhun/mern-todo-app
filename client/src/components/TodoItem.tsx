import { TodoService } from '../service/todoService'
import { ITodo } from '../types/todoTypes'
import Check from './Check'

interface TodoItemProps {
    todo: ITodo
}

const TodoItem = ({ todo }: TodoItemProps) => {
    const { text, _id, timestamp, completed } = todo

    const handleDelete = async () => {
        await TodoService.deleteTodo(_id)
    }

    const handleEdit = async () => {
        const todo = prompt('Edit', text)
        if (todo) {
            await TodoService.updateTodo(todo, _id)
        }
    }

    return (
        <div className="todo__item flex items-center  gap-5 mt-7">
            <div className="todo__completed border-2 rounded-sm border-yellow-500 w-5 h-5">
                <Check completed={completed} />
            </div>

            <label htmlFor={_id} className='todo__text text-left flex-1 cursor-pointer'>
                {text}
            </label>

            <div className="todo__actions flex gap-3">
                <button className="todo__edit p-2 bg-yellow-500 rounded-sm" onClick={handleEdit}>Edit</button>
                <button className="todo__delete p-2 bg-yellow-500 rounded-sm" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem