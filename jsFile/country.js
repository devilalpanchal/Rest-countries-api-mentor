const root = document.querySelector('.root')
function fetchCountry1() {
    fetch( `https://restcountries.com/v3.1/name/india`)
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

                let imgOfcountry = document.querySelector('.imgOfcountry')
                let countryName = document.querySelector('.countryName')
                let NativeName = document.querySelector('.countryNativeName')
                let Population = document.querySelector('.population')
                let region = document.querySelector('.region')
                let Subregion = document.querySelector('.Subregion')
                let capital = document.querySelector('.capital')
                let Domain = document.querySelector('.Domain')
                let Currencies = document.querySelector('.Currencies')
                let Languages = document.querySelector('.Languages')
                let BorderCountries = document.querySelector('.BorderCountries')
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
        .catch(err => {
            console.log('Error:', err);
        });
}

fetchCountry1();
// to back button
const backbtn = document.querySelector('.backBtn')
backbtn.addEventListener('click', () => {
    location.href = "https://tinyurl.com/y647j53t";

})

