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
          <View style={styles.sectionContainer}>
            <View style={styles.container1}>
              <Image
                source={require("./../../assets/travelLogo.png")}
                style={styles.logoApp}
              />
              <Text style={styles.sectionTitle}>Travel System</Text>
            </View>
            <View>
              <Bell size={25} color="#fff" style={styles.icon}/>
            </View>
          </View>
          <View style={styles.titleContainer}>
        <Text style={styles.welcomeTitle}>Selamat Datang</Text>
        <Text style={styles.userTitle}>Dias Bayu Inzaghi - ISTD</Text>
        </View>
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
    justifyContent: 'space-between',
  },
  container1: {
    flexDirection: 'row'
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
  icon: {
    marginRight: 25
  },
  titleContainer: {
    marginLeft: 25,
    marginTop: 13
  },
  welcomeTitle: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 400,
  },
  userTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 700,
  },
});
