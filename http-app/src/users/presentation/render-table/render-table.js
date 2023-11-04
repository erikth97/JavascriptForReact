import userStore from '../../store/users-store';
import './render-table.css';

let table;

const createTable = () => {
        const table = document.createElement('table');
        const tableHeaders = document.createElement('thead');
        tableHeaders.innerHTML = `
        
        
        
        
        
        
        
        
        `;
    
        const tableBody = document.createElement('tbody');
        table.append(tableHeaders, tableBody)
        return table;
}


/**
 * 
 * @param {HTMLDivElement} element
 */
export const renderTable = (element) => {

    const users = userStore.getUsers();

    if(!table) {
        table = createTable();
        element.append(table);

        //TODO listeners a la table
    }

    let tableHTML = '';
    users.forEach(user => {
        tableHTML += `
        <tr>
            
        </tr>
        `
    })





}
