import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Space, Modal } from 'antd';
import { deleteNotice as apiDelete, getNotice, getNoticeAnswer, postNotices, putNotice } from 'api/partner/noticesApi';
import modal from 'helper/customModal';
import moment from 'moment';
import useUser from 'hooks/user';
import { apiFileDownload } from 'api/common/commonApi';
import { Answer } from 'Popups';
import AnswerForm from 'Popups/Answer/AnswerForm';
import useLoding from 'hooks/useLoding';
import NoticeForm from '../comp/NoticeForm';
import NoticeDetail from '../comp/NoticeDetail';
import Reply from '../comp/Reply';

type propsType = {
    articleIdx: number;
    answerIdx: number;
    hideModal: (e) => void;
};

const DetailContainer = (props: propsType): any => {
    const { articleIdx, answerIdx, hideModal } = props;
    const { userInfo } = useUser();
    const [content, setContent] = useState<any>();
    const [data, setData] = useState<any>();
    const [answerData, setAnswerData] = useState<any>();
    const [visible, setVisible] = useState<any>();
    const [form] = Form.useForm();
    const [boadrFiles, setBoadrFiles] = useState<any[]>([]);
    const [uploadFiles, setUploadFiles] = useState<File[]>([]);
    const [modifyMode, setModifyMode] = useState<boolean>(false);
    const [newAnswerIdx, setNewAnswerIdx] = useState<number>();
    const [isChaged, setIsChaged] = useState<boolean>(false);
    const [isAnsChaged, setIsAnsChaged] = useState<boolean>(false);
    const { setLoading } = useLoding();

    const onClickDownLoad = (e: any) => {
        setLoading(apiFileDownload({ idx: e.idx, fileName: e.fileName }));
    };

    const apiCall = () => {
        if (articleIdx !== 0) {
            setNewAnswerIdx(null);
            setLoading(
                getNotice(articleIdx, data => {
                    setData(data.result.data);
                    setContent(data.result.data?.content);
                    setBoadrFiles(data.result.files);
                    const noticeData = data.result.data;
                    form.setFieldsValue({ ...noticeData });
                    setNewAnswerIdx(data.result.data?.answerIdx);
                    setIsChaged(false);
                })
            );
        } else {
            form.setFieldsValue({ registerName: userInfo.name, registDate: moment().format('YYYY-MM-DD HH:mm:ss') });
        }
    };

    const onFinish = () => {
        form.validateFields().then(values => {
            modal.msg('101', '', () => {
                const params = { ...values, isTopFix: values.isTopFix ? 1 : 0 };
                const formData = new FormData();

                Object.keys(params).forEach(key => {
                    if (params[key] !== undefined && params[key] !== null) {
                        formData.append(key, params[key]);
                    }
                });
                if (boadrFiles.length > 0) {
                    boadrFiles.map(item => {
                        return formData.append('includeFileIdxs', item.idx);
                    });
                }
                if (uploadFiles) {
                    uploadFiles.forEach(element => {
                        formData.append('files', element);
                    });
                }
                setLoading(
                    putNotice({ data: formData }, data => {
                        setIsChaged(false);
                        setModifyMode(false);
                        apiCall();
                        setUploadFiles([]);
                        modal.info('?????????????????????.');
                    })
                );
            });
        });
    };

    const closeModal = () => {
        if (isChaged || isAnsChaged) {
            modal.msg('104', '', () => {
                hideModal(false);
            });
        } else {
            hideModal(false);
        }
    };
    const deleteNotice = (values: any) => {
        modal.msg(
            newAnswerIdx !== undefined && newAnswerIdx !== null ? '105' : '102',
            '',
            () => {
                apiDelete(articleIdx, data => {
                    hideModal(true);
                });
            },
            () => {
                //
            }
        );
    };

    useEffect(() => {
        apiCall();
        return () => {
            setNewAnswerIdx(null);
            setIsChaged(false);
            setIsAnsChaged(false);
        };
    }, []);

    useEffect(() => {
        if (newAnswerIdx) {
            setLoading(
                getNoticeAnswer(newAnswerIdx, data => {
                    setAnswerData(data);
                })
            );
        } else {
            setAnswerData(null);
        }
    }, [newAnswerIdx]);

    return (
        <>
            <Modal
                visible={articleIdx !== 0}
                title="???????????? ??????"
                onCancel={closeModal}
                className="detail_modal"
                footer={<></>}
                width={1400}>
                {/* {modifyMode ? ( 
                <NoticeForm
                    form={form}
                    data={data}
                    content={content}
                    setContent={setContent}
                    boadrFiles={boadrFiles}
                    onClickDownLoad={onClickDownLoad}
                    uploadFiles={uploadFiles}
                    setUploadFiles={setUploadFiles}
                    setIsChaged={setIsChaged}
                />
                
                ) : (
                    <>
                        {data && <NoticeDetail onClickDownLoad={onClickDownLoad} data={data} boadrFiles={boadrFiles} />}
                    </>
                )} */}
                <NoticeForm
                    form={form}
                    data={data}
                    content={content}
                    setContent={setContent}
                    boadrFiles={boadrFiles}
                    setBoadrFiles={setBoadrFiles}
                    onClickDownLoad={onClickDownLoad}
                    uploadFiles={uploadFiles}
                    setUploadFiles={setUploadFiles}
                    setIsChaged={setIsChaged}
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
                            <Button name="??????" type="primary" onClick={deleteNotice}>
                                ??????
                            </Button>
                            {!answerData && <Answer articleIdx={articleIdx} refresh={apiCall} />}
                            <Button name="??????" onClick={closeModal}>
                                ??????
                            </Button>
                        </Space>
                    </Col>
                </Row>
                {data && (
                    <Reply
                        reply={data?.replyList}
                        boardType={0}
                        articleAttachType={5}
                        articleIdx={articleIdx}
                        articleType="Q"
                        refresh={apiCall}
                    />
                )}
                {/* ??????????????? ?????? */}
                {answerData && (
                    <AnswerForm
                        viewMode
                        data={answerData}
                        articleIdx={articleIdx}
                        refresh={apiCall}
                        setIsAnsChaged={setIsAnsChaged}
                    />
                )}
                {answerData && answerData.result?.data && (
                    <Reply
                        reply={answerData.result.data.answerReplyList}
                        boardType={0}
                        articleAttachType={6}
                        articleIdx={answerData.result.data.answerIdx}
                        articleType="A"
                        refresh={apiCall}
                    />
                )}
            </Modal>
        </>
    );
};

export default DetailContainer;
