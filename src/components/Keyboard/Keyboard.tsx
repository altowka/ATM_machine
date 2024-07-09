import React, { ChangeEvent } from 'react';

interface KeyboardProps {
    inputValue: number | string;
    setInputValue: (value: number | string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ inputValue, setInputValue }) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value === '' || !isNaN(Number(value))) {
            setInputValue(value);
        }
    };

    const handleButtonClick = (num: number) => {
        // @ts-expect-error
        setInputValue((prev: string | number) => {
            if (typeof prev === 'string' && prev === '') {
                return String(num);
            } else {
                return String(prev) + String(num);
            }
        });
    };


    
    

    return (
        <>
            <input 
                type="number" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Enter amount" 
            />
            {numbers.map((value: number) => (
                <button key={value} onClick={() => handleButtonClick(value)}>{value}</button>
            ))}
            <button onClick={() => setInputValue('')}>clear</button>
        </>
    );
};

export default Keyboard;
