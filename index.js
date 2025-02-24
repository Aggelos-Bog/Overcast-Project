import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
// Cordinates API
const API_URL_GEO = "http://api.openweathermap.org/geo/1.0/direct";
// Weather API
const API_URL = "http://api.openweathermap.org/data/2.5/forecast";
// API keys
const appidGeo = "692216e979c3b9257f7e395be999cdac";
const appidForecast = "0200acc4e703852e9bf457e3db3aa65f";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {content: "BOG"});
})
app.get("/test", (req, res) => {
    res.render("test.ejs");
})

app.post("/postCords", async (req, res) => {
    const location = req.body["city"];  // Selected city

    try {
        // Getting the coordinates of the city
        const result = await axios.get(
            API_URL_GEO + "?q=" + location + "&limit=1" + "&appid=" + appidGeo
        );


        const parsedContent = result.data;
        const lat = parsedContent[0].lat;
        const lon = parsedContent[0].lon;

        let parsedContentForecast;

        try {
            const resultForecast = await axios.get(
                API_URL + "?lat=" + lat + "&lon=" + lon + "&appid=" + appidForecast
            );

            parsedContentForecast = resultForecast.data; // Use the data directly
            
            // Render the weather.ejs with the forecast data and city name
            res.render("weather.ejs", { weatherData: parsedContentForecast.list, cityName: location });
        } catch (forecastError) {
            // Handle forecast API error
            console.error("Forecast API error:", forecastError);
            res.render("index.ejs", { content: { error: "Failed to fetch forecast data." } });
        }
    } catch (error) {
        // Handle geocoding API error
        const errorMessage = error.response ? JSON.stringify(error.response.data) : "An error occurred";
        res.render("index.ejs", { content: errorMessage });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});