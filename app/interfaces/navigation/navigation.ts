import { StackNavigationOptions } from "@react-navigation/stack";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

interface NavStatelessComponent extends React.FC {
  navigationOptions?: StackNavigationOptions | NativeStackNavigationOptions;
}

export default NavStatelessComponent;
