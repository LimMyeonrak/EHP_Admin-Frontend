/* eslint-disable */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Row, Col, Select, DatePicker, Input, Button, Checkbox, Breadcrumb, Form, Radio, Modal } from 'antd';
import { uniqueId } from 'lodash';
import { apiExcelFileDownload, deleteNoticeAnswer, deleteNotices, getNotices } from 'api/partner/noticesApi';
import { numberWithCommas } from 'helper/recycle';
import { useHistory } from 'react-router-dom';
import DetailContainer from '../detail';
import NoticeFilter from '../comp/NoticeFilter';
import NoticeList from '../comp/NoticeList';
import { apiFileDownload } from 'api/common/commonApi';
import modal from 'helper/customModal';
import useLoding from 'hooks/useLoding';

const FaqListContent: React.FunctionComponent = () => {
    const [rowDatas, setRowDatas] = useState<any>({});
    const [total, setTotal] = useState(0);
    const [selectItem, setSelectItem] = useState<any>();
    const [form] = Form.useForm();
    const [searchParams, setSearchParams] = useState<any>({});
    const [gridApi, setGridApi] = useState(null);
    const history = useHistory();
    const { setLoading } = useLoding();

    const mockData = {
        result: {
            total: 5,
            list: [
                {
                    answerIdx: 1,
                    answerTitle: '답변1',
                    articleAnswerReplyCnt: '0',
                    articleIdx: 0,
                    articleReplyCnt: 0,
                    isConfirmFormat: 'N',
                    isTopFixFormat: 'N',
                    isUseFormat: 'N',
                    noticeTargetCnt: '0',
                    noticeTargetFormat: '0',
                    noticeTargetNm: '0',
                    number: 1,
                    title: '질문1',
                    content: '내용1'
                },
                {
                    answerIdx: 2,
                    answerTitle: '답변2',
                    articleAnswerReplyCnt: '0',
                    articleIdx: 0,
                    articleReplyCnt: 0,
                    isConfirmFormat: 'N',
                    isTopFixFormat: 'N',
                    isUseFormat: 'N',
                    noticeTargetCnt: '0',
                    noticeTargetFormat: '0',
                    noticeTargetNm: '0',
                    number: 2,
                    title: '질문2',
                    content: '내용2'
                },
                {
                    answerIdx: 3,
                    answerTitle: '답변3',
                    articleAnswerReplyCnt: '0',
                    articleIdx: 0,
                    articleReplyCnt: 0,
                    isConfirmFormat: 'N',
                    isTopFixFormat: 'N',
                    isUseFormat: 'N',
                    noticeTargetCnt: '0',
                    noticeTargetFormat: '0',
                    noticeTargetNm: '0',
                    number: 3,
                    title: '질문3',
                    content: '내용3'
                },
                {
                    answerIdx: 4,
                    answerTitle: '답변4',
                    articleAnswerReplyCnt: '0',
                    articleIdx: 0,
                    articleReplyCnt: 0,
                    isConfirmFormat: 'N',
                    isTopFixFormat: 'N',
                    isUseFormat: 'N',
                    noticeTargetCnt: '0',
                    noticeTargetFormat: '0',
                    noticeTargetNm: '0',
                    number: 4,
                    title: '질문4',
                    content: '내용4'
                },
                {
                    answerIdx: 5,
                    answerTitle: '답변5',
                    articleAnswerReplyCnt: '0',
                    articleIdx: 0,
                    articleReplyCnt: 0,
                    isConfirmFormat: 'N',
                    isTopFixFormat: 'N',
                    isUseFormat: 'N',
                    noticeTargetCnt: '0',
                    noticeTargetFormat: '0',
                    noticeTargetNm: '0',
                    number: 5,
                    title: '질문5',
                    content: '내용5'
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
        history.push('/partner/faq/new');
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
        if (isChaged) {
            handleSearchData(searchParams);
        }
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
    return (
        <>
            <section className="page_content">
                <Breadcrumb className="title-navi__navi">
                    <Breadcrumb.Item className="title-navi__navi__home">게시판관리</Breadcrumb.Item>
                    <Breadcrumb.Item className="title-navi__navi__parent">FAQ</Breadcrumb.Item>
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
                    <NoticeFilter form={form} />
                </Form>
                <Row align="bottom" key={uniqueId()} style={{ marginBottom: '10px', marginTop: '-12px' }}>
                    <Col span={24}>
                        검색결과 : <span style={{ color: 'red' }}>({numberWithCommas(total)}건)</span>
                    </Col>
                </Row>
                {rowDatas && (
                    <NoticeList
                        data={rowDatas}
                        page={searchParams?.page}
                        onRowSelected={onRowSelected}
                        onChangePage={onChangePage}
                        onShowSizeChange={onShowSizeChange}
                        moveAddPage={moveAddPage}
                        fileDownload={fileDownload}
                        setGridApi={setGridApi}
                        onClickDelete={onClickDelete}
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
        </>
    );
};

export default FaqListContent;
