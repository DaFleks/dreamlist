import { useState } from 'react';

const useInput = (input) => {
    const [value, setValue] = useState('');

    const inputEl = <input
        type="text"
        id={input.name}
        name={input.name}
        value={value}
        placeholder={input.placeholder}
        onChange={(e) => setValue(e.target.value)}
    />
    
    return [inputEl, value];
}

export default useInput;