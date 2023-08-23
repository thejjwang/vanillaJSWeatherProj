const fetchWeather = async (userInput) => {
    try {
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=66f6758d2dce44048d8180824232206&q=${userInput}`);
    let data = await response.json();
    return data;
    } catch {
    throw new Error("Error fetching data");
    }
    };
    
    
    export { fetchWeather };