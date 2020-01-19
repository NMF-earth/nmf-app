import time from "../";

it("convertMinutesToHoursAnMinutes should return the correct number of hours and minutes", () => {
  expect(time.convertMinutesToHoursAnMinutes(150)).toEqual({
    hours: 2,
    minutes: 30
  });

  expect(time.convertMinutesToHoursAnMinutes(45)).toEqual({
    hours: 0,
    minutes: 45
  });
});

it("if incorrect input, convertMinutesToHoursAnMinutes should return default value", () => {
  const defaultValue = {
    hours: 0,
    minutes: 0
  };

  expect(time.convertMinutesToHoursAnMinutes(0)).toEqual(defaultValue);

  expect(time.convertMinutesToHoursAnMinutes(-10)).toEqual(defaultValue);

  expect(time.convertMinutesToHoursAnMinutes("test")).toEqual(defaultValue);

  expect(time.convertMinutesToHoursAnMinutes(null)).toEqual(defaultValue);

  expect(time.convertMinutesToHoursAnMinutes(undefined)).toEqual(defaultValue);
});
