import { Todo } from "../todos/models/todo.models";

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],
    filter: Filters.All,
}


const initStore = () => {
    console.log(state);
    console.log('InitStore');
}

const loadStore = () => {
    throw new Error('Not implemented');
}


const getTodos = (filter = Filters.All) => {

    switch(filter) {
        case Filters.All:
            return [...state.todos];
        
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);

        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        
        default:
            throw new Error(`Option ${filter} is not valid`);
    }
}

/**
 * 
 * @param {String} description
 */
const addTodo = (description) => {
    throw new Error('Not Implemented');
}

/**
 * 
 * @param {String} todoID
 */
const toggleTodo = (todoID) => { 
    throw new Error('Not implemented');
}

const deleteTodo = (todoID) => { 
    throw new Error('Not implemented');
}

const deleteCompleted = () => {
    throw new Error('Not implemented');
}

const setFilter = (newFilter = Filters.All) => {
    throw new Error('Not implemented');
}

const getCurrentFilter = () => {
    throw new Error('Not implemented');
}


export default {
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo
}