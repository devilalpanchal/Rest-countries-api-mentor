let arr = []
arr[0] = document.getElementById('africa')
arr[1] = document.getElementById('america')
arr[2] = document.getElementById('asia')
arr[3] = document.getElementById('europe')
arr[4] = document.getElementById('oceania')

arr.forEach(arr => {
    arr.addEventListener('click', () => {
        function filterContinent() {
            fetch(`https://restcountries.com/v3.1/region/${arr.id}`)
                .then((Response) => Response.json()
                )
                .then((data) => {
                    let countries = data
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
                    console.log('Error');
                })
        }
        filterContinent()

    })
});

