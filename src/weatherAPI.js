const fetchData = async () => {
    try {
        let response = await fetch("");
        let data = response.json();

    } catch {
        console.log("error fetching data")
    }
}

