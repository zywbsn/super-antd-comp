import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  Html5TwoTone
} from "@ant-design/icons";
import { ConfigProvider, Layout, Menu, Button, theme, Switch } from "antd";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import menus from "../utils/GetMenusList";
import { darkTheme, lightTheme } from "../theme";
import colorSvg from "./colorSvg";




const { Header, Sider, Content } = Layout;
const randomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const Layouts = () => {

  const Navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [useDark, setUseDark] = useState(JSON.parse(window.localStorage.getItem("useDark")));
  const colorConfig = JSON.parse(window.localStorage.getItem("colorConfig")) || {};

  let {
    colorError = "#ff4d4f",
    colorInfo = "#1677ff",
    colorLink = "#1677ff",
    colorPrimary,
    colorSuccess = !useDark ? "#52c41a" : "#13c2c2",
    colorTextBase = "#000",
    colorWarning = "#faad14"
  } = colorConfig;

  const [darkColor, setDarkColor] = useState(darkTheme(colorError, colorInfo, colorLink, colorPrimary, colorSuccess, colorTextBase, colorWarning));
  const [lightColor, setLightColor] = useState(lightTheme(colorError, colorInfo, colorLink, colorPrimary, colorSuccess, colorTextBase, colorWarning));
  useDark ? darkColor : lightColor;
  const { token } = theme.useToken();
  const [tokenConfig, setTokenConfig] = useState(token);

  const onSelectMenu = ({ key }) => {
    Navigate(key);
  };

  const changeTheme = () => {
    setUseDark(!useDark);
    window.localStorage.setItem("useDark", !useDark);
    const color = useDark ? lightTheme() : darkTheme();
    useDark ? setTokenConfig(color.token) : setTokenConfig(color.token);
  };

  const getColor = (key) => {
    return tokenConfig[key];
  };

  const clearColor = () => {
    window.localStorage.setItem("colorConfig", JSON.stringify({}));
    useDark ? setDarkColor(darkTheme()) : setLightColor(lightTheme());
  };

  const onChangeColor = () => {
    colorError = randomColor();
    colorInfo = randomColor();
    colorLink = randomColor();
    colorPrimary = randomColor();
    colorSuccess = randomColor();
    colorTextBase = randomColor();
    colorWarning = randomColor();
    const colorConfig = {
      colorError,
      colorInfo,
      colorLink,
      colorPrimary,
      colorSuccess,
      colorTextBase,
      colorWarning
    };
    window.localStorage.setItem("colorConfig", JSON.stringify(colorConfig));
    useDark ?
      setDarkColor(darkTheme(colorError, colorInfo, colorLink, colorPrimary, colorSuccess, colorTextBase, colorWarning))
      :
      setLightColor(lightTheme(colorError, colorInfo, colorLink, colorPrimary, colorSuccess, colorTextBase, colorWarning));
  };

  return (
    <>
      <ConfigProvider
        theme={useDark ? darkColor : lightColor}
      >
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div style={{ background: getColor("colorBgContainer") }} className="w-full h-16 flex items-center justify-center">
              <Html5TwoTone twoToneColor="#A6ADB4" className="!text-3xl mr-1" />
              <span className={collapsed ? "hidden" : "text-lg font-bold"} style={{ color: getColor("colorTextBase") }} >React 后台管理系统</span>
            </div>
            <Menu
              theme='light'
              mode='inline'
              className="h-[calc(100vh-64px)] overflow-auto"
              defaultSelectedKeys={["1"]}
              items={menus}
              onClick={onSelectMenu}
            />
          </Sider>
          <Layout style={{ background: getColor("colorBgBase") }}>
            <Header
              style={{
                padding: 0,
                background: getColor("colorBgContainer")
              }}
              className="flex w-full"
            >
              <Button
                type='text'
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64
                }}
              />
              <div className="ml-auto mr-6 flex items-center">
                <Button
                  type='text'
                  onClick={onChangeColor}
                  style={{
                    fontSize: "16px",
                    height: "auto",
                    margin: 0,
                    padding: 5
                  }}
                >
                  <svg
                    t="1696172132104" viewBox="0 0 1024 1024"
                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1499"
                    width="30" height="30"
                  >
                    <path d={colorSvg} fill={getColor("colorPrimary")} p-id="1500" />
                  </svg>
                </Button>
                <Button
                  type='text'
                  onClick={clearColor}
                  style={{
                    fontSize: "16px",
                    height: "auto",
                    margin: 0,
                    padding: 5
                  }}
                  className="!mr-3"
                >
                  <span
                    style={{ backgroundColor: getColor("colorPrimary") }}
                    className="fixed w-[2px] h-[33px] [transform:rotate(50deg)] ml-[14px]"
                  />
                  <svg
                    t="1696172132104" viewBox="0 0 1024 1024"
                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1499"
                    width="30" height="30"
                  >
                    <path d={colorSvg} fill={colorPrimary} p-id="1500" />
                  </svg>
                </Button>
                <Switch
                  checked={useDark}
                  onChange={changeTheme}
                  checkedChildren="Dark"
                  unCheckedChildren="Light"
                />
              </div>
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                height: "calc(100vh - 112px)",
                overflow: "auto",
                background: getColor("colorBgContainer")
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout >
      </ConfigProvider>
    </>
  );
};
export default Layouts;
