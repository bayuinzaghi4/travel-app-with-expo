import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  Animated,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Bell, Menu, ArrowLeft, FileText, Clock } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import SearchButton from "../../components/SearchButton";
import TravelCard from "../../components/TravelCard";
import Button from "../../components/Button";
import travelData from "./dummy";
import IconText from "../../components/IconText";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeButton, setActiveButton] = useState<string>("open");

  const drawerAnimation = React.useRef(new Animated.Value(0)).current;

  const toggleDrawer = () => {
    const toValue = isDrawerOpen ? 0 : 1;
    Animated.timing(drawerAnimation, {
      toValue,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setIsDrawerOpen(!isDrawerOpen);
  };

  const translateX = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-280, 0],
  });
  const renderDrawer = () => (
    <Animated.View
      style={[
        styles.drawer,
        {
          transform: [{ translateX }],
        },
      ]}
    >
      <View style={styles.drawerHeader}>
        <View style={styles.IconText}>
          <Image
            source={require("./../../assets/travelLogo.png")}
            style={styles.logo}
          />
          <Text style={styles.drawerTitle}>Travel System</Text>
        </View>
        <TouchableOpacity onPress={toggleDrawer} style={styles.backButton}>
          <ArrowLeft color="#fff" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.drawerContent}>
        <TouchableOpacity style={styles.drawerItem}>
          <FileText color="#fff" size={20} />
          <Text style={styles.drawerItemText}>Travel Settlement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem}>
          <FileText color="#fff" size={20} />
          <Text style={styles.drawerItemText}>Approval</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem}>
          <Clock color="#fff" size={20} />
          <Text style={styles.drawerItemText}>History</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );

  const handleButtonPress = (buttonName: string): void => {
    if (activeButton !== buttonName) {
      setActiveButton(buttonName);
    }
  };

  const getButtonColor = (buttonName: string) => {
    return activeButton === buttonName ? "#3F51B5" : "#fff";
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#3F51B5" />
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Menu size={24} color="white" onPress={toggleDrawer} />
          <IconText />
          <Bell
            size={24}
            color="white"
            onPress={() => navigation.navigate("Notification")}
          />
        </View>
        <Text style={styles.userName}>Travel Settlement</Text>
      </View>

      {/* Search Button */}
      <SearchButton placeholder="Search" />

      {/* Switch Button */}
      <View style={styles.tabs}>
        <Button
          title="Open"
          onPress={() => handleButtonPress("open")}
          style={StyleSheet.flatten([
            styles.ButtonCard,
            { backgroundColor: getButtonColor("open") },
          ])}
          textStyle={styles.titlee}
        />
        <Button
          title="Draft"
          onPress={() => handleButtonPress("draft")}
          style={StyleSheet.flatten([
            styles.ButtonCard,
            { backgroundColor: getButtonColor("draft") },
          ])}
          textStyle={styles.titlee}
        />
        <Button
          title="Waiting"
          onPress={() => handleButtonPress("waiting")}
          style={StyleSheet.flatten([
            styles.ButtonCard,
            { backgroundColor: getButtonColor("waiting") },
          ])}
          textStyle={styles.titlee}
        />
      </View>
      {/* Flatlist */}
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={travelData}
        renderItem={({ item }) => (
          <TravelCard
            key={item.id}
            referenceNumber={item.referenceNumber}
            travelType={item.travelType}
            locations={item.locations}
            travelerName={item.travelerName}
            travelerId={item.travelerId}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      {renderDrawer()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#3F51B5",
    padding: 16,
    paddingTop: 8,
    height: 100,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    width: "100%",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
    textAlign: "center",
  },
  userName: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 20,
    marginLeft: 5,
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    width: 20,
    height: 20,
  },
  titlee: {
    fontSize: 12,
  },
  IconText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tabs: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 5,
    justifyContent: "space-between",
  },
  tab: {
    marginRight: 16,
    paddingVertical: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#3F51B5",
  },
  tabText: {
    color: "#666",
    fontSize: 16,
  },
  activeTabText: {
    color: "#3F51B5",
    fontWeight: "600",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  ButtonCard: {
    width: 100,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  flatListContainer: {
    flexGrow: 1, // Pastikan FlatList menggunakan ruang yang tersedia
    paddingHorizontal: 16,
    justifyContent: "center", // Memusatkan item
    alignItems: "center", // Memusatkan item secara horisontal
  },
  drawerHeader: {
    padding: 16,
    paddingLeft: 56,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.1)",
  },
  backButton: {
    position: "absolute",
    left: 16,
    top: 16,
  },
  drawerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  drawerContent: {
    padding: 16,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  drawerItemText: {
    color: "#fff",
    marginLeft: 16,
    fontSize: 16,
  },
  drawer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 280,
    backgroundColor: "#3949AB",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});

export default Home;
