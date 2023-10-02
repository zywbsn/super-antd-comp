const reg = /(?<=\/).*?(?=\/)/;

//获取路由配置文件
const routesMetas = import.meta.glob("../views/**/router.jsx", {
  eager: true,
  import: "default"
});

const componentsList = import.meta.glob("../views/**/index.jsx", {
  eager: true
});

let MenuList = [];

for (const key in routesMetas) {
  let pathName = key.replace("../views", "").replace("/router.jsx", "");
  const component = key.replace("router.jsx", "index.jsx");
  const icon = routesMetas[key].icon || "";

  if (routesMetas[key].isFather) {
    MenuList.push({ label: routesMetas[key].name, path: "/Layout" + pathName, children: [], icon });
  } else {
    MenuList.push({
      label: routesMetas[key].name,
      path: "/Layout" + pathName,
      component: componentsList[component].default,
      icon
    });
  }
}

export default MenuList;
