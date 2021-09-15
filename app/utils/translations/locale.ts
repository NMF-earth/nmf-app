const getLocaleForMoment = (language = ""): string => {
  if (language === "zh") {
    return "zh-cn";
  }

  return language;
};

export { getLocaleForMoment };
