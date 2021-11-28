import { WeekDays } from "interfaces";

import { TranslationKeys } from "../utils/translations/resources";

export const WEEK_DAYS: {
  dayIndex: number;
  nameKey: keyof TranslationKeys;
}[] = [
  { dayIndex: WeekDays.monday, nameKey: "UI_MONDAY" },
  { dayIndex: WeekDays.tuesday, nameKey: "UI_TUESDAY" },
  { dayIndex: WeekDays.wednesday, nameKey: "UI_WEDNESDAY" },
  { dayIndex: WeekDays.thursday, nameKey: "UI_THURSDAY" },
  { dayIndex: WeekDays.friday, nameKey: "UI_FRIDAY" },
  { dayIndex: WeekDays.saturday, nameKey: "UI_SATURDAY" },
  { dayIndex: WeekDays.sunday, nameKey: "UI_SUNDAY" },
];
