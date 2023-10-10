// Global variables
let toggleBtn = document.querySelector('#toggle-btn');
let toggleList = document.querySelector('#toggle-list');
let dropdownBtn = document.querySelector('#dropdown-btn')
let dropdownMenu = document.querySelector('#dropdown-menu');





// Header section
toggleBtn.addEventListener('click', function(event){
    event.preventDefault();
    toggleList.classList.toggle('show');
    console.log('hello header btn')
})


// Customer search section
dropdownBtn.addEventListener('click', function(event){
    event.preventDefault();
    dropdownMenu.classList.toggle('show');
    // console.log(customerPersonalInfoArry.customer0)
})

// Customer personal info array test
console.log(customerPersonalInfoArry.customer0[5]);
