

const darkAndlight =document.querySelector('.moonandDarkmode')
const suntheme =document.querySelector('.suntheme')
const cardmain =document.querySelector('.cardmain')
console.log(cardmain);
const moonIcontheme =document.querySelector('.moonIcon')
console.log(suntheme);
darkAndlight.addEventListener('click',()=>{
    document.body.classList.toggle('theme')
    suntheme.classList.toggle('hide')
    moonIcontheme.classList.toggle('hide')
    // cardmain.classList.remove('card')
    // cardmain.classList.add('cardtheme')
    localStorage.setItem('themeMode', 'light');
})

// to drop dwon
const filterIconandtext =document.querySelector('.filterIconandtext')
console.log(filterIconandtext);
const dropdown = document.querySelector('.dropdown-content')
console.log(dropdown);

filterIconandtext.addEventListener('click',()=>{
    console.log(dropdown)
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