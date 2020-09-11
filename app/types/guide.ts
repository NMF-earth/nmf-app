export enum GuideCategory {
  kitchen = "kitchen",
  technology = "technology",
}

export interface Guide {
  title: string;
  category: GuideCategory;
  body: string;
  key: string;
}
