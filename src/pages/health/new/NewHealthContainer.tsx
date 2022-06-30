import React, { useState, useEffect } from 'react';
import modal from 'helper/customModal';
import moment from 'moment';
import useUser from 'hooks/user';
import { Row, Button, Breadcrumb, Form } from 'antd';
import { isEmpty, uniqueId } from 'lodash';
import { getNotice, postNotices } from 'api/partner/noticesApi';
import { useHistory, useParams } from 'react-router-dom';
import useLoding from 'hooks/useLoding';
import NoticeForm from '../comp/HealthForm';

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
            history.push('/pushNew');
        });
    };

    return (
        <>
            <section className="page_content">
                <Breadcrumb className="title-navi__navi">
                    <Breadcrumb.Item className="title-navi__navi__home">건강정보</Breadcrumb.Item>
                    <Breadcrumb.Item className="title-navi__navi__parent">내건강정보 입력</Breadcrumb.Item>
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
