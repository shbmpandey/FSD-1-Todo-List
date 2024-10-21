import axios from 'axios';

const API_URL = 'http://localhost:8080/api/todos';

const getTodos = () => {
    return axios.get(API_URL);
};

const createTodo = (todo) => {
    return axios.post(API_URL, todo);
};

const updateTodo = (id, todo) => {
    return axios.put(`${API_URL}/${id}`, todo);
};

const deleteTodo = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export default {
    getTodos,
    createTodo,  
    updateTodo,
    deleteTodo,
};
