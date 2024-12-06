import {
  StyleSheet,
  Text,
  Pressable,
  ViewStyle,
  TextStyle,
  View
} from "react-native";
import React from "react";

interface ButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  color?: string;
  textColor?: string;
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
  color = "#fff",
  textColor = "#000",   
  icon
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: color }, style]}>
      {/* Render SVG Icon */}
      {icon && <View style={{ marginRight: 1 }}>{icon}</View>}
      
      {/* Button Text */}
      {title && <Text style={[styles.text, { color: textColor }, textStyle]}>{title}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 600,
    color: "#fff",
  },
  button: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});

export default Button;
