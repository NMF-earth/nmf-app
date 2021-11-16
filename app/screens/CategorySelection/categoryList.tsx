import { EmissionType } from "interfaces";

const categories = [
  {
    icon: "md-restaurant",
    emissionType: EmissionType.meal,
  },
  {
    icon: "md-airplane",
    emissionType: EmissionType.transport,
  },
  {
    icon: "barcode-sharp",
    emissionType: EmissionType.productScanned,
  },
  {
    icon: "md-play-circle",
    emissionType: EmissionType.streaming,
  },
  {
    icon: "md-card",
    emissionType: EmissionType.purchase,
  },
  {
    icon: "md-shirt",
    emissionType: EmissionType.fashion,
  },
  {
    icon: "md-nutrition",
    emissionType: EmissionType.food,
  },
  {
    icon: "md-flash",
    emissionType: EmissionType.electricity,
  },
  {
    icon: "md-build",
    emissionType: EmissionType.custom,
  },
];

export { categories };
