import { StyleSheet, View } from "react-native";
import SearchButton from "../../components/SearchButton";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import { SafeAreaView } from "react-native-safe-area-context";

export function Updates() {
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#3F51B5" />
      <SearchButton style={styles.SearchButton} placeholder="Search" />
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
});
