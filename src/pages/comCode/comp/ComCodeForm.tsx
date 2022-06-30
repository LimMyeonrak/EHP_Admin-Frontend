/* eslint-disable */
import { DownloadOutlined } from '@ant-design/icons';
import { Row, Col, Select, Input, Button, Checkbox, Form, Radio } from 'antd';
import { CustomUpload, Editor } from 'components';
import CustomDownload from 'components/customDownload';
import { emptyString } from 'helper/recycle';
import { uniqueId } from 'lodash';
import moment from 'moment';
import ManagerPopup from 'Popups/Manager';
import React, { useEffect, useRef, useState } from 'react';
import { typeAddOptions } from 'types/Common/CommonCodeOptions';

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
                <Col className="label" span={4}>
                    구분
                </Col>
                <Col className="data" span={20}>
                    <Form.Item labelCol={{ span: 0 }} wrapperCol={{ span: 10 }} name="isUse" label="" initialValue={0}>
                        <Radio.Group options={typeAddOptions} />
                    </Form.Item>
                </Col>
                <Col className="label required" span={4}>
                    그룹/코드
                </Col>
                <Col className="data" span={20}>
                    <Form.Item
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 24 }}
                        name="title"
                        label=""
                        rules={[{ required: true, message: '그룹/코드명을 입력해주세요.' }]}>
                        <Input />
                    </Form.Item>
                </Col>

                <Col className="label" span={4}>
                    등록자/일시
                </Col>
                <Col className="data" span={8}>
                    {userInfo
                        ? `${emptyString(userInfo.name)} ${emptyString(moment().format('YYYY-MM-DD HH:mm:ss'))}`
                        : `${emptyString(form.getFieldValue('registerName'))} ${emptyString(
                              form.getFieldValue('registDate')
                          )}`}
                </Col>
                <Col className="label" span={4}>
                    최종수정자/일시
                </Col>
                <Col className="data" span={8}>
                    {`${emptyString(form.getFieldValue('updaterName'))} ${emptyString(
                        form.getFieldValue('updateDate')
                    )}`}
                </Col>
            </Row>
        </Form>
    );
};
export default NoticeForm;
