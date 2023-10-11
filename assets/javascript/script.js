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
    // console.log(customerPersonalInfoArry.val[0])

    const selectedValue = dropdownMenu.value;

    const filteredInfo = filterCustomerInfo(selectedValue);

    console.log(filteredInfo);
})

function filterCustomerInfo(selectedValue){
    const filteredInfo = [];

    for (const customer in customerPersonalInfoArry) {
        const customerInfo = customerPersonalInfoArry[customerKey];

        for (const info of customerInfo){
            for (const prop in info) {
                if(info[prop] === selectedVaule) {
                    filteredInfo.push(info);
                    break;
                }
            }
        }
    }
    return filteredInfo;
}

