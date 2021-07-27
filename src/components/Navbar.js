import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory()

    const defaultPage = () => {
        let path = '/'
        history.push(path)
    }

    return (
            <div className="navbar text-left py-3 px-3">
                <h5 onClick={defaultPage}>the.weather</h5>
            </div>   
     );
}
 
export default Navbar;