import React from 'react';
import { Form, Input, Radio, Select, DatePicker } from 'antd';
import { SuperButton } from "../../packages/index";
import dayjs from "dayjs";

const Item = (props) => {
  const { items, search } = props;
  return items.map((item) => {
    return (
      <Form.Item
        style={{
          width: search ? "25%" : "100%",
        }}
        key={item.name}
        label={item.label}
        name={item.name}
        rules={item.rules}
        initialValue={item.type === "radio" ? item.list[0].value : ""}
      >
        {item.type === "radio" ?
          <Radio.Group options={item.list} />
          : item.type === "select" ?
            <Select
              placeholder={item.placeholder}
              options={item.list}
            />
            : item.type === "date" ?
              <DatePicker format="YYYY-MM-DD" className="w-full" />
              :
              <Input placeholder={item.placeholder} />}

      </Form.Item>
    )
  });
};


const SuperForm = (props) => {
  const [form] = Form.useForm();
  const { formItems, formConfig, search } = props;

  const onSubmit = async () => {
    const values = await form.validateFields();
    formItems.map((item) => {
      if (item.type === "date") {
        values[item.name] = dayjs(values[item.name].$d).format("YYYY-MM-DD");
      }
    });
    console.log("onSubmit", values);
  };

  return (
    <>
      <Form
        form={form}
        labelCol={{
          span: search ? 6 : 2,
        }}
        wrapperCol={{
          span: search ? 24 : 8,
        }}
        {...formConfig}
        className="flex flex-wrap"
      >
        <Item items={formItems} search={search} />
      </Form>
      <SuperButton
        text="SuperButton"
        buttonConfig={{
          type: "primary"
        }}
        methods={{ onClick: () => onSubmit() }}
      />
    </>
  )
};

export default SuperForm;