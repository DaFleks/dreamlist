import { useState, createContext, useContext } from 'react';
import useToggle from '../hooks/useToggle';

export const NavContext = createContext();

export const useNavContext = () => {
    return useContext(NavContext);
}

const NavProvider = (props) => {
    const [navMenu, navMenuToggler] = useToggle(false);

    return (
        <NavContext.Provider value={{ navMenu, navMenuToggler }}>
            {props.children}
        </NavContext.Provider>
    )
}

export default NavProvider;