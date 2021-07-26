import weather from '../Assets/weather.svg';
import Search from './Search';


const Weather = ( { data, isPending, input } ) => {

    return ( 
        <div className="city-weather-page">
            <div className="city-weather d-flex justify-content-center align-items-center text-center py-2">
                        <div className="weather-information d-flex justify-content-center align-items-center text-center py-3">
                            <div className="container weather-ui">
                               <h3>City</h3>
                               <h5 className="mt-3 fw-bold"> { data.name }, { data.sys.country} </h5>
                               <div className="middle">
                                    <div>
                                        <div><i class="bi bi-cloud-fill fs-2"></i></div>
                                        <h1>{ Math.round(  data.main.temp - 273 )} <span className="degree">&#176;</span> C</h1>
                                        <h4>{ data.weather[0].description }</h4>
                                    </div>
                               </div>
                               <h5 className="text-left mt-3 fw-bold">Today</h5>
                               <div className="row mt-3">
                                    <div className="col-sm-4 col-lg-4 col-lg-4">
                                        <div><i class="bi bi-speedometer fs-5"></i></div>
                                        <h6>Pressure</h6>
                                        <h6 className="fw-bold">{data.main.pressure} hPA</h6>
                                    </div>
                                    <div className="col-sm-4 col-lg-4 col-lg-4">
                                        <div><i class="bi bi-wind fs-5"></i></div>
                                        <h6>Wind</h6>
                                        <h6 className="fw-bold">{data.wind.speed} m/s</h6>
                                    </div>
                                    <div className="col-sm-4 col-lg-4 col-lg-4">
                                        <div><i class="bi bi-moisture fs-5"></i></div>
                                        <h6>Humidity</h6>
                                        <h6 className="fw-bold">{data.main.humidity} %</h6>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
     );
}
 
export default Weather;