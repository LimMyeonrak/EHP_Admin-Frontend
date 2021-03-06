/* eslint-disable */
import axios from 'axios';
import { Cookies } from 'react-cookie';
import service from '../request';
import { Notice, NoticeList, Answer } from './noticesType';

export const getNotices = async (payload, callback: any): Promise<NoticeList> => {
    const { data } = await service.get(`/board-api/cms/notices`, { params: payload });
    return callback(data);
};

export const postNotices = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/notices`,
        method: 'post',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};

export const getNotice = async (payload, callback: any): Promise<Notice> => {
    const { data } = await service.get(`/board-api/cms/notices/${payload}`);
    return callback(data);
};

export const putNotice = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/notices`,
        method: 'put',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
export const deleteNotice = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/notices/${payload}`,
        method: 'delete',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
// {"noticeTargetIds":"9","targetIds":null}
export const deleteNotices = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/notices`,
        method: 'delete',
        data: payload
    });
    if (data !== null) {
        callback(data);
    }
};

export const postNoticesAnswer = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/notices/answer`,
        method: 'post',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
export const getNoticeAnswer = async (payload, callback: any): Promise<Answer> => {
    const { data } = await service.get(`/board-api/cms/notices/answer/${payload}`);
    return callback(data);
};

export const putNoticeAnswer = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/notices/answer`,
        method: 'put',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
export const deleteNoticeAnswer = async (payload, callback: any) => {
    console.log('deleteNoticeAnswer');
    console.log(payload);
    const { data = null } = await service({
        url: `/board-api/cms/notices/answer/${payload.articleIdx}/${payload.answerIdx}`,
        method: 'delete'
    });
    if (data !== null) {
        callback(data);
    }
};

export const apiExcelFileDownload = async (payload: any) => {
    await service
        .get(
            // `/board-api/cms/notices/excel?page=1&limit=30&searchDateType=0&startDate=2022-01-10&endDate=2022-03-12&noticeTarget=&isConfirm=1&isTopFix=&isUse=1&searchRegisterName=&searchWord=&noticeTargetIds=&targetIds=&userId=&noticeTarget=&isTopFix=&searchRegisterName=&searchWord=&noticeTargetIds=&targetIds=&userId=`,
            payload.url,
            { responseType: 'blob', params: payload.params }
        )
        .then(response => {
            const url = window.URL.createObjectURL(
                new Blob([response.data], { type: response.headers['content-type'] })
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', payload.fileName);
            document.body.appendChild(link);
            link.click();
        });
};
/**
-- ?????? API
boardType????????? ?????? (3 : ????????? 1:1?????? ?????????, 0: ????????????)
articleAttachType ????????? ?????? ?????? ?????????.(1:1 ????????? ????????????: 3,???????????? ?????? : 5 , ????????? ?????? : 6)
articleType ????????? ?????? (???????????? ?????? : Q , ????????? ?????? : A)
replyIdx ????????? id???
articleIdx ???????????? id???
replyContent ?????? ??????
files?????? 
*/
/*
    -F 'files=@hello_notice_answer_article_Reply_01.txt;type=text/plain' \
    -F 'files=@hello_notice_answer_article_Reply_02.txt;type=text/plain' \
    -F 'boardType=0' \
    -F 'articleType=Q' \
    -F 'articleAttachType=5' \
    -F 'articleIdx=39' \
    -F 'replyLevel=0' \
    -F 'parentReplyIdx=null' \
    -F 'replyContent=39 ???????????? ????????? ????????? ????????? ??????....!' \
    -F 'files=null'
 */
export const postReply = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/reply`,
        method: 'post',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
/*
    'boardType=0' \
    -F 'articleType=A' \
    -F 'articleAttachType=6' \
    -F 'replyIdx=92' \
    -F 'articleIdx=103' \
    -F 'replyContent=39 ???????????? 103 ?????? ????????? ?????? ??????....! ???????????????....' \
    -F 'files=null'
 */
export const putReply = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/reply`,
        method: 'PUT',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
// {"boardType":0,"articleType":"A","replyIdx":96,"articleIdx":103,"articleAttachType":6}
export const deleteReply = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/reply`,
        method: 'DELETE',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};

export const getPatnerQuestions = async (payload, callback: any) => {
    const { data = null } = await service.get(`/board-api/cms/partners/questions/`, { params: payload });
    if (data !== null) {
        callback(data);
    }
};

export const getPatnerQuestion = async (payload, callback: any) => {
    const { data = null } = await service.get(`/board-api/cms/partners/questions/${payload}`);
    if (data !== null) {
        callback(data);
    }
};

export const postPatnerQuestions = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/questions`,
        method: 'post',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};

export const putPatnerQuestions = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/questions`,
        method: 'put',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};

export const putPatnerQuestionsStatus = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/questions/status`,
        method: 'put',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
export const deletePatnerQuestion = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/questions/${payload}`,
        method: 'delete'
    });
    if (data !== null) {
        callback(data);
    }
};

export const deletePatnerQuestions = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/questions`,
        method: 'delete',
        data: payload
    });
    if (data !== null) {
        callback(data);
    }
};
export const deletePatnerQnA = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/question-answer/${payload}`,
        method: 'delete',
        data: payload
    });
    if (data !== null) {
        callback(data);
    }
};

export const postPatnerAnswers = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/answers`,
        method: 'post',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};

export const putPatnerAnswers = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/answers`,
        method: 'put',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
export const deletePatnerAnswer = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/answers/${payload.idx}`,
        method: 'delete'
    });
    if (data !== null) {
        callback(data);
    }
};
export const deletePatnerAnswers = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/answers`,
        method: 'delete',
        data: payload
    });
    if (data !== null) {
        callback(data);
    }
};

export const apiFileDownload = async (payload: any) => {
    await service
        .get(`/board-api/cms/files/download`, { params: { idx: payload.idx }, responseType: 'blob' })
        .then(response => {
            const url = window.URL.createObjectURL(
                new Blob([response.data], { type: response.headers['content-type'] })
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', payload.fileName);
            document.body.appendChild(link);
            link.click();
        });
};
