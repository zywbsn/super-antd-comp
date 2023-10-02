import { useState } from "react";
import { HomeOutlined } from "@ant-design/icons";
import SuperButton from "../../../packages/SuperButton/index";


const Home = () => {
  const [count, setCount] = useState(1)
  const changeCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>Home</div>
      <h1>{count}</h1>
      <SuperButton
        text="SuperButton"
        tooltipStatus={true}
        tooltipConfig={{
          title: "tooltipConfig", placement: "topLeft", arrow: { pointAtCenter: true }
        }}
        buttonConfig={{
          type: "primary", danger: true, ghost: true, shape: "circle", icon: HomeOutlined,
          style: { color: "green", backgroundColor: "red", borderColor: "#333" }
        }}
        methods={{ onClick: () => changeCount() }}
      />
      <SuperButton
        text="SuperButton"

        buttonConfig={{
          type: "primary", danger: true, ghost: true, shape: "circle", icon: HomeOutlined,
          style: { color: "green", backgroundColor: "red", borderColor: "#333" }
        }}
        methods={{ onClick: () => changeCount() }}
      />
    </>
  )
};
export default Home;
