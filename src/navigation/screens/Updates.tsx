import { StyleSheet, View } from "react-native";
import SearchButton from "../../components/SearchButton";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";


export function Updates() {
  const navigation = useNavigation();

  const handleButton = () => {
    navigation.navigate('TravelSystem')
  }

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#3F51B5" />
      <SearchButton style={styles.SearchButton} placeholder="Search" />
      <View>
      <Button
            textStyle={styles.butonLogout}
            title="Log Out"
            onPress={handleButton}
            style={{ width: 170, backgroundColor: "#3F51B5" }}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  SearchButton: {
    marginTop: 25,
  },
  butonLogout: {
    marginLeft: 10,
    color: "#fff",
  },
});
