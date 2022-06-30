import { Row, Col, Select, DatePicker, Input, Button, Checkbox, Breadcrumb, Form, Radio } from 'antd';
import { FilterRangePicker } from 'components';
import moment from 'moment';
import React, { useState } from 'react';
import {
    companyOptions,
    projectOptions,
    typeOptions,
    dateTypeOptions,
    InquiryUseOptions
} from 'types/Common/PopupOptions';
import ManagerPopup from 'Popups/Manager';

const PopupFilter = props => {
    const { form } = props;
    const [visibleTargetSearch, setVisibleTargetSearch] = useState<boolean>(false);
    const onChangeDateRange = e => {
        if (e !== 999) {
            form.setFieldsValue({ startDate: moment().add('day', -e), endDate: moment() });
        }
    };
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
                    기간
                </Col>
                <Col className="data" span={20}>
                    <Row align="middle" justify="start">
                        <Form.Item name="searchDateType" initialValue={0} label="" style={{ width: '200px' }}>
                            <Select options={dateTypeOptions} />
                        </Form.Item>
                        <FilterRangePicker form={form} />
                    </Row>
                </Col>
                <Col className="label" span={4}>
                    노출여부
                </Col>
                <Col className="data" span={20}>
                    <Form.Item labelCol={{ span: 0 }} wrapperCol={{ span: 24 }} name="isUse" initialValue={0} label="">
                        <Radio.Group options={InquiryUseOptions} />
                    </Form.Item>
                </Col>

                <Col className="label " span={4}>
                    대상
                </Col>
                <Col className="data" span={20}>
                    <Row justify="start">
                        <Form.Item name="companyTarget" initialValue={0} label="" style={{ width: '200px' }}>
                            <Select options={companyOptions} />
                        </Form.Item>

                        <Form.Item name="projectTarget" initialValue={0} label="" style={{ width: '200px' }}>
                            <Select options={projectOptions} />
                        </Form.Item>
                    </Row>
                </Col>
                <Col className="label" span={4}>
                    타입구분
                </Col>
                <Col className="data" span={20}>
                    <Form.Item
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 24 }}
                        name="isConfirm"
                        initialValue={0}
                        label="">
                        <Radio.Group options={typeOptions} />
                    </Form.Item>
                </Col>

                <Col className="label " span={4}>
                    검색어
                </Col>
                <Col className="data" span={20}>
                    <Row justify="start">
                        <Form.Item
                            name="searchWord"
                            label=""
                            initialValue=""
                            style={{ width: '400px', marginLeft: '0px', marginRight: '0px' }}>
                            <Input />
                        </Form.Item>
                    </Row>
                </Col>
            </Row>
        </>
    );
};
export default PopupFilter;
