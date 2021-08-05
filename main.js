import onLoad from './onLoad'
import weather from './api'
import createHeader from './header'

createHeader();

// On Load:
onLoad(); 

// Search:
const searchButton = document.querySelector('.material-icons');
const weatherBox = document.querySelector('.weatherBox');
const search = document.querySelector('.search'); 
searchButton.addEventListener('click', () => {
    weather();
    search.value = "";
});

search.addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {
        weather();
        search.value = "";
    }
});