// have user input for location and click a button to enter
// fetch data from api and grab specific data based on location
// display weather and create a button based on each user input
// weather display going to be like a grid of different sizes with 
// different weather information in each box in the grid
// have a column of buttons which the innerhtml will be the location


const searchWeather = () => {
    fetchData();
    let previousSearch = userInput.value;
    createButton();
}
searchBtn.addEventListener("click", searchWeather);

const createButton = (previousSearch) => {

    buttonContainer.innerHTML += (`<button>${previousSearch}</button>`)
}
