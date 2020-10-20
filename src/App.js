import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/header/header";
import Map from "./components/Map/Map";
import UserProfile from "./components/UserProfile/UserProfile";


const { Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  render() {
    const toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
    return (
      <BrowserRouter>
        <Layout>
          <Sidebar collapsed={this.state.collapsed} />
          <Layout className="site-layout">
            <Header collapsed={this.state.collapsed} toggle={toggle} />
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              
        <Switch>
          <Route path="/"exact component={Dashboard}></Route>
          <Route path="/map" component={Map}></Route>
          <Route path="/user" component={UserProfile}></Route>
        </Switch>
            </Content>
          </Layout>
        </Layout>

      </BrowserRouter>
    );
  }
}
export default App;
