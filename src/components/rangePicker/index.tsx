/* eslint-disable */
import React, { useState } from 'react';
import { Col, DatePicker, Form, FormInstance, Row, Select } from 'antd';
import moment from 'moment';

interface FilterRangePickerProps {
    form: FormInstance<any>; // form 전달
    defaultRange?: number; // 초기 설정 값
}

const RangePicker: React.FunctionComponent<FilterRangePickerProps> = props => {
    const { form, defaultRange = 30 } = props;
    const [range, setRange] = useState(defaultRange);

    const onChangeDateRange = e => {
        setRange(e);
        if (e !== 999) {
            form.setFieldsValue({ startDate: moment().add(-e, 'days'), endDate: moment() });
        }
    };

    const onChange = () => {
        setRange(999);
    };

    return (
        <Row align="middle" justify="start">
            <Form.Item
                name="startDate"
                label=""
                //initialValue={defaultRange !== 999 ? moment().add(-defaultRange, 'days') : moment()}
                initialValue={moment()}
                style={{ width: '130px', marginLeft: '10px', marginRight: '10px' }}>
                <DatePicker onChange={onChange} />
            </Form.Item>
            <Col>~</Col>
            <Form.Item
                name="endDate"
                label=""
                initialValue={moment()}
                style={{ width: '130px', marginLeft: '10px', marginRight: '10px' }}>
                <DatePicker onChange={onChange} />
            </Form.Item>
        </Row>
    );
};

export default RangePicker;
