import { lazy } from 'react';

// 파트너사 게시판관리
const PartnerNoticeList = lazy(() => import('../pages/Partner/notice/list'));
const PartnerNoticeNew = lazy(() => import('../pages/Partner/notice/new'));
const PartnerDirectList = lazy(() => import('../pages/Partner/direct/list'));
const PartnerFaqList = lazy(() => import('../pages/Partner/faq/list'));
const PartnerFaqNew = lazy(() => import('../pages/Partner/faq/new'));

// sample

const Sample = lazy(() => import('../pages/SamplePage'));

export const COMPONENT_LIST = {
    partnerNoticeList: PartnerNoticeList,
    partnerNoticeNew: PartnerNoticeNew,
    partnerDirectList: PartnerDirectList,
    partnerFaqList: PartnerFaqList,
    partnerFaqNew: PartnerFaqNew,

    // sample
    sample: Sample
};
