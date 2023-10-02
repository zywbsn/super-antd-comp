import React from "react";
import Layouts from "./Layouts/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login/index";
import MenuList from "./utils/GetRoutesList";
import { ConfigProvider } from 'antd';
import { darkTheme, lightTheme } from "./theme";


export default () => {
  const Dark = JSON.parse(window.localStorage.getItem("useDark"));
  return (
    <>
      <ConfigProvider
        theme={Dark ? darkTheme() : lightTheme()}
      >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/Layout' element={<Layouts />}>
              {MenuList.map((item) => {
                if (item.component) return <Route key={item.path} path={item.path} element={<item.component />} />;
              })}
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}
