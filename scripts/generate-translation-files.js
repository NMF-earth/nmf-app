const paths = [
  "../app/screens/Act/translations",
  "../app/screens/Budget/translations",
  "../app/screens/Emissions/translations",
  "../app/screens/Settings/translations",
  "../app/screens/MonthlyBudget/translations",
  "../app/screens/ComingSoon/translations",
  "../app/screens/Methodology/translations",
  "../app/screens/AddEmission/translations",
  "../app/screens/EmissionItem/translations",
  "../app/screens/Intro/translations",
  "../app/screens/About/translations",
  "../app/screens/SupportUs/translations",
  "../app/screens/MyLocation/translations",
  "../app/screens/ActDetail/translations",
  "../app/components/NoEmission/translations",
  "../app/utils/ui/translations",
];

const englishFile = "en.json";

const fs = require("fs");

for (const path in paths) {
  fs.copyFile(path + englishFile, path + "rn.json", (err) => {
    if (err) throw err;
    console.log("File was copied to destination");
  });
}
