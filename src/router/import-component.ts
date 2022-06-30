import { lazy } from 'react';

// 파트너사 게시판관리
const PartnerNoticeList = lazy(() => import('../pages/Partner/notice/list'));
const PartnerNoticeNew = lazy(() => import('../pages/Partner/notice/new'));
const PartnerDirectList = lazy(() => import('../pages/Partner/direct/list'));
const PartnerFaqList = lazy(() => import('../pages/Partner/faq/list'));
const PartnerFaqNew = lazy(() => import('../pages/Partner/faq/new'));
const PopupList = lazy(() => import('../pages/popup/list'));
const PopupNew = lazy(() => import('../pages/popup/new'));

// sample
const Sample = lazy(() => import('../pages/SamplePage'));

// 이용약관
const Terms = lazy(() => import('../pages/terms/new'));

// 파트너사 게시판관리
const CommonCodeGroupList = lazy(() => import('../pages/comCode/list'));

export const COMPONENT_LIST = {
    partnerNoticeList: PartnerNoticeList,
    partnerNoticeNew: PartnerNoticeNew,
    partnerDirectList: PartnerDirectList,
    partnerFaqList: PartnerFaqList,
    partnerFaqNew: PartnerFaqNew,
    popupList: PopupList,
    popupNew: PopupNew,

    // sample
    sample: Sample,

    terms: Terms,

    commonCodeGroupList: CommonCodeGroupList
};
