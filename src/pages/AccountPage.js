import { Avatar, Divider, Form, Input, Button, Space } from "antd";
import React from "react";
import { Collapse } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const AccountPage = () => {
  function callback(key) {
    console.log(key);
  }

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <div className="flex flex-col justify-start items-center h-full py-20  w-full">
      <div className="flex flex-col justify-center items-center sticky top-12 z-50 bg-white w-full">
        <div className="border-2 border-black rounded-full p-1">
          <Avatar
            size={100}
            icon="user"
            className="border-2 border-black p-2"
          />
        </div>
        <div className="text-center text-2xl"> Jhon Doe, 21 </div>
        <hr />
      </div>
      <Divider />

      <div className="w-full md:w-1/2">
        <Collapse defaultActiveKey={[]} onChange={callback}>
          <Panel header="Basic Personal Details" key="1">
            Name : Jhon Doe
            <br />
            Age : 21
            <br />
            DOB : 21/01/2000
            <br />
            Birth Time : 12:00 PM
            <br />
            Blood Group : O+
            <br />
            Birth Place : Mumbai
            <br />
            Manglik : No
            <br />
            Marital Status : Single
            <br />
            Height : 5'10"
            <br />
            Weight : 50 Kg
            <br />
            Body Type : Average
            <br />
            Complexion : Fair
            <br />
            Physical Status : Normal
            <br />
            Mother Tongue : Hindi
            <br />
            Religion : Hindu
            <br />
            Caste : General
            <br />
            Gotra : General
            <br />
            Star : General
            <br />
            Raasi : General
            <br />
            Family Locations : Mumbai
            <br />
          </Panel>
          <Panel header="Education and Carrer" key="2">
            Education : B.Tech
            <br />
            College : Mumbai University
            <br />
            University : Mumbai University
            <br />
            Graduation Year : 2020
            <br />
            Occupation : Software Engineer
            <br />
            Monthly Income : 10 Lakhs
            <br />
            Annual Income : 10 Lakhs
            <br />
          </Panel>
          <Panel header="Family" key="4">
            Father Name : Jhon Doe
            <br />
            Mother Name : Jhon Doe
            <br />
            Siblings : 2
            <br />
            Brother : 1
            <br />
            Sister : 1
            <br />
            Family Values : Traditional
            <br />
            Family Type : Traditional
            <br />
            Family Status : Married
            <br />
            Family Locations : Mumbai
            <br />
          </Panel>
          <Panel header="Habbit" key="5">
            Food : Vegetarian
            <br />
            Drink : Non-Alcoholic
            <br />
            Smoke : No
            <br />
          </Panel>
          <Panel header="Special About You (Add Here)" key="6">
            <Form
              name="dynamic_form_nest_item"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.List name="users">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "first"]}
                          rules={[
                            { required: true, message: "Missing first name" },
                          ]}
                        >
                          <Input placeholder="First Name" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "last"]}
                          rules={[
                            { required: true, message: "Missing last name" },
                          ]}
                        >
                          <Input placeholder="Last Name" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add field
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default AccountPage;
