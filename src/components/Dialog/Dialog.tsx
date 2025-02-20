import React, { useContext } from 'react';
import { MoneyContext } from '../../MoneyContext';
import './style.css';

interface DialogProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (value: boolean) => void;
}

const Dialog: React.FC<DialogProps> = ({ isDialogOpen, setIsDialogOpen }) => {
  const moneyContext = useContext(MoneyContext);

  return (
    <dialog className="dialog" open={isDialogOpen}>
      <div className="dialog-content">
        <p>You can't get more money than ${moneyContext?.money}</p>
        <button onClick={() => setIsDialogOpen(false)}>I understand</button>
      </div>
    </dialog>
  );
};

export default Dialog;
