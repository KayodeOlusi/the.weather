import { useState, useContext, useEffect } from "react";
import search from '../Assets/search.svg'
import Weather from './Weather';
import { WeatherContext } from '../contexts/WeatherContext'


const Search = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [input, setInput] = useState('');
    const key = 'b881663edbd92cf6c5488d9a8ae86edb';
    var the_api = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`

    // Use the useContext hook
    // const weather = useContext(WeatherContext)
    const { weatherValue } = useContext(WeatherContext)
    useEffect(() => {
        // console.log weather value
        console.log('weather value', weatherValue)
    }, [weatherValue])

    const handleClick = (e) => {
        e.preventDefault();
        setIsPending(true)
        fetch(the_api)
        .then( (res) => {
            if (!res.ok) {
                throw Error(`Oops...can't access weather data for this city...try checking for another city`)
            }else{
                return res.json()
            }
        })
        .then( (data) => {
            setIsPending(false)
            setError(null)
            setData(data)
            console.log(data)
        })
        .catch( (error) => {
            setError(error.message)
            setIsPending(false)
        })

         }

    return ( 
        <div className="search-page">
            <div className="search-field d-flex justify-content-center align-items-center text-center">
                <div className="row container">
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center text-center mt-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 mt-2">
                                   <img src={search} alt=""  className="Search-image"/>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12 mt-2">
                                <form className="py-5 px-5 w-100">
                                    <div className="lead">Search for a city</div>
                                    <input type="text" className="w-100" onChange = { (e) => { setInput(e.target.value) } } /><br></br>
                                    <button className="btn btn-block search-button px-5 py-2" onClick={handleClick}>Search</button>
                                </form>
                            </div>
                        </div>         
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                            { error && <div> { error } </div>}
                            {isPending && <div>Loading...</div>}
                            {data && <Weather data={data} /> }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Search;