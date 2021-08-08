import React, { Dispatch } from "react";

type Alert = {
    title: string;
    content: string;
}

interface State {
    isSM: boolean;
    isXS: boolean;
    isLoading: boolean;
    alert: Alert;
}

interface SetContextProps {
    type: string;
    payload: unknown;
    isSave?: boolean;
}


type Action =
    | { type: "SET_SIZE_SM"; isSM: boolean }
    | { type: "SET_SIZE_XS"; isSM: boolean }
    | { type: "SET_LOADING"; isLoading: boolean }
    | { type: "SET_ALERT"; alert: Alert };

// 리듀서
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_SIZE_SM":
            return {
                ...state,
                isSM: action.isSM // count가 자동완성되며, number 타입인걸 알 수 있습니다.
            };
        case "SET_SIZE_XS":
            return {
                ...state,
                isSM: action.isSM // text가 자동완성되며, string 타입인걸 알 수 있습니다.
            };
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.isLoading // color 가 자동완성되며 color 가 Color 타입인걸 알 수 있습니다.
            };
        default:
            throw new Error("Unhandled action");
    }
}

interface IDispatcher {
    type: string;
    payload: unknown;
    isSave?: boolean;
}

interface IContextProps {
    state: State;
    dispatch: ({ type, payload, isSave}: IDispatcher) => void;
}


export const Store = React.createContext({} as IContextProps);