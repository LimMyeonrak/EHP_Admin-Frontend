/* eslint-disable */
import { DownloadOutlined } from '@ant-design/icons';
import { Row, Col, Select, Input, Button, Checkbox, Form, Radio, Collapse } from 'antd';
import { CustomUpload, Editor } from 'components';
import CustomDownload from 'components/customDownload';
import { emptyString } from 'helper/recycle';
import { uniqueId } from 'lodash';
import moment from 'moment';
import ManagerPopup from 'Popups/Manager';
import React, { useEffect, useRef, useState } from 'react';
import { confirmOptions, targetsOptions, topFixOptions, useOptions } from 'types/Common/NoticesOptions';

const TermsForm = props => {
    const { Panel } = Collapse;

    const text1 = `내용1`;
    const text2 = `내용2`;
    const text3 = `내용3`;
    const text4 = `내용4`;
    const text5 = `내용5`;
    const text6 = `내용6`;
    const text7 = `내용7`;

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

    const onChange11 = (key: string | string[]) => {
        console.log(key);
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
        <Collapse defaultActiveKey={['1']} onChange={onChange11}>
            <Panel header="1. 개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법" key="1">
                <p>{text1}</p>
            </Panel>
            <Panel header="1. 제 3자 제공시 제공받는 자의 성명, 제공받는자의 이용 목적과 제공하는 항목" key="2">
                <p>{text2}</p>
            </Panel>
            <Panel header="1. 개인정보의 보유 및 이용 기간, 개인정보의 파기절차 및 파기방법" key="3">
                <p>{text3}</p>
            </Panel>
            <Panel header="1. 개인정보 처리위탁을 하는 업무의 내용 및 수탁자" key="4">
                <p>{text4}</p>
            </Panel>
            <Panel header="1. 이용자 및 법정대리인의 권리와 그 행사 방법" key="5">
                <p>{text5}</p>
            </Panel>
            <Panel header="1. 개인정보 자동수집 장치의 설치, 운영 및 거부에 관한 사항" key="6">
                <p>{text6}</p>
            </Panel>
            <Panel header="1. 개인정보 보호 책임자 또는 담당자의 이름 및 연락처" key="7">
                <p>{text7}</p>
            </Panel>
        </Collapse>
    );
};
export default TermsForm;
