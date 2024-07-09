import React, { useContext, useState } from 'react';
import { MoneyContext } from '../../MoneyContext';
import Keyboard from '../Keyboard/Keyboard';
import Dialog from '../Dialog/Dialog';

const Withdrawing: React.FC = () => {
    const moneyContext = useContext(MoneyContext);
    const [inputValue, setInputValue] = useState<number | string>('');
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    const handleRemoveMoney = () => {
        if(moneyContext?.money !== undefined && (Number(inputValue) > moneyContext?.money)) {
            setIsDialogOpen(true);
            setInputValue('');
            return;
        }
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
            <Dialog isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
        </>
    );
};

export default Withdrawing;
