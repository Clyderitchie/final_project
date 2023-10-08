// Global variables
let toggleBtn = document.querySelector('#toggle-btn');







// Header section
toggleBtn.addEventListener('click', function(event){
    event.preventDefault();
    let toggleList = document.querySelector('#toggle-list')
    toggleList.innerHTML = `
    <li>Profile</li>
    <li>Settings</li>
    <li>FAQ</li>`
})