function createHeader() {
    const header = document.querySelector('#header');
    const content = document.querySelector('.content');

    const logoBox = document.createElement('div'); 
    logoBox.className = "logoBox"; 
    logoBox.innerHTML = "Zen Weather"
    header.appendChild(logoBox);

    const searchBox = document.createElement('div');
    searchBox.className = "searchBox";
    content.appendChild(searchBox);

    let searchIcon = document.createElement('span');
    searchIcon.innerHTML = 'search';
    searchIcon.className = 'material-icons'; 
    searchBox.appendChild(searchIcon);

    const search = document.createElement('input'); 
    search.className = "search";
    searchBox.appendChild(search);
}; 


export default createHeader