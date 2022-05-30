import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Row, Col, Select, DatePicker, Input, Button, Checkbox, Breadcrumb, Form, Space, Card } from 'antd';
import EChart from 'components/eChart';
import LineChart from 'components/lineChart';
import BarChart from 'components/barChart';

import { trim } from 'lodash';

const DashboardContent: React.FunctionComponent = () => {
    return (
        <>
            {/* <section className="page_content">
                <Breadcrumb className="title-navi__navi">
                    <Breadcrumb.Item className="title-navi__navi__home">차트</Breadcrumb.Item>
                    <Breadcrumb.Item className="title-navi__navi__parent">샘플화면</Breadcrumb.Item>
                </Breadcrumb>
            </section> */}

            <Row>
                <Col span={12}>
                    <Card>
                        <div>
                            <EChart></EChart>
                        </div>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <div>
                            <BarChart></BarChart>
                        </div>
                    </Card>
                </Col>
                {/* <Col span={12}>
                    <LineChart></LineChart>
                </Col> */}
            </Row>
        </>
    );
};

export default DashboardContent;
