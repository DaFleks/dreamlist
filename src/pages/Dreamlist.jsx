import './Dreamlist.css';
import Header from '../components/Dreamlist/Header/Header';
import Main from '../components/Dreamlist/Main/Main';
import Footer from '../components/Dreamlist/Footer/Footer';

const Dreamlist = (props) => {
    return (
        <div className="Dreamlist">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Dreamlist;