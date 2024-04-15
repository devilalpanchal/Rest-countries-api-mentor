
const url = "https://restcountries.com/v3.1/all";
const input = document.getElementById('input');

// Fetch countries function
function fetchCountry() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        allcountriesData = data; 
        let result = allcountriesData.map(item => {
            return `
                <div class="card">

                    <img class="imgOfcountry" src="${item.flags.png}" alt="">
                    <div class="other">
                        <h3 class="countryName">${item.name.common}</h3>
                        <p class="population">Population: ${item.population}</p>
                        <p class="region">Region: ${item.region}</p>
                        <p class="capital">Capital: ${item.capital}</p>
                    </div>
                </div>
            `;
        });
        mainSection.innerHTML = result.join("");
    })
    .catch(err => {
        console.log('Error:', err);
    });
}

fetchCountry();

// Event listener for input field
input.addEventListener('enter', () => {
    let value = input.value.toLowerCase();
    if (allcountriesData) { 
        let newArray = allcountriesData.filter((country) =>
            country.name.common.toLowerCase().includes(value)
        );
        displayCountries(newArray); 
    }
});

// to keyup the input
input.addEventListener('keyup', () => {
    let value=input.value
    let newArray = allcountriesData.filter((item) =>
    item.name.common.toLowerCase().includes(value)
    )
    
    displayCountries(newArray); 
    
    })

// Function to display countries
function displayCountries(countries) {
    let result = countries.map(item => {
        return `
            <div class="cardmain card" onclick="handleClick('${item.name.common}')">
                <img class="imgOfcountry" src="${item.flags.png}" alt=""   onclick="console.log('sdfsadfsadfsfsadfsfa')" >
                <div class="other">
                    <h3 class="countryName">${item.name.common}</h3>
                    <p class="population">Population: ${item.population}</p>
                    <p class="region">Region: ${item.region}</p>
                    <p class="capital">Capital: ${item.capital}</p>
                </div>
            </div>
        `;
    });
    mainSection.innerHTML = result.join("");
}


let value =document.getElementsByClassName("cardmain")
console.log(value);



// to ahead page
// let mainSection = document.getElementById('mainSection');
// mainSection.addEventListener('click', event => {
//     // Check if the clicked element has the class "card"
//     if (event.target.classList.contains('card')) {
//       location.href = "http://127.0.0.1:5500/country.html";
//         console.log('Card clicked!');
//         // Redirect to another page
//         // let  name = item.name.comman
//         console.log(name);
// // fetchCountry1();


//     }
// });





// // Function to display countries
// function displayCountries(countries) {
//   let result = countries.map(item => {
//     return `
//       <div class="cardmain card" onclick="handleClick('${item.name.common}')">
//         </div>
//     `;
//   });
//   mainSection.innerHTML = result.join("");
// }

// function handleClick(countryName) {
//   console.log("Clicked country:", countryName);
// }


// function handleClick(countryName) {
//   const clickedCard = document.querySelector(`.cardmain[onclick*="${countryName}"]`);
//   if (clickedCard) {
//     location.href = "http://127.0.0.1:5500/country.html";
//     fetchCountry1();
//     displayCountries(countries)
//     const countryNameElement = clickedCard.querySelector(".countryName");
//     if (countryNameElement) {
//       const innerHTML = countryNameElement.innerHTML;
//       console.log("Inner HTML of country name:", innerHTML);
//     } else {
//       console.warn("h3 element with class 'countryName' not found in clicked card");
//     }
//   } else {
//     console.warn("Card with clicked country not found");
//   }
// }



