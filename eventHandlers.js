import { fetchWeather } from './weatherAPI.js';
import { displayWeather, displayButton } from './UI.js';


let searchBtn = document.getElementById('searchBtn');
let userInput = document.getElementById('userInput');
let buttonContainer = document.getElementById('buttonContainer');
let display = document.getElementById('weather_wrapper');
let temp = document.getElementById('temp');
let city = document.getElementById('city');
let wind = document.getElementById('wind');
let precipitation = document.getElementById('precipitation');


const searchWeather = async () => {
try {
const data = await fetchWeather(userInput.value);
displayWeather(data);
displayButton(userInput.value);
} catch {
console.log("Error fetching data");
}
};


searchBtn.addEventListener("click", searchWeather);


buttonContainer.addEventListener('click', async (event) => {
if (event.target.classList.contains('btn2')) {
const location = event.target.textContent;
try {
const data = await fetchWeather(location);
displayWeather(data);
} catch {
console.log("Error fetching data for selected location");
}
}
});


export { searchWeather, searchBtn };
