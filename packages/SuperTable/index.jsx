import React from "react";
import { Table } from "antd";
import SuperButton from "../SuperButton/index"

const ButtonList = (props) => {
  const { buttonList, custom } = props;
  console.log("custom", custom);
  if (!custom) {
    const Items = buttonList.map((item) => (
      <React.Fragment key={item.text} >
        <SuperButton {...item} />
      </React.Fragment>
    ));
    return Items;
  }
};
const SuperTable = (props) => {
  console.log("SuperTable props", props);
  const { tableConfig } = props;
  const { leftButton } = props;

  return (
    <>
      <div className='mb-3'>
        <ButtonList {...leftButton} />
      </div>
      <Table
        rowKey="id"
        bordered
        size="middle"
        scroll={{
          y: 500
        }}
        {...tableConfig} />;
    </>
  )
};

export default SuperTable;