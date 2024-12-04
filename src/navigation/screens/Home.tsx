import { Text } from "@react-navigation/elements";
import { StyleSheet, View, SafeAreaView, Image } from "react-native";
import { Bell } from "lucide-react-native";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#3F51B5" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <View style={styles.sectionContainer}>
            <View>
              <Image
                source={require("./../../assets/travelLogo.png")}
                style={styles.logoApp}
              />
              <Text style={styles.sectionTitle}>Travel System</Text>
            </View>
            <View>
              <Bell size={25} color="#fff" />
            </View>
          </View>
        </View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 109,
    backgroundColor: "#3F51B5",
  },
  sectionContainer: {
    flexDirection: "row",
    marginTop: 14,
  },
  logoApp: {
    width: 20,
    height: 20,
    marginLeft: 25,
  },
  sectionTitle: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 700,
    color: "#fff",
  },
});
