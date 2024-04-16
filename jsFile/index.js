const url = "https://restcountries.com/v3.1/all";
const input = document.querySelector('.input');
const mainSection = document.getElementById('mainSection');
const mainSection1 = document.querySelector('.hello');
const otherpage = document.querySelector('.otherpage');
const header = document.querySelector('.heaerRomoveotherpage');

let allcountriesData;

// Fetch countries function
async function fetchCountry() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        allcountriesData = data;
        displayCountries(data);
    } catch (error) {
        console.log('Error:', error);
    }
}

fetchCountry();

// Event listener for input field
input.addEventListener('keyup', () => {
    let value = input.value.toLowerCase();
    if (allcountriesData) { 
        let newArray = allcountriesData.filter((country) =>
            country.name.common.toLowerCase().includes(value)
        );
        displayCountries(newArray); 
    }
});

// Function to display countries
function displayCountries(countries) {
    let result = countries.map(item => {
        return `
            <div class="cardmain card" onclick="handleClick('${item.name.common}')">
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
}

// Handle click function
function handleClick(countryName) {
console.log(mainSection1);
mainSection1.classList.toggle('hide')
header.classList.toggle('hide')
otherpage.classList.toggle('hide')
    console.log("Clicked country:", countryName);
    const root = document.querySelector('.root1')
function fetchCountry1() {
    console.log("Clicked country:", countryName);
    
    fetch( `https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => response.json())
        .then(data => {
            allcountriesData = data;
            console.log(data);

            let result = allcountriesData.map(item => {
                let languageKey
                let commonName
                let nationalityName

                if (item.name.nativeName && typeof item.name.nativeName === 'object') {
                    languageKey = Object.keys(item.name.nativeName)[0];
                    if (languageKey && item.name.nativeName[languageKey]) {
                        commonName = item.name.nativeName[languageKey].common;
                    }
                }

                if (item.currencies && typeof item.currencies === 'object') {
                    currencyKey = Object.keys(item.currencies)[0];
                    if (currencyKey && item.currencies[currencyKey]) {
                        currencyName = item.currencies[currencyKey];
                    }
                }

                if (item.demonyms && typeof item.demonyms === 'object') {
                    nationKey = Object.keys(item.demonyms)[0];
                    if (nationKey && item.demonyms[nationKey]) {
                        nationalityName = item.demonyms[nationKey].m;
                    }
                }

                if (item.languages && typeof item.languages === 'object') {
                    langKey = Object.keys(item.languages);
                    if (langKey && item.languages[langKey]) {
                        languagesName = item.languages[langKey];
                    }
                }

                let imgOfcountry = document.querySelector('.imgOfcountry1')
                let countryName = document.querySelector('.countryName1')
                let NativeName = document.querySelector('.countryNativeName1')
                let Population = document.querySelector('.population1')
                let region = document.querySelector('.region1')
                let Subregion = document.querySelector('.Subregion1')
                let capital = document.querySelector('.capital1')
                let Domain = document.querySelector('.Domain1')
                let Currencies = document.querySelector('.Currencies1')
                let Languages = document.querySelector('.Languages1')
                let BorderCountries = document.querySelector('.BorderCountries1')
                imgOfcountry.src = item.flags.png
                countryName.innerHTML = item.name.common
                NativeName.innerHTML = commonName
                Population.innerHTML = item.population
                region.innerHTML = item.region
                Subregion.innerHTML = item.subregion
                capital.innerHTML = item.capital
                Domain.innerHTML = nationalityName
                Currencies.innerHTML = currencyName.name
                Languages.innerHTML = languagesName
                BorderCountries.innerHTML = item.borders
            });
        })
        // fetchCountry1()
        .catch(err => {
            function loade() {
                mainSection.innerHTML = ` <div class="loader">

            </div>`
            }
            
            console.log('Error:', err);
        });
        loade()
}
fetchCountry1()
    // location.href = "http://127.0.0.1:5500/country.html";
}

// to back button
const backbtn = document.querySelector('.backBtn1')
backbtn.addEventListener('click', () => {
    otherpage.classList.toggle('hide')
    document.location.reload()
    // location.href = "https://tinyurl.com/y647j53t";

})
