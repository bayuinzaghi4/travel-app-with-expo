import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import { ArrowRight } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

export const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo Header */}
        <View style={styles.logoContainer}>
          <View style={styles.logoWrapper}>
            <Image
              source={require("./../../assets/welcomeLogo.png")}
              style={styles.illustrationLogo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.logoText}>Travel System</Text>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <Text style={styles.title}>
            Effortlessly Manage{"\n"}Your Business Travel
          </Text>
          <Text style={styles.description}>
            Streamline all your business travel needs with our all-in-one app,
            from booking to expense tracking and report submission.
          </Text>

          {/* Image */}
          <View style={styles.illustrationContainer}>
            <Image
              source={require("./../../assets/traveler.png")}
              style={styles.illustration}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Get Started Button */}
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <ArrowRight size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 50,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 48,
  },
  logoWrapper: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 2,
  },
  logoText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4B5FE1",
  },
  mainContent: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1A1A1A",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 36,
  },
  description: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 24,
    maxWidth: width * 0.8,
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  illustration: {
    width: width * 1,
    height: height * 0.6,
  },
  illustrationLogo: {
    width: 18,
    height: 20,
  },
  button: {
    position: "absolute",
    bottom: 40,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#4B5FE1",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#4B5FE1",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
});
