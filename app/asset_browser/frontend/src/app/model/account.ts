interface AdGroups {
  id: number;
  name: string;
}

interface Campaigns {
  id: number;
  name: string;
  adGroups?: AdGroups[];
}

export interface Account {
  id: number;
  name: string;
  campaigns?: Campaigns[];
}
