import './Main.css';
import Tasklist from './Tasklist';
import { useEffect, useRef } from 'react';
import useToggle from '../../../hooks/useToggle';

const Main = () => {
    const mainRef = useRef();
    const [isLoaded, isLoadedToggler] = useToggle(false);

    useEffect(() => {
        setTimeout(() => {
            if (!isLoaded) {
                mainRef.current.style.maxHeight = mainRef.current.clientHeight + 'px';
                isLoadedToggler();
            }
        }, 1000)
    }, [isLoaded, isLoadedToggler])
    return (
        <main className="Main">
            <div ref={mainRef} className="Main-wrap">
                <h5>INBOX</h5>
                {isLoaded ?
                    <Tasklist /> :
                    <div className="loader">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/afb8cb36197347.5713616457ee5.gif" alt="Main" />
                    </div>}
            </div>
            <div className="Main-overlay"></div>
        </main>
    )
}

export default Main;