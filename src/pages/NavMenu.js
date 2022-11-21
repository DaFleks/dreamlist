import './NavMenu.css';
import { useNavContext } from '../context/NavContext';
import { Link } from 'react-router-dom';

const NavMenu = (props) => {
    const { navMenu, navMenuToggler } = useNavContext();
    return (
        <div className={`NavMenu ${navMenu ? `show` : `hide`}`}>
            <nav>
                <i onClick={navMenuToggler} className="fa-solid fa-xmark fa-2x"></i>
            </nav>
            <div className="NavMenu-list">
                <ul>
                    <li>
                        <Link to='/'><h2>Your Things</h2></Link>
                    </li>
                    <li>
                        <Link to='/weather'><h2>Weather</h2></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}



export default NavMenu;