/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const mockData = {
    user: { data: { userId: '001', name: '오승근', deptNm: '개발팀' } },
    menu: {
        data: [
            {
                icon: null,
                key: 'partnerMgmt',
                label: '게시판관리',
                path: '/menu',
                level: 0,
                parentKey: '',
                components: ''
            },
            {
                icon: null,
                key: 'partnerNoticeList',
                label: '파트너 공지사항',
                path: '/partner/notice/list',
                level: 1,
                parentKey: 'partnerMgmt',
                components: 'partnerNoticeList'
            },
            {
                icon: null,
                key: 'partnerNoticeNew',
                label: '공지사항 등록',
                path: '/partner/notice/new',
                level: 1,
                parentKey: 'partnerMgmt',
                components: 'partnerNoticeNew'
            },
            {
                icon: null,
                key: 'partnerDirectList',
                label: '파트너 1:1 문의',
                path: '/notices/direct/',
                level: 1,
                parentKey: 'partnerMgmt',
                components: 'partnerDirectList'
            },
            {
                icon: null,
                key: 'partnerFaqList',
                label: 'FAQ',
                path: '/partner/faq/list',
                level: 1,
                parentKey: 'partnerMgmt',
                components: 'partnerFaqList'
            },
            {
                icon: null,
                key: 'partnerFaqNew',
                label: 'FAQ 등록',
                path: '/partner/faq/new',
                level: 1,
                parentKey: 'partnerMgmt',
                components: 'partnerFaqNew'
            },

            {
                icon: null,
                key: 'sample',
                label: 'Sample',
                path: '/sample',
                level: 0,
                parentKey: '',
                components: 'sample'
            },
            {
                icon: null,
                key: 'terms',
                label: '서비스 이용 약관',
                path: '/terms/new',
                level: 0,
                parentKey: '',
                components: 'terms'
            },
            {
                icon: null,
                key: 'comCodeMgmt',
                label: '공통코드 관리',
                path: '/menu',
                level: 0,
                parentKey: '',
                components: ''
            },
            {
                icon: null,
                key: 'comCode',
                label: '공통코드',
                path: '/commonCode/list',
                level: 1,
                parentKey: 'comCodeMgmt',
                components: 'commonCodeGroupList'
            },
            {
                icon: null,
                key: 'popupMgmt',
                label: '팝업관리',
                path: '/menu',
                level: 0,
                parentKey: '',
                components: ''
            },
            {
                icon: null,
                key: 'popupList',
                label: '목록',
                path: '/popup/list',
                level: 1,
                parentKey: 'popupMgmt',
                components: 'popupList'
            },
            {
                icon: null,
                key: 'popupNew',
                label: '등록',
                path: '/popup/new',
                level: 1,
                parentKey: 'popupMgmt',
                components: 'popupNew'
            }
        ]
    },
    userList: []
};
export default mockData;
