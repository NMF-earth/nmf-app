import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MethodologyScreen from "../../screens/Methodology";

const Stack = createStackNavigator();

const MethodologyModalNavigator = (): React.ReactElement => (
    <Stack.Navigator>
        <Stack.Screen
            name="Methodology"
            options={MethodologyScreen.navigationOptions}
            component={MethodologyScreen}
        />
    </Stack.Navigator>
);

export default MethodologyModalNavigator;
