import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import { Header } from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { BellRing, MailOpen } from "lucide-react-native";

export default function Notification() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#3F51B5" />
      <Header
        style={styles.Notification}
        textStyle={{ color: "#fff" }}
        title="Notification"
        arrowIconStyle="#fff"
        onBackPress={() => navigation.goBack()}
        onChatPress={() => {}}
        icon={<BellRing size={24} color="#fff" />}
      />
      <View style={styles.content}>
        <MailOpen size={100} color="#909090" />
        <Text style={styles.text}>No Notification For Now</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  Notification: {
    backgroundColor: "#3F51B5",
  },
  content: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
  },
  text: {
    marginTop: 16, 
    fontSize: 18,
    color: "#909090",
    fontWeight: "bold",
  },
});
