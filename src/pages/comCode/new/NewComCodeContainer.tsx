import React, { useState, useEffect } from 'react';
import modal from 'helper/customModal';
import moment from 'moment';
import useUser from 'hooks/user';
import { Row, Button, Breadcrumb, Col, Space, Form, Modal } from 'antd';
import { isEmpty, uniqueId } from 'lodash';
import { getNotice, postNotices } from 'api/partner/noticesApi';
import { useHistory, useParams } from 'react-router-dom';
import useLoding from 'hooks/useLoding';
import NoticeForm from '../comp/ComCodeForm';

type propsType = {
    hideModal2: (e) => void;
};

const AddComCodeContainer = (props: propsType): any => {
    const { hideModal2 } = props;
    const [rowDatas, setRowDatas] = useState<any>([]);
    const { userInfo } = useUser();
    const [content, setContent] = useState<any>();
    const [isChaged, setIsChaged] = useState<boolean>(false);
    const history = useHistory();
    const [form] = Form.useForm();
    const [uploadFiles, setUploadFiles] = useState<File[]>([]);
    const { setLoading } = useLoding();

    useEffect(() => {
        return () => {
            form.resetFields();
            setContent('');
            setIsChaged(false);
            setUploadFiles([]);
        };
    }, []);

    const closeModal = () => {
        hideModal2(false);
    };

    const onFinish = (values: any) => {
        form.validateFields().then(values => {
            const params = { ...values, isTopFix: values.isTopFix ? 1 : 0 };
            const formData = new FormData();

            Object.keys(params).forEach(key => {
                if (params[key] !== undefined && params[key] !== null) {
                    formData.append(key, params[key]);
                } else if (key === 'articleIdx') {
                    formData.append('articleIdx', '');
                }
            });
            if (uploadFiles) {
                uploadFiles.forEach(element => {
                    formData.append('files', element);
                });
            }
            setLoading(
                postNotices(formData, data => {
                    if (data?.message.indexOf('??????') > -1) {
                        // modal.info('?????? ???????????????.');
                        history.push('/partner/notice/list');
                    } else {
                        modal.warn('????????? ?????? ????????????.');
                    }
                })
            );
        });
    };

    return (
        <>
            <Modal
                visible={true}
                title="???????????? ??????"
                onCancel={closeModal}
                className="detail_modal"
                footer={<></>}
                width={1400}>
                <NoticeForm
                    form={form}
                    content={content}
                    uploadFiles={uploadFiles}
                    setUploadFiles={setUploadFiles}
                    setContent={setContent}
                    setIsChaged={setIsChaged}
                    userInfo={userInfo}
                />
                <Row justify="end" style={{ marginBottom: '10px' }}>
                    <Col>
                        <Space>
                            {/* {modifyMode ? (
                                <>
                                    <Button name="??????" type="primary" onClick={onFinish}>
                                        ??????
                                    </Button>
                                    <Button
                                        name="??????"
                                        onClick={() => {
                                            setModifyMode(!modifyMode);
                                        }}>
                                        ??????
                                    </Button>
                                </>
                            ) : (
                                <Button
                                    name="??????"
                                    type="primary"
                                    onClick={() => {
                                        setModifyMode(!modifyMode);
                                    }}>
                                    ??????
                                </Button>
                            )} */}
                            <Button name="??????" type="primary" onClick={onFinish}>
                                ??????
                            </Button>
                            <Button name="??????" onClick={closeModal}>
                                ??????
                            </Button>
                        </Space>
                    </Col>
                </Row>
            </Modal>
        </>
    );
};

export default AddComCodeContainer;
