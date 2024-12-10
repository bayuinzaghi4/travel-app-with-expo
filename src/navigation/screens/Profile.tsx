import { Text } from "@react-navigation/elements";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LogOut } from "lucide-react-native";
import Button from "../../components/Button";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";

interface ProfileItemProps {
  label: string;
  value: string;
}

const ProfileItem: React.FC<ProfileItemProps> = ({ label, value }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export function Profile() {
  const navigation = useNavigation();
  const HandleLogout = () => {
    console.log("Djikri Ganeng");
    navigation.navigate('Upload')
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#3F51B5" />
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </View>

        {/* Section */}
        <View style={styles.profileSection}>
          <Image
            source={require("./../../assets/ProfileIcon.png")}
            style={styles.avatar}
          />
          <Text style={styles.name}>Moh. Dias Bayu Inzaghi</Text>
          <Text style={styles.NoReg}>2437271</Text>
        </View>

        {/* description */}
        <View style={styles.detailsSection}>
          <ProfileItem label="Kelas" value="5A" />
          <ProfileItem label="Position" value="Team Member" />
          <ProfileItem label="Division" value="Technical & PLC Dir" />
          <ProfileItem label="Department" value="Quality Div" />
          <ProfileItem label="Section" value="Vehicle & Part Quality Dept" />
          <ProfileItem
            label="Line"
            value="Component Quality Control Plant 2 Sec"
          />
          <ProfileItem label="Location" value="Karawang 1" />
        </View>

        {/* Button LogOut */}
        <View style={styles.buttonContainer}>
          <Button
            textStyle={styles.butonLogout}
            title="Log Out"
            onPress={HandleLogout}
            style={{ width: 170, backgroundColor: "#3F51B5" }}
            icon={<LogOut color="#fff" size={22} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
  },
  profileSection: {
    alignItems: "center",
    padding: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "800",
    color: "#3F51B5",
  },
  NoReg: {
    marginTop: 4,
    fontSize: 13,
    color: "#464646",
    fontWeight: "400",
  },
  detailsSection: {
    padding: 16,
  },
  itemContainer: {
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#EAEAEA",
    width: 328,
  },
  label: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    color: "#303030",
    fontWeight: 700,
  },
  buttonContainer: {
    alignItems: "center",
  },
  butonLogout: {
    marginLeft: 10,
    color: "#fff",
  },
});
