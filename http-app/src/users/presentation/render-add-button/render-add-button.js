

/**
 * 
 * @param {HTMLDivElement} element
 */
export const renderAddButton = (element) {

    const faButton = document.createElement('button');
    faButton.innerText = '+';
    faButton.classList.add('fa-button');

    element.append(faButton);

    //TODO:
    faButton.addEventListener('click', () => {
        throw Error('no implementado')
    })
    
}