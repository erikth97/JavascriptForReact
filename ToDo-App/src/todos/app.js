import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';


const elementIDs = {
    TodoList: '.todos-list',
}

/**
 * 
 * @param {String} elementID 
 */
export const App = (elementID) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(elementIDs.TodoList, todos);
    }

    // Cuando la funcion App() se llama
    (() =>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementID).append(app);
        displayTodos();
    })();
}