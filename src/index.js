import SuperButton from "./components/SuperButton/index";
import SuperTable from "./components/SuperTable/index";

export { SuperButton, SuperTable };

const components = [SuperButton, SuperTable];

const install = (App, options) => {
  components.forEach((component) => {
    App.component(component.name, component);
  });
};

export default { install };
