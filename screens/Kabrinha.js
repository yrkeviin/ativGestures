import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Kabrinha() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Kevin")}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.giantfreakinrobot.com/wp-content/uploads/2023/05/leonardo-dicaprio-point.png",
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
    backgroundColor: "yellow",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});