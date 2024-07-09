// src/MoneyContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface MoneyContextProps {
    money: number;
    addMoney: (amount: number) => void;
    removeMoney: (amount: number) => void;
}

export const MoneyContext = createContext<MoneyContextProps | undefined>(undefined);

interface MoneyProviderProps {
    children: ReactNode;
}

export const MoneyProvider: React.FC<MoneyProviderProps> = ({ children }) => {
    const [money, setMoney] = useState<number>(1000);

    const addMoney = (amount: number) => {
        setMoney(prevMoney => prevMoney + amount);
    };

    const removeMoney = (amount: number) => {
        setMoney(prevMoney => prevMoney - amount);
    };

    return (
        <MoneyContext.Provider value={{ money, addMoney, removeMoney }}>
            {children}
        </MoneyContext.Provider>
    );
};
