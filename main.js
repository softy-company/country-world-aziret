const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const countryList = document.getElementById("countryList");

function fetchCountries() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      displayCountries(data);
    })
    .catch((error) => {
      console.error("Error fetching countries:", error);
    });
}

function displayCountries(countries) {
  countryList.innerHTML = ""; // Очистить предыдущие результаты

  const searchTerm = searchInput.value.toLowerCase();

  countries.forEach((country) => {
    const commonName = country.name.common.toLowerCase();

    if (commonName.includes(searchTerm)) {
      const countryBlock = document.createElement("div");
      countryBlock.classList.add("block");
      countryBlock.innerHTML = `
        <h1>${country.flag}</h1>
        <h2>${country.name.common}</h2>
        <a href="${country.maps.googleMaps}" target="_blank">
          <ion-icon name="navigate-outline"></ion-icon>
        </a>
      `;
      countryList.appendChild(countryBlock);
    }
  });
}

searchButton.addEventListener("click", fetchCountries);

fetchCountries(); 