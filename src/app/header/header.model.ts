export enum PageId {
  SERVICES = 'SERVICES',
  TEAM ='TEAM',
  CONTACT='CONTACT'
}

export interface G2spPage {
  id: PageId,
  url: string
}

export const PAGE_REFERENTIAL: G2spPage[] = [
  {
    id: PageId.SERVICES,
    url: '/beta-version/services'
  },
  {
    id: PageId.TEAM,
    url: '/beta-version/team'
  },
  {
    id: PageId.CONTACT,
    url: '/beta-version/contact'
  }
]