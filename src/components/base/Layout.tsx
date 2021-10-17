import React, { useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer, { RootState } from "../../modules";
import Header from "./Header";
import Footer from "./Footer";

const isBrowser = typeof window !== "undefined";
const isMobile = isBrowser ? window.matchMedia("only screen and (max-width: 760px)").matches : true;

let store = createStore(
    rootReducer,
    composeWithDevTools(),
);

if (isBrowser) {
    document.cookie = "cross-site-cookie=bar; SameSite=None; Secure";
    store = createStore(
        rootReducer,
        window.__REDUX_STATE__,
        composeWithDevTools(),
    );
}

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
