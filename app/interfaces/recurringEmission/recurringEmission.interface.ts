import { EmissionPayload } from "../emission";

enum PeriodicityType {
  weekly = "weekly",
  monthly = "monthly",
}

enum WeekDays {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

interface RecurringEmission extends EmissionPayload {
  id: string;
  periodType: PeriodicityType;
  weekDays: Array<WeekDays>;
  times: number;
}

export { RecurringEmission, PeriodicityType, WeekDays };
