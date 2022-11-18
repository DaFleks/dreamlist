import './Dreamlist.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import TasksProvider from '../context/TasksContext';

const Dreamlist = (props) => {
    return (
        <TasksProvider>
            <div className="Dreamlist">
                <Header />
                <Main />
                <Footer />
            </div>
        </TasksProvider>
    )
}

export default Dreamlist;