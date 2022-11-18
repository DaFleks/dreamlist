import { useState } from 'react';

const useToggle = (initialVal) => {
    const [toggle, setToggle] = useState(initialVal);

    const toggler = () => {
        setToggle(!toggle);
    }

    return [toggle, toggler, setToggle];
}

export default useToggle;