import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Card, Col, Row, Tabs } from "antd";
import { Bar, Line } from "react-chartjs-2";
import Meta from "antd/lib/card/Meta";
import './Dashboard.css';

import { chartExample1, chartExample2, chartExample3, chartExample4 } from '../../shared/chartsData';

const { TabPane } = Tabs;

class Dashboard extends Component {
    state = {
      data: []
    };

    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          this.setState({ data: responseData });
          // console.log(this.state.tableData);
        });
    }

    render() {
        return (
            <div>
                <Row>
              <Col span={24}>
                <Card className="card" title="Total Shipments" bordered={false}>
                  <Meta title="Performance" />
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="Accounts" key="1">
                      <div className="chart-area">
                        <Line data={chartExample1.data1} options={chartExample1.options} />
                      </div>
                    </TabPane>
                    <TabPane tab="Purchases" key="2">
                      <div className="chart-area">
                        <Line data={chartExample1.data2} options={chartExample1.options} />
                      </div>
                    </TabPane>
                    <TabPane tab="Sessions" key="3">
                      <div className="chart-area">
                        <Line data={chartExample1.data3} options={chartExample1.options} />
                      </div>
                    </TabPane>
                  </Tabs>
                </Card>
              </Col>
            </Row>

            <Row className="mt-5" gutter="16">
              <Col xs={24} md={12} lg={8}>
                <Card className="card" title="Total Shipments" bordered={false}>
                  <Meta
                    title={
                      <span>
                        <i className="tim-icons icon-bell-55 text-info" />
                        763,215
                      </span>
                    }
                  />
                  <div className="chart-area">
                    <Line data={chartExample2.data} options={chartExample2.options} />
                  </div>
                </Card>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <Card className="card" title="Daily Sales" bordered={false}>
                  <Meta
                    title={
                      <span>
                        <i className="tim-icons icon-delivery-fast text-primary" />
                        3,500€
                      </span>
                    }
                  />
                  <div className="chart-area">
                    <Bar data={chartExample3.data} options={chartExample3.options} />
                  </div>
                </Card>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <Card className="card" title="Completed Tasks" bordered={false}>
                  <Meta
                    title={
                      <span>
                        <i className="tim-icons icon-send text-success" />
                        12,100K
                      </span>
                    }
                  />
                  <div className="chart-area">
                    <Line data={chartExample4.data} options={chartExample4.options} />
                  </div>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col span={24}>                
                  <table className="table table-dark table-responsive-lg">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                      </tr>
                    </thead>
                    {this.state.data.map((data) => (
                    <tbody key={data.id}>
                      <tr>
                        <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        <td >{data.address.city}</td>
                      </tr>
                    </tbody>
                ))}
                  </table>
              </Col>
            </Row>
            </div>
        );
    }
}

export default Dashboard;