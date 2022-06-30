/* eslint-disable */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Row, Col, Select, DatePicker, Input, Button, Checkbox, Breadcrumb, Form, Radio, Modal } from 'antd';
import { uniqueId } from 'lodash';
import { apiExcelFileDownload, deleteNoticeAnswer, deleteNotices, getNotices } from 'api/partner/noticesApi';
import { numberWithCommas } from 'helper/recycle';
import { useHistory } from 'react-router-dom';
import DetailContainer from '../detail';
import NewComCodeContainer from '../new';
import CommonCodeFilter from '../comp/ComCodeFilter';
import CommonCodeList from '../comp/ComCodeList';
import { apiFileDownload } from 'api/common/commonApi';
import modal from 'helper/customModal';
import useLoding from 'hooks/useLoding';

const CommonCodeListContent: React.FunctionComponent = () => {
    const [rowDatas, setRowDatas] = useState<any>({});
    const [total, setTotal] = useState(0);
    const [selectItem, setSelectItem] = useState<any>();
    const [form] = Form.useForm();
    const [searchParams, setSearchParams] = useState<any>({});
    const [gridApi, setGridApi] = useState(null);
    const history = useHistory();
    const { setLoading } = useLoding();
    const [addPage, setAddPage] = useState<boolean>(false);

    const mockData = {
        result: {
            total: 5,
            list: [
                {
                    isUseFormat: 'Y',
                    code: 'A001',
                    number: 1,
                    groupName: '그룹명1',
                    registerName: '관리자',
                    registDate: '2022-06-14 13:00:00',
                    updaterName: '관리자',
                    updateDate: '2022-06-14 13:00:00'
                },
                {
                    isUseFormat: 'N',
                    code: 'B234',
                    number: 2,
                    groupName: '그룹명2',
                    registerName: '관리자',
                    registDate: '2022-06-14 13:00:00',
                    updaterName: '관리자',
                    updateDate: '2022-06-14 13:00:00'
                },
                {
                    isUseFormat: 'Y',
                    code: 'C999',
                    number: 3,
                    groupName: '그룹명3',
                    registerName: '관리자',
                    registDate: '2022-06-14 13:00:00',
                    updaterName: '관리자',
                    updateDate: '2022-06-14 13:00:00'
                },
                {
                    isUseFormat: 'Y',
                    code: 'D123',
                    number: 4,
                    groupName: '그룹명4',
                    registerName: '관리자',
                    registDate: '2022-06-14 13:00:00',
                    updaterName: '관리자',
                    updateDate: '2022-06-14 13:00:00'
                },
                {
                    isUseFormat: 'N',
                    code: 'E777',
                    number: 5,
                    groupName: '그룹명5',
                    registerName: '관리자',
                    registDate: '2022-06-14 13:00:00',
                    updaterName: '관리자',
                    updateDate: '2022-06-14 13:00:00'
                }
            ]
        }
    };

    const onChangePage = page => {
        setSearchParams({ ...searchParams, page: page });
        handleSearchData({ ...searchParams, page: page });
    };
    const onShowSizeChange = (page, size) => {
        console.log(page, ' : ', size);
        // setSearchParams({ ...searchParams, page: page });
    };
    const onSearch = () => {
        let searchValues = form.getFieldsValue();
        searchValues.startDate = moment(searchValues.startDate).format('yyyy-MM-DD');
        searchValues.endDate = moment(searchValues.endDate).format('yyyy-MM-DD');

        searchValues.isTopFix = searchValues.isTopFix === 'all' ? undefined : searchValues.isTopFix;
        setSearchParams({ ...searchValues, page: 1, limit: 10 });
        handleSearchData({ ...searchValues, page: 1, limit: 10 });
    };

    const handleSearchData = param => {
        setLoading();
        // getNotices(param, data => {
        //     setRowDatas(data?.result);
        //     setTotal(data?.result.total);
        // })
        setRowDatas(mockData?.result);
        setTotal(mockData?.result.total);
    };
    const moveAddPage = param => {
        history.push('/partner/notice/new');
    };
    useEffect(() => {
        // handleSearchData(searchParams);
        onSearch();
    }, []);

    const onRowSelected = event => {
        // history.push(`/notices/notice/${event.data.articleIdx}`);
        setSelectItem(event.data);
    };
    const hideModal = isChaged => {
        // history.push(`/notices/notice/${event.data.articleIdx}`);
        setSelectItem(undefined);
        setAddPage(false);
        if (isChaged) {
            handleSearchData(searchParams);
        }
    };
    const hideModal2 = isChaged => {
        // history.push(`/notices/notice/${event.data.articleIdx}`);
        setAddPage(false);
    };
    const fileDownload = () => {
        setLoading(
            apiExcelFileDownload({
                url: '/board-api/cms/notices/excel?page=1&limit=30&searchDateType=0&startDate=2022-02-10&endDate=2022-02-12&isConfirm=1&isTopFix=&isUse=1&searchRegisterName=&searchWord=&noticeTargetIds=&targetIds=&userId=&noticeTarget=1&isTopFix=&searchRegisterName=&searchWord=&noticeTargetIds=&targetIds=&userId=',
                fileNm: `공지사항_${moment().format('yyyyMMddHHmmss')}.xls`,
                data: searchParams
            })
        );
    };
    const onClickDelete = () => {
        const nodes = gridApi.getSelectedNodes();
        let answerIdx = [];
        const idxs = nodes.map(item => {
            if (item.data.answerIdx !== null) {
                answerIdx.push({ articleIdx: item.data.articleIdx, answerIdx: item.data.answerIdx });
            }
            return item.data.articleIdx;
        });
        if (idxs.length === 0) {
            return modal.msg('001');
        }
        modal.msg(answerIdx.length > 0 ? '105' : '102', '', () => {
            // 답변 한번에 삭제 하는 API 없어서 임시로
            answerIdx.length > 0 &&
                answerIdx.map(item => {
                    return deleteNoticeAnswer({ articleIdx: item.articleIdx, answerIdx: item.answerIdx }, () => {
                        //
                    });
                });
            setLoading(
                deleteNotices({ noticeTargetIds: idxs.toString() }, () => {
                    onSearch();
                })
            );
        });
    };
    const onClickAdd = param => {
        setAddPage(true);
    };
    return (
        <>
            <section className="page_content">
                <Breadcrumb className="title-navi__navi">
                    <Breadcrumb.Item className="title-navi__navi__home">공통코드 관리</Breadcrumb.Item>
                    <Breadcrumb.Item className="title-navi__navi__parent">공통코드</Breadcrumb.Item>
                </Breadcrumb>
                <Form form={form} layout="horizontal">
                    <Row align="bottom" key={uniqueId()} style={{ marginBottom: '10px', marginTop: '-12px' }}>
                        <Col span={12}>검색조건</Col>
                        <Col span={12} style={{ textAlign: 'end' }}>
                            <Button type="primary" htmlType="submit" onClick={onSearch}>
                                조회
                            </Button>
                            &nbsp;
                            <Button type="primary" htmlType="reset">
                                초기화
                            </Button>
                        </Col>
                    </Row>
                    <CommonCodeFilter form={form} />
                </Form>
                <Row align="bottom" key={uniqueId()} style={{ marginBottom: '10px', marginTop: '-12px' }}>
                    <Col span={24}>
                        검색결과 : <span style={{ color: 'red' }}>({numberWithCommas(total)}건)</span>
                    </Col>
                </Row>
                {rowDatas && (
                    <CommonCodeList
                        data={rowDatas}
                        page={searchParams?.page}
                        onRowSelected={onRowSelected}
                        onChangePage={onChangePage}
                        onShowSizeChange={onShowSizeChange}
                        moveAddPage={moveAddPage}
                        fileDownload={fileDownload}
                        setGridApi={setGridApi}
                        onClickDelete={onClickDelete}
                        onClickAdd={onClickAdd}
                    />
                )}
            </section>
            <div>
                {selectItem && (
                    <DetailContainer
                        articleIdx={selectItem.articleIdx}
                        hideModal={hideModal}
                        answerIdx={selectItem.answerIdx}
                    />
                )}
            </div>
            <div>{addPage && <NewComCodeContainer hideModal2={hideModal2} />}</div>
            {/* <div>{addPage && <DetailContainer articleIdx={1} hideModal={hideModal} answerIdx={1} />}</div> */}
        </>
    );
};

export default CommonCodeListContent;
