import { StyleSheet, Text, View, Image, ViewStyle, TextStyle } from "react-native";
import React from "react";

interface IconTextProps {
  imageUri?: any; 
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function IconText({ imageUri, style, textStyle }: IconTextProps) {
    const imageSource = imageUri ? imageUri : require("./../assets/travelLogo.png");

  return (
    <View style={[styles.container, style]}>
      <Image source={imageSource} style={styles.logo} />
      <Text style={[styles.Title, textStyle]}>Travel System</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    width: 24,  
    height: 24, 
  },
  Title: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
    textAlign: "center",
  },
});
