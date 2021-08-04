import { gt, __, not, pipe } from "ramda";

const isAboveZero = gt(__, 0);
const isNotValidNumber = pipe(isAboveZero, not);

interface TimeProps {
  hours: number;
  minutes: number;
}

const convertMinutesToHoursAnMinutes = (minutes: number): TimeProps => {
  if (isNotValidNumber(minutes)) {
    return { hours: 0, minutes: 0 };
  }
  const hours = Math.floor(minutes / 60);
  const minutesAboveHours = Math.round(minutes) % 60;

  return { hours: hours, minutes: minutesAboveHours };
};

const getEarlierDate = (date1: Date, date2: Date): Date => (date1 < date2 ? date1 : date2);

const getLaterDate = (date1: Date, date2: Date): Date => (date1 > date2 ? date1 : date2);

export default { convertMinutesToHoursAnMinutes, getEarlierDate, getLaterDate };
