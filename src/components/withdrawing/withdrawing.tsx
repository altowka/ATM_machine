import React, { useContext, useState } from 'react';
import { MoneyContext } from '../../MoneyContext';
import Keyboard from '../Keyboard/Keyboard';


const Withdrawing: React.FC = () => {
    const moneyContext = useContext(MoneyContext);
    const [inputValue, setInputValue] = useState<number | string>('');

    const handleRemoveMoney = () => {
        if (moneyContext && inputValue !== '') {
            moneyContext.removeMoney(Number(inputValue));
            setInputValue(''); // Clear the input after removing money
        }
    };

    return (
        <>
            <h1>Withdrawing</h1>
            <button onClick={handleRemoveMoney}>Get money</button>
            <Keyboard inputValue={inputValue} setInputValue={setInputValue} />
        </>
    );
};

export default Withdrawing;
