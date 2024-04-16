

const dropdownContenttheme =document.querySelector('.dropdown-content')
const darkAndlight =document.querySelector('.moonandDarkmode')
const suntheme =document.querySelector('.suntheme')
const cardmain =document.querySelector('.cardmain')

const other1 = document.querySelector('.other1')
const backBtn1 = document.querySelector('.backBtn')
const backBtn11 = document.querySelector('.backBtn1')
const BorderCountries1 = document.querySelector('.BorderCountries1')
const WorldAnddarkMode = document.querySelector('.WorldAnddarkMode')
const filterIcon = document.querySelector('.filterIcon')
console.log(filterIcon);
const moonIcontheme =document.querySelector('.moonIcon')

const cardtt = document.querySelector('.card')
const input1 = document.querySelector('.input')
const filterpp = document.querySelector('.filterpp')
const filterIconan = document.querySelector('.filterIconandtext')
darkAndlight.addEventListener('click',()=>{
    filterIcon.classList.toggle('otherthemespecial')
    input1.classList.toggle('othertheme')
    filterpp.classList.toggle('othertheme')
    filterIconan.classList.toggle('othertheme')
dropdownContenttheme.classList.toggle('othertheme')
    WorldAnddarkMode.classList.toggle('othertheme')
    backBtn11.classList.toggle('othertheme')
    BorderCountries1.classList.toggle('othertheme')
    backBtn1.classList.toggle('othertheme')
    other1.classList.toggle('othertheme')
    document.body.classList.toggle('theme')
    suntheme.classList.toggle('hide')
    moonIcontheme.classList.toggle('hide')
    localStorage.setItem('themeMode', 'light');
})

// to drop dwon
const filterIconandtext =document.querySelector('.filterIconandtext')
const dropdown = document.querySelector('.dropdown-content')

filterIconandtext.addEventListener('click',()=>{
dropdown.classList.toggle("show")
dropdown.classList.toggle("hide")
})


  // function to set a given theme/color-scheme
  function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();