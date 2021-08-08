import React from "react";

interface Alert {
  title: string;
  content: string;
}

interface ContextProps {
  isSM: boolean;
  isXS: boolean;
  isLoading: boolean;
  alert: Alert;
}

interface IDispatcher {
  type: string;
  payload: unknown;
  isSave?: boolean;
}

const initContext = {
  isSM: false,
  isXS: false,
  menu: 'MAGAZINE',
  isLoading: false,
  alert: { title: "", content: "" },
};

function initReducer(
  state: ContextProps,
  { type, payload, isSave }: IDispatcher
) {
  const newReducer = {
    ...state,
    [type]: payload,
  };
  // console.log(type, payload);
  if (isSave) window.localStorage.setItem(type, JSON.stringify(payload));

  return newReducer;
}

export { initContext, initReducer };
