import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Raul from "../screens/Negao";
import Negao from "../screens/Raul";

const Stack = createNativeStackNavigator();

export default function NegaoNavigator() {
    return (
        <Stack.Navigator initialRouteName="Raul" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Raul" component={Negao} />
            <Stack.Screen name="Negao" component={Raul} />
        </Stack.Navigator>
    );
}