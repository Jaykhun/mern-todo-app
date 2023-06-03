export interface ITodo {
    _id: string
    text: string,
    completed: boolean,
    timestamp: string
}

export interface ReqTodo extends Omit<ITodo, '_id'>{}