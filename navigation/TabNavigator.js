import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/Kevin";
import RaulScreen from "../screens/Raul";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false,
                headerTitle: "Página Inicial dos Memes",
                headerStyle: {
                    backgroundColor: "red",
                    height: 100,
                },
                headerTintColor: "white",
                headerTitleStyle: {
                    fontSize: 30,
                    fontWeight: "bold",
                },
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: "white",
                    borderRadius: 50,
                    height: 100,
                    position: "absolute",
                    margin: 15,
                },
                tabBarLabelStyle: {
                    fontSize: 20,
                },
                tabBarIconStyle: {
                    marginTop: 15,
                    marginBottom: 5,
                },
                tabBarActiveTintColor: "lightgreen",
                tabBarInactiveTintColor: "black",
            }}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen} options= {{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
            }}
            />

            <Tab.Screen name="RaulScreen" component={RaulScreen} options= {{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="raul" color={color} size={size} />
                ),
            }}
            />
        </Tab.Navigator>
    );
}

