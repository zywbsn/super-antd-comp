const defaultTheme = {
  // colorBgContainer: "#1C1C17",//背景色
  // colorTextBase: "#ffffff",//文字颜色
  // colorBgBase: "#333333",//基础背景色
  // lineType: "dashed", //分割线
  components: {
    Button: {
      /* here is your component tokens */
      dangerShadow: "0",
      defaultShadow: "0",
      primaryShadow: "0"
    }
  }
};

// export const colorABC = (colorPrimary) => {
//   return {
//     colorPrimary: "red"
//   };
// };

export const lightTheme = (
  colorError = "#ff4d4f",
  colorInfo = "#1677ff",
  colorLink = "#1677ff",
  colorPrimary = "#1677ff",
  colorSuccess = "#52c41a",
  colorTextBase = "#000",
  colorWarning = "#faad14"
) => {
  return {
    ...defaultTheme,
    token: {
      colorError,
      colorInfo,
      colorLink,
      colorPrimary,
      colorSuccess,
      colorTextBase,
      colorWarning,
      /* 亮色主题 */
      colorBgContainer: "#ffffff", //背景色
      colorTextBase: "#333333", //文字颜色
      colorBgBase: "#F5F5F5" //基础背景色
      /* 亮色主题 */
    }
  };
};

export const darkTheme = (
  colorError = "#ff4d4f",
  colorInfo = "#1677ff",
  colorLink = "#1677ff",
  colorPrimary = "#1677ff",
  colorSuccess = "#13c2c2",
  colorTextBase = "#000",
  colorWarning = "#faad14"
) => {
  return {
    ...defaultTheme,
    token: {
      colorError,
      colorInfo,
      colorLink,
      colorPrimary: colorPrimary,
      colorSuccess,
      colorTextBase,
      colorWarning,
      /* 暗色主题 */
      colorBgContainer: "#1C1C17", //背景色
      colorTextBase: "#ffffff", //文字颜色
      colorBgBase: "#333333" //基础背景色
      /* 暗色主题 */
    }
  };
};
