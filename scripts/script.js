const cityForm = document.querySelector('form');

const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weatherDetails = await getWeather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        weatherDetails: weatherDetails
    };
};

cityForm.addEventListener("submit", e => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
    .then(date => { })
    .catch(err => console.log(err));
});