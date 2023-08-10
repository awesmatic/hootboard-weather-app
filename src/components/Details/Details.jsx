import React from 'react'
import './details.css'

const Details = ({ data, setShowDetails, setCity }) => {
    console.log(data)

    if (data) {
        var iconcode = data?.weather[0]?.icon;
        var iconurl = `http://openweathermap.org/img/w/${iconcode}.png`;
        console.log(iconurl)
    }

    const getCityAndCountry = () => {
        let city = data.name;
        let country = data.sys.country

        return `${city} , ${country}`
    }

    const clickHandler = () => {
        setShowDetails(false)
        setCity('')
    }


    return (
        <div className='details'>
            <div className='details-title' onClick={clickHandler}>
                <img id="wicon" src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="Weather icon" />
                <h5>Weather App</h5>
            </div>
            <div className='weather-details'>
                <img id="wicon" src={iconurl} alt="Weather icon" style={{ width: '100px', }} />
                <h2>{Math.round(((data.main.temp - 32) * 5) / 9)}°C</h2>
                <h2>{data?.weather[0]?.description}</h2>
                <h2>{getCityAndCountry()}</h2>
            </div>
            <div className='feels-and-humidity'>
                <div className='feels-like'>
                    <h3>{Math.round(((data.main.feels_like - 32) * 5) / 9)}°C</h3>
                    <h5>Feels like</h5>
                </div>
                <div className='humidity'>
                    <h3>{data.main.humidity}%</h3>
                    <h5>humidity</h5>
                </div>


            </div>
        </div>
    )
}

export default Details