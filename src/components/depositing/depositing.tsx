import React, { useContext, useState } from 'react';
import { MoneyContext } from '../../MoneyContext';
import Keyboard from '../Keyboard/Keyboard';

const Despositing = () => {
    const moneyContext = useContext(MoneyContext);
    const [inputValue, setInputValue] = useState<number | string>('');

    const handleAddMoney = () => {
        if (moneyContext && inputValue !== '') {
            moneyContext.addMoney(Number(inputValue));
            setInputValue(''); // Clear the input after removing money
        }
    };
    return (
        <>
            <h1>Despositing</h1>
            <button onClick={handleAddMoney}>Add Money</button>
            <Keyboard inputValue={inputValue} setInputValue={setInputValue} />
        </>
    )
}

export default Despositing;