import React, { useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer, { RootState } from "../../modules";
import Header from "./Header";
import Footer from "./Footer";

interface ContextProviderProps {
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

declare global {
    interface Window {
        __REDUX_STATE__: RootState;
    }
}

const store = createStore(
    rootReducer,
    window.__REDUX_STATE__,
    composeWithDevTools(),
);

const ContextProvider = ({ children }: ContextProviderProps) => {
    const [value, setValue] = useState(0);

    return (
        <Provider store={store}>
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
        </Provider>
    );
};

export default ContextProvider;
