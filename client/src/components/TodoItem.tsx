import { ITodo } from '../types/todoTypes'

interface TodoItemProps {
    todo: ITodo
}

const TodoItem = ({ todo }: TodoItemProps) => {
    const { text, id, timestamp, completed } = todo
    return (
        <div className="todo__item flex justify-between gap-5 mt-4">
            <div className="todo__completed">
                <input type="checkbox" id='completed' />
                <label htmlFor="completed"></label>
            </div>

            <p className='todo__text text-left'>{text}</p>

            <div className="todo__actions flex gap-3">
                <button className="todo__edit p-2">Edit</button>
                <button className="todo__delete p-2">Delete</button>
            </div>
        </div>
    )
}

export default TodoItem