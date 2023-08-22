const fetchData = async () => {
    try {
        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=66f6758d2dce44048d8180824232206&q=${userInput.value}`);
        let data = await response.json();
        temp.innerHTML = data.current.temp_f + "&deg;";
        city.innerHTML = data.location.name;
        wind.innerHTML = data.current.wind_mph + " MPH";
        precipitation.innerHTML = data.current.precip_mm + " MM";
        // if (data.location.localtime)
        console.log(data);
    } catch {
        console.log("error fetching data")
    }
}

