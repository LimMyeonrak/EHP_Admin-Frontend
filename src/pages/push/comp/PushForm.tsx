/* eslint-disable */
import { DownloadOutlined } from '@ant-design/icons';
import { Row, Col, Select, Input, Button, Checkbox, Form, Radio, TimePicker } from 'antd';
import { CustomUpload, Editor } from 'components';
import CustomDownload from 'components/customDownload';
import { emptyString } from 'helper/recycle';
import { uniqueId } from 'lodash';
import moment from 'moment';
import ManagerPopup from 'Popups/Manager';
import React, { useEffect, useRef, useState } from 'react';
import { confirmOptions, targetsOptions, topFixOptions, useOptions } from 'types/Common/NoticesOptions';

const NoticeForm = props => {
    const {
        mode,
        form,
        content,
        setContent,
        uploadFiles,
        setUploadFiles,
        boadrFiles,
        setBoadrFiles,
        onClickDownLoad,
        setIsChaged,
        userInfo
    } = props;
    const [visibleTargetSearch, setVisibleTargetSearch] = useState<boolean>(false);
    const onchange = e => {
        if (content !== e) {
            form.setFieldsValue({ content: e });
            setContent(e);
            setIsChaged(true);
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

    useEffect(() => {
        setIsChaged(false);
        return () => {
            //
        };
    }, []);

    return (
        <Form
            layout="horizontal"
            form={form}
            onChange={() => {
                setIsChaged(true);
            }}>
            <Row className="content__contentbox__table">
                <Form.Item
                    labelCol={{ span: 0 }}
                    wrapperCol={{ span: 0 }}
                    name="articleIdx"
                    hidden
                    label=""
                    initialValue={null}>
                    <Input />
                </Form.Item>
                <Col className="label required" span={4}>
                    쳇봇 푸시 동의
                </Col>
                <Col className="data" span={20}>
                    <Form.Item
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 10 }}
                        name="isUse"
                        label=""
                        initialValue={1}
                        rules={[{ required: true, message: '동의 여부를 선택해주세요.' }]}>
                        <Radio.Group defaultValue="a" buttonStyle="solid">
                            <Radio.Button value="a">예</Radio.Button>
                            <Radio.Button value="b">아니오</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col className="label required" span={4}>
                    알림 시간대
                </Col>
                <Col className="data" span={20}>
                    <Form.Item
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 2 }}
                        name="age"
                        label=""
                        rules={[{ required: true, message: '알림 시간을 입력해주세요.' }]}>
                        <TimePicker use12Hours format="h:mm a" />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};
export default NoticeForm;
