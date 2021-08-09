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
  set: () => {},
});

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [value, setValue] = useState(0);

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
    <MainContext.Provider
      value={{
        value,
        set: setValue,
      }}
    >
      <Header />
      {children}
      <Footer />
      {/*   <Footer isXS={state.isXS} dispatch={dispatch} router={router} userInfo={state.userInfo} />
        <Login isXS={state.isXS} openLoginPopup={state.openLoginPopup} dispatch={dispatch} />
        <Alert isXS={state.isXS} isAlert={state.isAlert} dispatch={dispatch} />
        <Loading isXS={state.isXS} isLoading={state.isLoading} dispatch={dispatch} />
        <Menu isXS={state.isXS} router={router} openMenu={state.openMenu} isLogin={state.isLogin} dispatch={dispatch} inquiryUrl={state.inquiryUrl} /> */}
    </MainContext.Provider>
  );
};

export default ContextProvider;
