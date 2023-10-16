import {Todo} from '../models/todo.models';
import { createTodoHTML } from './create-todo-html';



/**
 * 
 * @param {String} elementID
 * @param {Todo} todos
 */
export const renderTodos = (elementID, todos = []) => {

    //TODO: referencia
    const element = document.querySelector(elementID);

    todos.forEach(todo => {
        element.append(createTodoHTML(todo))
    });

}