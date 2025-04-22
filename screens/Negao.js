import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Negao() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Raul")}>
            <Image
                style={styles.image}
                source={{
                    uri: "https://i.ytimg.com/vi/uK8nU7qzFrU/maxresdefault.jpg",
                }}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightpink",
    },
    buttonText: {
        fontSize: 20,
        color: "black",
        padding: 10,
        borderRadius: 5,
        textAlign: "center",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 50, 
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        borderWidth: 5,
        borderColor: "black",
    }
})