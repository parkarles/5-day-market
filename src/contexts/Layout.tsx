import React, { Component, useEffect, useReducer } from "react";

import { themes } from "../lib/styles/themes";
import { Store } from "./index";
import { initContext, initReducer } from "./default";

import Header from "../components/Header";

export type ContextProviderProps = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(initReducer, initContext);
  const value = { state, dispatch };

  // const resize = () => {
  //   dispatch({
  //     type: "isSM",
  //     payload: Number(window.innerWidth) <= Number(breakPoint.lg),
  //   });
  //   dispatch({
  //     type: "isXS",
  //     payload: Number(window.innerWidth) <= Number(breakPoint.sm),
  //   });
  // };

  return (
    <Store.Provider
      value={value}
    >
      <Header />
      {children}
      {/* <Header isXS={state.isXS} dispatch={dispatch} router={router} isLogin={state.isLogin} userInfo={state.userInfo} />
        <Footer isXS={state.isXS} dispatch={dispatch} router={router} userInfo={state.userInfo} />
        <Login isXS={state.isXS} openLoginPopup={state.openLoginPopup} dispatch={dispatch} />
        <Alert isXS={state.isXS} isAlert={state.isAlert} dispatch={dispatch} />
        <Loading isXS={state.isXS} isLoading={state.isLoading} dispatch={dispatch} />
        <Menu isXS={state.isXS} router={router} openMenu={state.openMenu} isLogin={state.isLogin} dispatch={dispatch} inquiryUrl={state.inquiryUrl} /> */}
    </Store.Provider>
  );
};

export default ContextProvider;
