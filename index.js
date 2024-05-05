import axios from "axios";

var city = "Tokyo";
var lati;
var long;
const APIkey = "2c7acf854fe34bfaba9161055241501";

var flag = true;
console.log(city);
try {
    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=44d9ce63fa808019b9c9a311f6649676`);
    console.log(response.data);
    lati = response.data[0].lat;
    long = response.data[0].lon;
} catch(error) {
    flag = false;
    console.log("Failed to connect to server:", error.message);
}
if (flag === true) {
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${lati},${long}`);
        console.log(response.data); 
    } catch(error) {
        console.log("Failed to connect:", error.message);
    }
}