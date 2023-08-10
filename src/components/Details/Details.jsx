import React from 'react'
import './details.css'
import { countryList } from '../../countryList';

const Details = ({ data, setShowDetails, setCity, setData }) => {


    const getCityAndCountry = () => {
        let city = data.name;
        let country = data.sys.country

        if (countryList[country]) {
            country = countryList[country]
        }

        return `${city} , ${country}`
    }

    const clickHandler = () => {
        setShowDetails(false)
        setCity('')
        setData(null)
    }


    return (
        <div className='details'>
            <div className='details-title' onClick={clickHandler}>
                <svg
                    width="40px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">

                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
                            fill="#42adfd"
                        ></path>
                    </g>
                </svg>
                <h5>Weather App</h5>
            </div>
            <hr />
            <div className='weather-details'>
                <img
                    src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
                    alt={`${data?.weather[0]?.main} icon`}
                />
                <h2 className='tempreture'>{Math.round(((data.main.temp - 32) * 5) / 9)}°C</h2>
                <h2 className='description'>{data?.weather[0]?.description}</h2>
                <div className='city-country'>
                    <svg
                        version="1.0"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        enableBackground="new 0 0 64 64"
                        fill="#000000"
                        height="15px"
                        width="30px"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">

                            <g>

                                <path
                                    fill="#231F20"
                                    d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                                ></path>
                                <path
                                    fill="#231F20"
                                    d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                                ></path>
                                <path
                                    fill="#231F20"
                                    d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                                ></path>
                            </g>
                        </g>
                    </svg>
                    <h2 >{getCityAndCountry()}</h2>
                </div>

            </div>
            <div className='feels-and-humidity'>
                <div className='feels-like'>
                    <div>
                        <svg
                            fill="#42adfd"
                            viewBox="0 0 32 32"
                            id="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            height="30px"
                            width="30px"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">

                                <defs>

                                    <style> </style>
                                </defs>
                                <rect x="26" y="13" width="4" height="2"></rect>
                                <rect
                                    x="23.1214"
                                    y="5.879"
                                    width="3.9999"
                                    height="1.9998"
                                    transform="translate(2.4937 19.7783) rotate(-45)"
                                ></rect>
                                <rect
                                    x="24.1212"
                                    y="19.1214"
                                    width="1.9998"
                                    height="3.9999"
                                    transform="translate(-7.5773 23.9496) rotate(-45)"
                                ></rect>
                                <rect x="17" y="2" width="2" height="4"></rect>
                                <path d="M18,8a6.0365,6.0365,0,0,0-1,.09v2.0518A3.9567,3.9567,0,0,1,18,10a4,4,0,0,1,0,8v2A6,6,0,0,0,18,8Z"></path>
                                <path d="M10,20.1839V7H8V20.1839a3,3,0,1,0,2,0Z"></path>
                                <path d="M9,30A6.9931,6.9931,0,0,1,4,18.1108V7A5,5,0,0,1,14,7V18.1108A6.9931,6.9931,0,0,1,9,30ZM9,4A3.0033,3.0033,0,0,0,6,7V18.9834l-.332.2983a5,5,0,1,0,6.664,0L12,18.9834V7A3.0033,3.0033,0,0,0,9,4Z"></path>
                                <rect
                                    id="_Transparent_Rectangle_"
                                    data-name="<Transparent Rectangle>"
                                    className="cls-1"
                                    width="2"
                                    height="4"
                                ></rect>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <h3>{Math.round(((data.main.feels_like - 32) * 5) / 9)}°C</h3>
                        <h5>Feels like</h5>
                    </div>

                </div>
                <div className='humidity'>
                    <div>
                        <svg
                            height="30px"
                            width="30px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-10.35 -10.35 365.83 365.83"
                            fill="#42adfd"
                            stroke="#42adfd"
                            strokeWidth="15"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="#CCCCCC"
                                strokeWidth="2.76104"
                            ></g>
                            <g id="SVGRepo_iconCarrier">

                                <g>

                                    <path
                                        style={{ fill: "#ffffff" }}
                                        d="M264.25,301.7c-2.45,3.01-5.08,5.91-7.88,8.71c-23.14,23.14-53.47,34.72-83.8,34.72 s-60.66-11.58-83.81-34.72c-22.86-22.86-34.71-53.2-34.71-83.84c0-21.31,5.74-42.77,17.5-61.94l21.16-34.48L172.57,0l31.67,51.62 l24.28,39.56l45.06,73.45C300.18,207.99,295.971,263.03,264.25,301.7z"
                                    ></path>
                                    <path
                                        style={{ fill: "#42adfd" }}
                                        d="M264.25,301.7L92.71,130.15L172.57,0l31.67,51.62l24.28,39.56l45.06,73.45 C300.18,207.99,295.971,263.03,264.25,301.7z"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <h3>{data.main.humidity}%</h3>
                        <h5>humidity</h5>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Details