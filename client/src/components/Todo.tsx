import TodoItem from './TodoItem'

const todos = [
    {
        id: '21',
        text: 'Learn Next',
        timestamp: '242424',
        completed: false
    },

    {
        id: '2da1',
        text: 'Learn Node',
        timestamp: '242424',
        completed: false
    },
]

const Todo = () => {
    return (
        <div className='todo'>
            <div className="todo__title text-center text-3xl font-bold capitalize mb-5">MERN to do app</div>
            <form className="todo__header flex justify-between gap-5">
                <input type="text" placeholder='Add Note' className='w-full px-2 rounded-sm' />
                <button className='p-3 rounded-sm'>Submit</button>
            </form>

            <div className="todo__body">
                {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
            </div>
        </div>
    )
}

export default Todo