/* eslint-disable */
import { DownloadOutlined } from '@ant-design/icons';
import { Row, Col, Select, Input, Button, Checkbox, Form, Radio, Collapse, Space } from 'antd';
import { CustomUpload, Editor, FilterRangePicker } from 'components';
import RangePicker from 'components/rangePicker';
import CustomDownload from 'components/customDownload';
import { emptyString } from 'helper/recycle';
import { uniqueId } from 'lodash';
import moment from 'moment';
import ManagerPopup from 'Popups/Manager';
import React, { useEffect, useRef, useState } from 'react';
import {
    typeOptions,
    useOptions,
    projectOptions,
    companyOptions,
    closeButtonUseOptions,
    closeButtonCookieOptions,
    buttonOptions
} from 'types/Common/PopupOptions';

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
    const [visibleUrlInput, setVisibleUrlInput] = useState<boolean>(false);
    const [imgMsgValue, setImgMsgValue] = useState(0);
    const onchange = e => {
        if (content !== e) {
            form.setFieldsValue({ content: e });
            setContent(e);
            setIsChaged(true);
        }
    };

    const onChangePopupType = e => {
        setImgMsgValue(e);
    };

    const fileMsg = () => {
        switch (imgMsgValue) {
            case 1:
                return <p>* 이미지는 000px X 000px로 업로드하여 주세요.(확장자 .png) 풀팝업 사이즈 안내 </p>;
            case 2:
                return <p>* 이미지는 000px X 000px로 업로드하여 주세요.(확장자 .png) 바텀시트 팝업 사이즈 안내</p>;
            case 3:
                return <p>* 이미지는 000px X 000px로 업로드하여 주세요.(확장자 .png) 일반 팝업 사이즈 안내</p>;
            default:
                return <p></p>;
        }
    };

    const onChangeButtonSet = e => {
        setVisibleUrlInput(e.target.value === 1);
    };

    const onChangeNoticeTarget = e => {
        //setVisibleTargetSearch(e === 3);
    };

    const setManager = e => {
        const id = e.map(item => {
            return item.id;
        });
        form.setFieldsValue({ noticeTargetIds: id.toString() });
    };

    useEffect(() => {
        fileMsg();
        return () => {
            //
        };
    }, [imgMsgValue]);

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
                    노출여부
                </Col>
                <Col className="data" span={20}>
                    <Form.Item labelCol={{ span: 0 }} wrapperCol={{ span: 10 }} name="isUse" label="" initialValue={0}>
                        <Radio.Group options={useOptions} />
                    </Form.Item>
                </Col>

                <Col className="label required" span={4}>
                    팝업타입
                </Col>
                <Col className="data" span={20}>
                    <Form.Item name="popupType" label="" style={{ width: '200px' }} initialValue={0}>
                        <Select onChange={onChangePopupType} options={typeOptions} />
                    </Form.Item>
                </Col>

                <Col className="label required" span={4}>
                    기업 선택
                </Col>
                <Col className="data" span={20}>
                    <Row justify="start">
                        <Form.Item name="companyTarget" label="" style={{ width: '200px' }} initialValue={0}>
                            <Select onChange={onChangeNoticeTarget} options={companyOptions} />
                        </Form.Item>

                        <Form.Item name="projectTarget" label="" style={{ width: '200px' }} initialValue={0}>
                            <Select onChange={onChangeNoticeTarget} options={projectOptions} />
                        </Form.Item>
                    </Row>
                </Col>

                <Col className="label required" span={4}>
                    제목
                </Col>
                <Col className="data" span={20}>
                    <Form.Item
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 24 }}
                        name="title"
                        label=""
                        rules={[{ required: true, message: '제목을 입력해주세요.' }]}>
                        <Input />
                    </Form.Item>
                </Col>

                <Col className="label required" span={4}>
                    노출기간
                </Col>
                <Col className="data" span={20}>
                    <RangePicker form={form} />
                </Col>

                <Col className="label" span={4}>
                    첨부
                </Col>
                <Col className="data" span={20}>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <CustomDownload downloadFiles={boadrFiles} setDownloadFiles={setBoadrFiles} />
                        <CustomUpload
                            uploadFiles={uploadFiles}
                            setUploadFiles={setUploadFiles}
                            maxCount={boadrFiles ? 3 - boadrFiles.length : 3}
                        />
                        {fileMsg()}
                    </Space>
                </Col>

                <Col className="label required" span={4}>
                    닫기 버튼 설정
                </Col>

                <Col className="data" span={20}>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Form.Item
                            labelCol={{ span: 0 }}
                            wrapperCol={{ span: 10 }}
                            name="isCloseUse"
                            label=""
                            initialValue={0}>
                            <Radio.Group options={closeButtonUseOptions} />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 0 }}
                            wrapperCol={{ span: 10 }}
                            name="isButton"
                            label=""
                            initialValue={0}>
                            <Radio.Group options={closeButtonCookieOptions} />
                        </Form.Item>
                    </Space>
                </Col>

                <Col className="label" span={4}>
                    버튼 설정
                </Col>
                <Col className="data" span={20}>
                    <Row justify="start">
                        <Form.Item name="isConfirm" label="" style={{ width: '320px' }} initialValue={0}>
                            <Radio.Group options={buttonOptions} onChange={onChangeButtonSet} />
                        </Form.Item>

                        {visibleUrlInput && (
                            <>
                                <Form.Item
                                    name="noticeTargetIds"
                                    label=""
                                    initialValue=""
                                    style={{ width: '400px', marginLeft: '0px', marginRight: '0px' }}>
                                    <Input />
                                </Form.Item>
                            </>
                        )}
                    </Row>
                </Col>
            </Row>
        </Form>
    );
};
export default NoticeForm;
