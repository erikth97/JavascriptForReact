import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';


const elementIDs = {
    TodoList: '.todos-list',
    NewTodoInput: '#new-todo-input',
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


    // Referencias HTML
    const newDescriptionInput = document.querySelector(elementIDs.NewTodoInput);
    

    // Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) return;
        if(event.target.value.trim().length === 0 ) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    })

}
