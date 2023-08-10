import React, { useState } from 'react'
import './home.css'
import Details from '../Details/Details';

const Home = () => {
    const [city, setCity] = useState('')
    const [data, setData] = useState(null)
    const [location, setLocation] = useState({});
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
    const getLocationhandler = async () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
        });
        if (Object.keys(location).length > 0) {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}
                `);
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
            }
        }
    };


    return (
        <>
            {!showDetails && <div className='home'>

                <h1 className='title'>Weather App</h1>
                <hr />

                <div className='input-details'>
                    <form onSubmit={handleSubmit} className='form'>
                        <input className="search" type="text" name="name" value={city} placeholder='Enter City Name' onChange={(e) => setCity(e.target.value)} />
                        {errorMessage && <div className="error-message">{errorMessage.message}</div>}
                    </form>
                    <div className="or">
                        <hr className="line" />
                        <p style={{ padding: "0 10px", margin: "0.5em 0" }}>or</p>
                        <hr className="line" />
                    </div>
                    <button className="btn" type="submit" onClick={getLocationhandler}>
                        Get device location
                    </button>
                </div>
            </div>}
            {showDetails && <Details data={data} setData={setData} setShowDetails={setShowDetails} setCity={setCity} />}
        </>
    )
}

export default Home