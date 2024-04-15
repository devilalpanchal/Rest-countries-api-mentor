
const africa = document.getElementById('africa')
africa.addEventListener('click', () => {
    function filterContinent() {
        fetch('https://restcountries.com/v3.1/region/africa')
            .then((Response) => Response.json()
            )
            .then((data) => {
                let countries = data
                console.log(countries)
                let result = countries.map((item) => {
                    return `
            <div class="card">
            <img class="imgOfcountry" src="${item.flags.png}" alt="">
            <div class="other">
            <h3 class="countryName">${item.name.common}</h3>
            <p class="population">Population:${item.population}</p>
            <p class="region">Region:${item.region}</p>
            <p class="capital">Capital:${item.capital}</p>
            <p class="capital">Continent:${item.continents}</p>
        </div>
    </div>`
                });
                mainSection.innerHTML = result.join("")

            }).catch((err) => {
                console.log('Eroor');
            })
    }
    filterContinent()

})
const america = document.getElementById('america')
america.addEventListener('click', () => {
    function filterContinent() {
        fetch('https://restcountries.com/v3.1/region/america')
            .then((Response) => Response.json()
            )
            .then((data) => {
                let countries = data
                console.log(countries)
                let result = countries.map((item) => {
                    return `
            <div class="card">
            <img class="imgOfcountry" src="${item.flags.png}" alt="">
            <div class="other">
            <h3 class="countryName">${item.name.common}</h3>
            <p class="population">Population:${item.population}</p>
            <p class="region">Region:${item.region}</p>
            <p class="capital">Capital:${item.capital}</p>
            <p class="capital">Continent:${item.continents}</p>
        </div>
    </div>`
                });
                mainSection.innerHTML = result.join("")

            }).catch((err) => {
                console.log('Eroor');
            })
    }
    filterContinent()

})

const Asia = document.getElementById('asia')
Asia.addEventListener('click', () => {
    function filterContinent() {
        fetch('https://restcountries.com/v3.1/region/asia')
            .then((Response) => Response.json()
            )
            .then((data) => {
                let countries = data
                console.log(countries)
                let result = countries.map((item) => {
                    return `
            <div class="card">
            <img class="imgOfcountry" src="${item.flags.png}" alt="">
            <div class="other">
            <h3 class="countryName">${item.name.common}</h3>
            <p class="population">Population:${item.population}</p>
            <p class="region">Region:${item.region}</p>
            <p class="capital">Capital:${item.capital}</p>
            <p class="capital">Continent:${item.continents}</p>
        </div>
    </div>`
                });
                mainSection.innerHTML = result.join("")

            }).catch((err) => {
                console.log('Eroor');
            })
    }
    filterContinent()

})

const europe = document.getElementById('europe')
europe.addEventListener('click', () => {
    function filterContinent() {
        fetch('https://restcountries.com/v3.1/region/europe')
            .then((Response) => Response.json()
            )
            .then((data) => {
                let countries = data
                console.log(countries)
                let result = countries.map((item) => {
                    return `
            <div class="card">
            <img class="imgOfcountry" src="${item.flags.png}" alt="">
            <div class="other">
            <h3 class="countryName">${item.name.common}</h3>
            <p class="population">Population:${item.population}</p>
            <p class="region">Region:${item.region}</p>
            <p class="capital">Capital:${item.capital}</p>
            <p class="capital">Continent:${item.continents}</p>
        </div>
    </div>`
                });
                mainSection.innerHTML = result.join("")

            }).catch((err) => {
                console.log('Eroor');
            })
    }
    filterContinent()

})

const oceania = document.getElementById('oceania')
oceania.addEventListener('click', () => {
    function filterContinent() {
        fetch('https://restcountries.com/v3.1/region/oceania')
            .then((Response) => Response.json()
            )
            .then((data) => {
                let countries = data
                console.log(countries)
                let result = countries.map((item) => {
                    return `
            <div class="card">
            <img class="imgOfcountry" src="${item.flags.png}" alt="">
            <div class="other">
            <h3 class="countryName">${item.name.common}</h3>
            <p class="population">Population:${item.population}</p>
            <p class="region">Region:${item.region}</p>
            <p class="capital">Capital:${item.capital}</p>
            <p class="capital">Continent:${item.continents}</p>
        </div>
    </div>`
                });
                mainSection.innerHTML = result.join("")

            }).catch((err) => {
                console.log('Eroor');
            })
    }
    filterContinent()

})


