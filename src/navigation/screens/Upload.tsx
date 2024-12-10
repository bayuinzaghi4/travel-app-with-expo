import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

export default function Upload() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#3F51B5" />
      <Header
        title="Upload Document Settlement"
        onBackPress={() => navigation.goBack()}
        onChatPress={() => {
          /* handle chat press */
        }}
      />
      <View style={styles.content}>
        <Text style={styles.text}>Upload</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});
