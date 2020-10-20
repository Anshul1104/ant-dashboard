import React from "react";
import './header.css';

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";

const HeaderTop = (props) => {
    const { Header } = Layout;
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(
        props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: "trigger",
          onClick: props.toggle,
        }
      )}
    </Header>
  );
};

export default HeaderTop;
