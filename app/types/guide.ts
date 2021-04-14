export enum GuideCategory {
  home = "home",
  digital = "digital",
}

export interface Guide {
  title: string;
  category: GuideCategory;
  body: string;
  key: string;
}
