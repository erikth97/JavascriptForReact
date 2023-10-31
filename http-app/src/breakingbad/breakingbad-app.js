
/**
 * @returns {Object} quote information
 */
const fetchQuote = async() => {

    const res = await fetch('https://www.breakingbadapi.com/api/quote/random');
    const data = await res.json();

    console.log(data[0]);
    return data[0];
}



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async(element) => {
    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...';

    const quote = await fetchQuote();
}