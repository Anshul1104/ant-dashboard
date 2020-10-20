import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import "./UserProfile.css";
import profilePic from "../../assets/img/mike.jpg";

import { Form, Input, InputNumber, Button } from "antd";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
};
const UserProfile = (props) => {
  const [country, setCountry] = useState("United States");
  const [region, setRegion] = useState("Alaska");

  const [user, setUser] = useState({
    company: "Creative Inc",
    username: "mike12",
    email: "mike@gmail.com",
    fname: "Mike",
    lname: "Andrew",
    address: "Bld Mihail Kogalniceanu",
    country: country,
    region: region,
    pincode: 55054,
    introduction:
      "Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
  });

  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      console.log(JSON.parse(localStorage.getItem(key)));
      let person = JSON.parse(localStorage.getItem(key));
      setUser(person);
    }
    // return () => {
    //     setTimeout(() => {
    //         window.localStorage.clear(user);
    //     }, 6000)
    // }
  }, []);

  const selectCountry = (val) => {
    setCountry(val);
  };

  const selectRegion = (val) => {
    setRegion(val);
  };

  const onFinish = (values) => {
    setUser(values.user);
    const localUser = JSON.stringify(values.user);
    window.localStorage.setItem("user", localUser);
    console.log("Success:", values.user);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Row gutter="16">
        <Col lg={16}>
          <div className="site-card-border-less-wrapper">
            <Card title="Edit Profile" bordered={false}>
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                {...layout}
                name="nest-messages"
                validateMessages={validateMessages}
                initialValues={{ user }}
              >
                <Row gutter={16}>
                  <Col md={10}>
                    <Form.Item
                      name={["user", "company"]}
                      label="Company(disabled)"
                      disabled
                    >
                      <Input disabled />
                    </Form.Item>
                  </Col>
                  <Col md={7}>
                    <Form.Item name={["user", "username"]} label="Username">
                      <Input value={user.username} />
                    </Form.Item>
                  </Col>
                  <Col md={7}>
                    <Form.Item
                      name={["user", "email"]}
                      label="Email"
                      rules={[{ type: "email" }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item name={["user", "fname"]} label="First Name">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item name={["user", "lname"]} label="Last Name">
                      <Input value={user.lname} />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name={["user", "address"]} label="Address">
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col md={8}>
                    <Form.Item name={["user", "country"]} label="Country">
                      <CountryDropdown
                        className="form-control"
                        value={country}
                        onChange={(val) => selectCountry(val)}
                      />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item
                      name={["user", "region"]}
                      label="City"
                      //
                    >
                      <RegionDropdown
                        className="form-control"
                        country={country}
                        value={region}
                        onChange={(val) => selectRegion(val)}
                      />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item
                      name={["user", "pincode"]}
                      label="Postal Code"
                      rules={[{ type: "number" }]}
                    >
                      <InputNumber />
                    </Form.Item>
                  </Col>
                  <Col md={24} lg={16}>
                    <Form.Item name={["user", "introduction"]} label="About Me">
                      <Input.TextArea value={user.introduction} />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </Col>
        <Col lg={8}>
          <Card bordered={false} className="card-user">
            <div className="author">
              <div className="block block-one"></div>
              <div className="block block-two"></div>
              <div className="block block-three"></div>
              <div className="block block-four"></div>
              <a href="#">
                <img alt="..." className="avatar" src={profilePic} />
                <h5 className="title">
                  {user.fname} {user.lname} ({user.username}){" "}
                </h5>
              </a>
              <p className="description">{user.email}</p>
            </div>
            <div className="card-description">{user.introduction}</div>
            <div className="card-footer">
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserProfile;
