import { Button, Tooltip } from "antd";

const SuperButton = (props) => {
  const { buttonConfig } = props;
  const { tooltipConfig } = props;
  if (buttonConfig.icon) buttonConfig.icon = <buttonConfig.icon />
  const { text } = props;
  const { methods } = props;
  if (props.tooltipConfig) {
    return (
      <Tooltip {...tooltipConfig} className="mr-3">
        <Button {...buttonConfig} {...methods} >{text}</Button>
      </Tooltip>
    )
  }
  return (
    <Button className="mr-3"{...buttonConfig} {...methods} >{text}</Button>
  )
};

export default SuperButton;