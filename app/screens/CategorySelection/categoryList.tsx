import { EmissionType } from "interfaces";

const categories = [
  {
    icon: "restaurant",
    emissionType: EmissionType.meal,
  },
  {
    icon: "airplane",
    emissionType: EmissionType.transport,
  },
  {
    icon: "barcode-sharp",
    emissionType: EmissionType.productScanned,
  },
  {
    icon: "play-circle",
    emissionType: EmissionType.streaming,
  },
  {
    icon: "card",
    emissionType: EmissionType.purchase,
  },
  {
    icon: "shirt",
    emissionType: EmissionType.fashion,
  },
  {
    icon: "nutrition",
    emissionType: EmissionType.food,
  },
  {
    icon: "flash",
    emissionType: EmissionType.electricity,
  },
  {
    icon: "build",
    emissionType: EmissionType.custom,
  },
];

export { categories };
