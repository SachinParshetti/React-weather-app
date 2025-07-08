import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import "../Weather-app/weather-app.css"

let cityContext = createContext(null);
export function WeatherAppMain() {
    let cityName = useContext(cityContext)

    const [weatherData, setWeatherdata] = useState({ name: "", main: { temp: 0, feels_like: 0, humidity: 0, temp_min: 0, temp_max: 0, visibility: 0, pressure: 0 }, weather: [{ description: "" }], wind: { speed: 0 } });

    const [clock, setClock] = useState()
    const [day, setDay] = useState()
    const [hours, setHours] = useState()
    const [greetings, setGreetings] = useState('')
    function time() {
        let option = {
            weekday: "long",
            month: "short",
            year: "numeric",
            day: "numeric"
        }
        let date = new Date();
        let currenthour = date.getHours()
        setDay(date.toLocaleDateString("en-IN", option))
        setClock(date.toLocaleTimeString())
        setHours(currenthour)

        currenthour >= 0 && currenthour < 12 ? setGreetings("Good Morning !") : currenthour >= 12 && currenthour <= 17 ? setGreetings('Good Afternoon') : setGreetings("Good Evening")

    }




    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f665cf1a2aebe7c5c7c635e95e775760&units=metric`)
            .then((response) => {
                setWeatherdata(response.data)
                console.log("weatherData: ", response.data)
            })
            .catch((error) => {
                console.error("errors are :", error)
            })

        setInterval(time, 1000)

    }, [cityName])



    return (
        <>
            <div className="w-100 ">
                <div className="fs-4" style={{ fontFamily: 'roboto' }}>
                    <div className="d-flex justify-content-center align-items-center flex-wrap ">
                        <div className="card w-100 bg-white border-0">
                            <div className=" text-center h-1">
                                <h1 className="display-6 text-center fw-bold">
                                    {weatherData.name}
                                </h1>
                                <p className="fs-5 fw-bold text-muted">{day}</p>
                                <p className="fs-5 fw-bold text-muted">{clock}</p>
                                <p className="fs-4 fw-bold">{greetings}</p>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">

                                 {
                                  hours > 0 && hours <= 20 ? <i className="bi bi-cloud-sun-fill text-warning " style={{fontSize:"60px"}}></i>:<i className="bi bi-cloud-moon-fill" style={{fontSize:"60px"}}></i>

                                 }
                            </div>
                            
                <div className="">
                 <div className="row m-2 gap-2">
                     <div className="col ">
                    <div className="data-card p-3 bg-light rounded-3 text-center">
                      <p className="fs-3 fw-bold mb-0">  {Math.round(weatherData.main.temp)}°C <i className="bi bi-thermometer-high " /></p>
                      <p className="fs-5 text-muted">Temperature </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="data-card p-3 bg-light rounded-3 text-center">
                      <p className="fs-3 fw-bold mb-0">{weatherData.main.feels_like}°C <i className="bi bi-thermometer-high " /></p>
                      <p className="fs-5 text-muted">Feels Like</p>
                    </div>
                  </div>
                 </div>
                  <div className="row m-2 gap- d-flex justify-content-center align-items-center flex-wrap"> 
                        <div className="col">
                    <div className="data-card p-3 bg-light rounded-3 text-center">
                      <p className="fs-3 fw-bold mb-0">
                        {weatherData.wind.speed.toLocaleString("en-in", { style: "unit", unit: "kilometer-per-hour" })} <i className="bi bi-wind" />
                      </p>
                      <p className="fs-5 text-muted">Wind Speed</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="data-card p-3 bg-light rounded-3 text-center">
                      <p className="fs-3 fw-bold mb-0">{weatherData.main.humidity}% <i className="bi bi-moisture" /></p>
                      <p className="fs-5 text-muted">Humidity</p>
                    </div>
                  </div>
                  </div>
                  
                  <div className="row mt-5 mx-2 gap-2">
                       <div className="col">
                    <div className="data-card p-3 bg-light rounded-3 text-center">
                      <p className="fs-3 fw-bold mb-0">{weatherData.main.temp_min}°C <i className="bi bi-thermometer-half " /></p>
                      <p className="fs-5 text-muted">Min Temp </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="data-card p-3 bg-light rounded-3 text-center">
                      <p className="fs-3 fw-bold mb-0">{weatherData.main.temp_max}°C <i className="bi bi-thermometer-high " /></p>
                      <p className="fs-5 text-muted">Max Temp</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="data-card p-3 bg-light rounded-3 text-center">
                      <p className="fs-3 fw-bold mb-0">{weatherData.main.pressure} hPa <i className="bi bi-water " /></p>
                      <p className="fs-5 text-muted">Pressure</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="data-card p-3 bg-light rounded-3 text-center">
                      <p className="fs-3 fw-bold mb-0">{(weatherData.visibility / 1000).toFixed(1)} km <i className="bi bi-cloud-fog2 " /></p>
                      <p className="fs-5 text-muted">Visibility</p>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="fs-4 fw-medium text-capitalize">{weatherData.weather[0]?.description || "N/A"}</p>
                  <p className="fs-5 ">Sky Description</p>
                </div>
              </div>
                  </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export function WeatherApp() {
    let [citySearched, setCitysearched] = useState('')
    let [contextValue, setContextvalue] = useState('hyderabad')
    function handleCityChange(e) {
        setCitysearched(e.target.value);
    }
    function handleSearchClick() {
        setContextvalue(citySearched)
    }

    return (
        <>


            <h3 className="text-center ">Weather App</h3>
            <header className=" w-100 ">
                <div className="w-100 d-flex justify-content-center align-items-center">
                    <div className="input-group " style={{ width: "79%" }}>
                        <input type="text" placeholder="Search-City" className="form-control " onChange={handleCityChange} /> <button className="btn" onClick={handleSearchClick} style={{ background: "linear-gradient(to right, #f2709c, #ff9472)" }}><i className="bi bi-search "></i></button>
                    </div>
                </div>

            </header>

            <div className="d-flex justify-content-center align-items-center p-0  overflow-auto">
                <div className="p-2 rounded rounded-4 main-container " >

                    <div style={{ backgroundColor: "whitesmoke" }} className=" card w-100 h-100 rounded rounded-2 weather-card" >

                        <main className=""> 
                            <cityContext.Provider value={contextValue}>

                                <WeatherAppMain />

                            </cityContext.Provider>

                        </main>

                    </div>
                </div>
            </div>


        </>
    )

}
