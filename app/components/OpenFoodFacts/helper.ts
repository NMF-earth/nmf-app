export const getImageRef = (grade: string | number): number => {
  if (typeof grade === "string") {
    /* if ecoscore or nutriscore */
    switch (grade) {
      case "a":
        return 1;
      case "b":
        return 2;
      case "c":
        return 3;
      case "d":
        return 4;
      case "e":
        return 5;
      default:
        return 0;
    }
  } else if (typeof grade === "number") {
    /* if nova */
    if (grade == 1 || grade == 2 || grade == 3 || grade == 4) {
      return grade;
    } else {
      return 0;
    }
  }
};
