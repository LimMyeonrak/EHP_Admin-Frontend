import React, { useState, useEffect } from 'react';
import modal from 'helper/customModal';
import moment from 'moment';
import useUser from 'hooks/user';
import { Row, Button, Breadcrumb, Form } from 'antd';
import { isEmpty, uniqueId } from 'lodash';
import { getNotice, postNotices } from 'api/partner/noticesApi';
import { useHistory, useParams } from 'react-router-dom';
import useLoding from 'hooks/useLoding';
import NoticeForm from '../comp/PushForm';

const AddHealthContainer: React.FunctionComponent = () => {
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

    const onFinish = (values: any) => {
        form.validateFields().then(values => {
            alert('저장');
        });
    };

    return (
        <>
            <section className="page_content">
                <Breadcrumb className="title-navi__navi">
                    <Breadcrumb.Item className="title-navi__navi__home">건강상담</Breadcrumb.Item>
                    <Breadcrumb.Item className="title-navi__navi__parent">건상상담 설정</Breadcrumb.Item>
                </Breadcrumb>
                <NoticeForm
                    form={form}
                    content={content}
                    uploadFiles={uploadFiles}
                    setUploadFiles={setUploadFiles}
                    setContent={setContent}
                    setIsChaged={setIsChaged}
                    userInfo={userInfo}
                />
                <Row justify="center">
                    <Button type="primary" onClick={onFinish}>
                        다음
                    </Button>
                </Row>
            </section>
        </>
    );
};

export default AddHealthContainer;
