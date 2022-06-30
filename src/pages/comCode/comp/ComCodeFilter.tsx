import { Row, Col, Select, DatePicker, Input, Button, Checkbox, Breadcrumb, Form, Radio } from 'antd';
import { FilterRangePicker } from 'components';
import moment from 'moment';
import React, { useState } from 'react';
import { typeOptions, useOptions } from 'types/Common/CommonCodeOptions';
import ManagerPopup from 'Popups/Manager';

const CommonCodeFilter = props => {
    const { form } = props;
    const [visibleTargetSearch, setVisibleTargetSearch] = useState<boolean>(false);
    const onChangeNoticeTarget = e => {
        setVisibleTargetSearch(e === 3);
    };
    const setManager = e => {
        const id = e.map(item => {
            return item.id;
        });
        form.setFieldsValue({ noticeTargetIds: id.toString() });
    };

    return (
        <>
            <Row className="content__contentbox__table">
                <Col className="label" span={4}>
                    구분
                </Col>
                <Col className="data" span={8}>
                    <Row justify="start">
                        <Form.Item
                            name="searchType"
                            initialValue="all"
                            label=""
                            style={{ width: '200px', marginRight: '10px' }}>
                            <Select options={typeOptions} />
                        </Form.Item>
                        <Form.Item
                            name="searchWord"
                            label=""
                            initialValue=""
                            style={{ width: '200px', marginLeft: '0px', marginRight: '0px' }}>
                            <Input />
                        </Form.Item>
                    </Row>
                </Col>
                <Col className="label" span={4}>
                    사용 여부
                </Col>
                <Col className="data" span={8}>
                    <Form.Item
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 24 }}
                        name="isTopFix"
                        label=""
                        // valuePropName="checked"
                        initialValue="all">
                        {/* <Checkbox>고정</Checkbox> */}
                        <Radio.Group options={useOptions} />
                    </Form.Item>
                </Col>
            </Row>
        </>
    );
};
export default CommonCodeFilter;
