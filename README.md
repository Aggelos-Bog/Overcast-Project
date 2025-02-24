# OverCast-Project

---

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acknowledgements](#acknowledgements)

  ---

## Introduction
**Overcast** is a 5-day weather forecast application that allows users to check the weather for any city using data from the [OpenWeatherMap API](https://openweathermap.org/).  

Although OpenWeatherMap provides detailed weather data, I intentionally included only selected information since the project's purpose was not to display every detail. However, anyone is welcome to expand on it and take it to the next level!  

I built this project to:  
- Improve my understanding of **Axios API calls**.  
- Enhance my **portfolio** with a practical weather app.  
- Design a **clean and modern** weather forecast UI.

  ---

## Features
- 🌡️ **Temperature in Celsius** – Displays the temperature in Celsius for any searched city.  
- 🌤️ **Weather Summary** – Provides an overall description of the day's weather (e.g., sunny, rainy, cloudy) with matching **images and emojis**.  
- 🔍 **City Search** – Users can search for any city in **any language**.  
- 📱 **Mobile-Friendly** – The app is fully responsive and works smoothly on mobile devices.

  ---

## Technologies Used
- 🌐 **Frontend:** HTML, CSS, EJS  
- ⚡ **Backend:** Node.js, Express.js  
- 🔗 **API Calls:** Axios  
- 🌍 **External APIs:**  
  - **Geolocation API:** [OpenWeatherMap Geocoding API](http://api.openweathermap.org/geo/1.0/direct)  
  - **Forecast API:** [OpenWeatherMap Forecast API](http://api.openweathermap.org/data/2.5/forecast)  
- 🛠 **Version Control:** Git

  ---

## Installation
### Prerequisites
Before you begin, ensure you have the following installed on your system:  
- [Visual Studio Code (VS Code)](https://code.visualstudio.com/)  
- [Node.js](https://nodejs.org/)  

### Steps to Install and Run
1. **Clone the Repository**  
   ```sh
   git clone https://github.com/Aggelos-Bog/Overcast-Project
2. **Navigate to the Project Directory**
   ```sh
    cd Overcast-Project
3. **Install Dependencies**
   ```sh
    npm install
4. **Run the Server**
   ```sh
    node ./index.js
5. **Open in Browser**
   ```sh
   http://localhost:3000

---

## Usage
- 🌍 **Search Any City** – Enter a city name in **any language** into the input field on the homepage.  
- ✅ **Correct Spelling Required** – Ensure the city name is spelled correctly for the forecast to load properly.  
- 🔄 **Automatic Redirection** – Once you input a valid city, the app redirects you to a new page displaying the **5-day forecast**.  
- 🔑 **API Key** – I have provided my **personal API keys** in the code, but you can replace them with your own for better control.

---

## License
This project is licensed under the **MIT License** – feel free to use, modify, and distribute it as you like.  

For more details, see the **LICENSE** file.  

---

## Acknowledgements

I would like to acknowledge the following resources that contributed to the development of this project:

- [The Complete 2024 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/) by Angela Yu on Udemy: A comprehensive course that provided the foundation for this project.
- [Bootstrap Documentation](https://getbootstrap.com/docs/): Essential for implementing responsive design and styling.
- [EJS Documentation](https://ejs.co/): For understanding and implementing dynamic templating.

Thank you to these incredible resources for making this project possible!

---
