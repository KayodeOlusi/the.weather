import landingimage from '../Assets/landingimage.svg'
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="wrapper">
            <div className="home d-flex justify-content-center align-items-center">
                <div className="row container">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center mt-3">
                        <img className="landing-image img-responsive" src={landingimage} alt="hi" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex mt-3 justify-content-center align-items-center text-center landing-page-texts">
                        <div>
                            <h4>Welcome!</h4>
                            <Link to="/search">
                                <button className="btn px-5 py-2">See today's forecast</button>
                            </Link>
                            <div className="mt-3 py-3 landing-text">
                                <h4>Access current weather data for any location you want. Click the button to get current weather around the World!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;