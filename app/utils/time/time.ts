import { gt, __, not, pipe } from "ramda";

const isAboveZero = gt(__, 0);
const isNotValidNumber = pipe(isAboveZero, not);

const convertMinutesToHoursAnMinutes = (minutes) => {
  if (isNotValidNumber(minutes)) {
    return { hours: 0, minutes: 0 };
  }
  const hours = Math.floor(minutes / 60);
  const minutesAboveHours = Math.round(minutes) % 60;

  return { hours: hours, minutes: minutesAboveHours };
};

export default { convertMinutesToHoursAnMinutes };
