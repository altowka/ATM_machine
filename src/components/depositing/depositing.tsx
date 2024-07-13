import { useContext, useState } from 'react';
import { MoneyContext } from '../../MoneyContext';
import Keyboard from '../Keyboard/Keyboard';
import ActionButton from '../ActionButton/ActionButton';

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
            <ActionButton handleClick={handleAddMoney} message='Add Money'/>
            <Keyboard inputValue={inputValue} setInputValue={setInputValue} />
        </>
    )
}

export default Despositing;