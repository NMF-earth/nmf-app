export enum GuideCategory {
  kitchen = "kitchen",
  technology = "technology",
  food = "food"
}

export interface Guide {
  title: string;
  category: GuideCategory;
  body: string;
  key: string;
}

