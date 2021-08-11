import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export type ContextProviderProps = {
    children: React.ReactNode;
};

interface ContextValue {
    value: number;
    set(value: number): void;
}

const MainContext = React.createContext<ContextValue>({
    value: 0,
    set: () => { },
});

const ContextProvider = ({ children }: ContextProviderProps) => {
    const [value, setValue] = useState(0);

    return (
        <MainContext.Provider
            value={{
                value,
                set: setValue,
            }}
        >
            <Header />
            {children}
            <Footer />
        </MainContext.Provider>
    );
};

export default ContextProvider;
