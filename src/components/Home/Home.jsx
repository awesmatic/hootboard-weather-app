import React, { useState } from 'react'
import './home.css'
import Details from '../Details/Details';

const Home = () => {
    const [city, setCity] = useState('')
    const [data, setData] = useState(null)
    const [showDetails, setShowDetails] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

    const apiKey = "617d8906f04300b477be81c1cb5d0bfa";

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`);
            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Authentication error: Invalid API key or not authorized.');
                } else if (response.status === 404) {
                    throw new Error('Invalid City Name ');
                }

            }

            const jsonData = await response.json();
            setData(jsonData);
            setShowDetails(true);
            setErrorMessage('')
        } catch (error) {
            setErrorMessage(error)
            setCity('')
        }
    };
    return (
        <>
            {!showDetails && <div className='home'>
                <div className='title' >
                    <h5>Weather App</h5>
                </div>
                <form onSubmit={handleSubmit} className='form'>
                    <input type="text" name="name" value={city} placeholder='Enter City Name' onChange={(e) => setCity(e.target.value)} />
                    {errorMessage && <div className="error-message">{errorMessage.message}</div>}
                    <button type="submit" value="Submit" > Submit </button>
                </form>
            </div>}
            {showDetails && <Details data={data} setShowDetails={setShowDetails} setCity={setCity} />}
        </>
    )
}

export default Home