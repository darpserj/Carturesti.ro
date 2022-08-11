let $menuTriggerButton = document.getElementById('menuButton');
let $mainMenuNav = document.getElementById('mainMenu');
let $searchTriggerButton = document.getElementById('searchButton');
let $searchInputForm = document.getElementById('formInput');



$menuTriggerButton.addEventListener('click', () => {
    $mainMenuNav.classList.toggle('active');
},true)

$searchTriggerButton.addEventListener('click', () => {
    $searchInputForm.classList.toggle('active');
},true)