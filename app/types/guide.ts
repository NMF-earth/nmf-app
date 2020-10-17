export enum GuideCategory {
  kitchen = "kitchen",
  digital = "digital",
}

export interface Guide {
  title: string;
  category: GuideCategory;
  body: string;
  key: string;
}
