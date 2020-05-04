interface AdGroups {
  id: number;
  name: string;
  assets?: any[];
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
