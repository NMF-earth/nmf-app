interface EmissionsListItemProps {
  id: string;
  isMitigated: boolean;
  name?: string;
  iconName: string;
  title: string;
  co2value: number;
  onPress: () => void;
  emissionModelType: string;
}

export default EmissionsListItemProps;
