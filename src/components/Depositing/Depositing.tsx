import { useContext, useState } from 'react';
import { MoneyContext } from '../../MoneyContext';
import Keyboard from '../Keyboard/Keyboard';
import ActionButton from '../ActionButton/ActionButton';

const Depositing = () => {
  const moneyContext = useContext(MoneyContext);
  const [inputValue, setInputValue] = useState<number | string>('');

  const handleAddMoney = () => {
    if (moneyContext && inputValue !== '') {
      moneyContext.addMoney(Number(inputValue));
      setInputValue('');
    }
  };
  return (
    <>
      <h1>Depositing</h1>
      <ActionButton handleClick={handleAddMoney} message="Deposite Money" />
      <Keyboard inputValue={inputValue} setInputValue={setInputValue} />
    </>
  );
};

export default Depositing;
