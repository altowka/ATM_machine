// src/MoneyDisplay.tsx
import React, { useContext } from 'react';
import { MoneyContext } from './MoneyContext';

const MoneyDisplay: React.FC = () => {
    const moneyContext = useContext(MoneyContext);

    if (!moneyContext) {
        throw new Error('MoneyDisplay must be used within a MoneyProvider');
    }

    const { money } = moneyContext;

    return (
        <div>
            <h3>Current Money: ${money}</h3>
        </div>
    );
};

export default MoneyDisplay;
