import './Header.css';
import Menu from './Menu';
import Title from './Title';
import Stats from './Stats';
import Progress from './Progress';
import CurrentDate from './CurrentDate';

const Header = (props) => {
    return (
        <header className="Header">
            <div className="Header-wrapper">
                <Menu />
                <div className="center-wrapper">
                    <Title first="Your" second="Things" />
                    <Stats />
                </div>
                <div className="bottom-wrapper">
                    <CurrentDate />
                    <Progress />
                </div>
            </div>
            <div className="overlay"></div>
            <div className="bottom-line"></div>
        </header>
    )
}

export default Header;