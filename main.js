const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const countryList = document.getElementById("countryList");

function fetchCountries() {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      displayCountries(data);
    })

}

function displayCountries(countries) {
  countryList.innerHTML = "";

  const searchTerm = searchInput.value.toLowerCase();

  countries.forEach((country) => {
    const commonName = country.name.common.toLowerCase();

    if (commonName.includes(searchTerm)) {
      const countryBlock = document.createElement("div");
      countryBlock.classList.add("block");
      countryBlock.innerHTML = `
        <h1>${country.flag}</h1>
        <h2>${country.name.common}</h2>
        <h3>${country.altSpellings[0]}</h3>
        <h4>${country.capital}</h4>
        <h4>${country.timezones[0]}</h4>
        <a href="${country.maps.openStreetMaps}" target="_blank">
          <ion-icon name="navigate-outline"></ion-icon>
        </a>
      `;
      countryList.appendChild(countryBlock);
      console.log(country);
    }
  });
}

searchButton.addEventListener("click", fetchCountries);

fetchCountries(); 