import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import color from "../color";

export default function DashBoardScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.topBar}>
          <View style={styles.img} />
        </View>
      </SafeAreaView>

      <View style={styles.progress}></View>
      <View style={styles.body}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "flex-start",
    // alignItems:"flex-start"
  },
  img: {
    height: 80,
    width: 80,
    backgroundColor: color.DarkBlue,
    // flex:1
  },
  topBar: {
    height: 10,
    flexDirection: "row",
    // justifyContent:"flex-start"
  },
});
