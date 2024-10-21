import React, { useEffect, useState } from 'react';
import TodoService from '../services/TodoService';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch todos from the backend
    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = () => {
        TodoService.getTodos()
            .then((response) => {
                setTodos(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching todos:', error);
                setIsLoading(false);
            });
    };

    const handleAddTodo = (newTodo) => {
        TodoService.createTodo(newTodo).then(() => {
            loadTodos(); // Refresh the list after adding
        });
    };

    const handleUpdateTodo = (id, updatedTodo) => {
        TodoService.updateTodo(id, updatedTodo).then(() => {
            loadTodos(); // Refresh the list after updating
        });
    };

    const handleDeleteTodo = (id) => {
        TodoService.deleteTodo(id).then(() => {
            loadTodos(); // Refresh the list after deleting
        });
    };

    return (
        <div>
            <h2>Todo List</h2>
            <TodoForm onAddTodo={handleAddTodo} />
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <span>{todo.title}</span>
                            <button onClick={() => handleUpdateTodo(todo.id, { ...todo, completed: !todo.completed })}>
                                {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
                            </button>
                            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TodoList;
