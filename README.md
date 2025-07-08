🌦️ React Weather App
A responsive and visually engaging weather forecast application built with React, Bootstrap, and the OpenWeatherMap API. Users can search for any city and instantly view real-time weather data including temperature, humidity, visibility, wind speed, and more — along with a live clock, greeting message, and animated UI cards.

![Weather App Preview](/image.png)


🚀 Features
🔍 Search by City — Enter any city name to get live weather updates.

🕒 Live Clock — Shows current time and date using setInterval.

🌤️ Dynamic Greetings & Icons — Displays morning/afternoon/evening greeting and switches weather icons based on time.

🌡️ Weather Details — Includes:

Temperature

Feels like

Wind speed

Humidity

Pressure

Min/Max temperature

Visibility

Sky description

🧊 Responsive Card Layout — Built with Bootstrap and custom CSS animations.

📦 Context API — Used to manage city input between components.

🛠️ Tech Stack
React (Functional Components + Hooks)

Bootstrap Icons

OpenWeatherMap API

Axios

Custom CSS for animations and gradients

📦 Installation & Setup
bash
Copy
Edit
# 1. Clone the repo
git clone https://github.com/<your-username>/<repo-name>.git

# 2. Navigate to the project folder
cd weather-app

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
Then open http://localhost:5174 in your browser.

🌐 API Used
OpenWeatherMap API

Add your API key in the Axios URL:

js
Copy
Edit
https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=YOUR_API_KEY&units=metric
🖼️ UI Preview
(You can embed screenshots here — either from local /public or hosted image URLs)

📁 Folder Structure (Simplified)
css
Copy
Edit
src/
│
├── components/
│   └── WeatherApp.jsx
│   └── WeatherAppMain.jsx
│
├── styles/
│   └── weather-app.css
│
├── App.jsx
└── main.jsx
📌 Deployment (Optional for GitHub Pages)
If deploying to GitHub Pages, add this in vite.config.js:

js
Copy
Edit
export default defineConfig({
  base: "/Weather-App/", // Replace with your repo name
  ...
});
Then build and deploy:

bash
Copy
Edit
npm run build

👨‍💻 Author
Sachin Parashetti


📃 License
This project is licensed under the MIT License — free to use, modify, and distribute.
