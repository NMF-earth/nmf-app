import time from "../";

it("convertMinutesToHoursAnMinutes should return the correct number of hours and minutes", () => {
  expect(time.convertMinutesToHoursAnMinutes(150)).toEqual({
    hours: 2,
    minutes: 30,
  });

  expect(time.convertMinutesToHoursAnMinutes(45)).toEqual({
    hours: 0,
    minutes: 45,
  });
});

it("if incorrect input, convertMinutesToHoursAnMinutes should return default value", () => {
  const defaultValue = {
    hours: 0,
    minutes: 0,
  };

  expect(time.convertMinutesToHoursAnMinutes(0)).toEqual(defaultValue);

  expect(time.convertMinutesToHoursAnMinutes(-10)).toEqual(defaultValue);

  expect(time.convertMinutesToHoursAnMinutes(null)).toEqual(defaultValue);

  expect(time.convertMinutesToHoursAnMinutes(undefined)).toEqual(defaultValue);
});

it("getEarlierTime should return the earlier date object when 2 dates are compared", () => {
  // arrange
  const date1 = new Date();
  const date2 = new Date();
  date2.setTime(date2.getTime() + (1 + Math.floor(Math.random() * 100000))); // set the time to some future time

  // act
  const earlierDate = time.getEarlierDate(date1, date2);

  // assert
  expect(earlierDate.getTime()).toEqual(date1.getTime());
});

it("getLaterTime should return the later date object when 2 dates are compared", () => {
  // arrange
  const date1 = new Date();
  const date2 = new Date();
  date2.setTime(date2.getTime() + (1 + Math.floor(Math.random() * 100000))); // set the time to some future time

  // act
  const laterDate = time.getLaterDate(date1, date2);

  // assert
  expect(laterDate.getTime()).toEqual(date2.getTime());
});
