import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { ArrowLeft, MessageSquare } from "lucide-react-native";

interface HeaderProps {
  onBackPress: () => void;
  onChatPress: () => void;
  title: string;
  icon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  arrowIconStyle?: string;
};

export const Header: React.FC<HeaderProps> = ({
  onBackPress,
  onChatPress,
  title,
  icon,
  style,
  textStyle,
  arrowIconStyle
}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onBackPress} style={styles.button}>
        <ArrowLeft size={24} color={arrowIconStyle}/>
      </TouchableOpacity>

      <Text style={[styles.title, textStyle]}>{title}</Text>

      <TouchableOpacity onPress={onChatPress} style={styles.button}>
        {icon || <MessageSquare size={24} color="#4B5FE1" />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    height: 55,
  },
  button: {
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    color: "#3C3C3B",
    flex: 1,
    textAlign: "center",
    marginHorizontal: 16,
  },
});
