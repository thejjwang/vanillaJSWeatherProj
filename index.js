// have user input for location and click a button to enter
// fetch data from api and grab specific data based on location
// display weather and create a button based on each user input
// weather display going to be like a grid of different sizes with 
// different weather information in each box in the grid
// have a column of buttons which the innerhtml will be the location


const searchWeather = () => {
    try { 
        fetchData();
        createButton();
    } catch {
        console.log("fetch data error");
    }

}
searchBtn.addEventListener("click", searchWeather);

const createButton = (previousSearch) => {

    buttonContainer.innerHTML += (`<button id={userInput.value}>${userInput.value}</button>`)
}
// for each button in button container need to add event listeners to direct them to that locations weathers
buttonContainer.addEventListener('click', )
