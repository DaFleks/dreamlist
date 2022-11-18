import './Main.css';
import Tasklist from './Tasklist';
import { useEffect, useRef } from 'react';
import useToggle from '../../hooks/useToggle';

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
                <h6>INBOX</h6>
                {isLoaded && <Tasklist />}
            </div>
            <div className="Main-overlay"></div>
        </main>
    )
}

export default Main;