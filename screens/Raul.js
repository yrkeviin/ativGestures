import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RaulScreen() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Text style={styles.buttonText}>Tá Raul</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
    },
    buttonText: {
        fontSize: 20,
        color: "black",
        padding: 10,
        borderRadius: 5,
    },
})