export enum PageId {
    SERVICES = 'SERVICES',
    TEAM = 'TEAM',
    CONTACT = 'CONTACT',
}

export interface G2spPage {
    id: PageId;
    url: string;
}

export const PAGE_REFERENTIAL: G2spPage[] = [
    {
        id: PageId.SERVICES,
        url: '/services',
    },
    {
        id: PageId.TEAM,
        url: '/team',
    },
    {
        id: PageId.CONTACT,
        url: '/contact',
    },
];
