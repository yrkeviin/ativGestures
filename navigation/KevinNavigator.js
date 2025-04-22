import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Kevin from "../screens/Kevin";
import Kabrinha from "../screens/Kabrinha";

const Stack = createNativeStackNavigator();

export default function KevinNavigator() {
    return (
        <Stack.Navigator initialRouteName="Kevin" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Kevin" component={Kevin} />
            <Stack.Screen name="Kabrinha" component={Kabrinha} />
        </Stack.Navigator>
    );
}