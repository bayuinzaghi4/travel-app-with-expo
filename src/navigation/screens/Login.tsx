import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import axios from "axios";
import IconText from "../../components/IconText";

interface LoginFormData {
  USERNAME: string;
  PASSWORD: string;
  token: string;
}

export function Login() {
  const navigation = useNavigation();
  const [USERNAME, setUSERNAME] = useState("");
  const [PASSWORD, setPASSWORD] = useState("");
  const [showPASSWORD, setShowPASSWORD] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    navigation.navigate("HomeTabs");
    //  try {
    //       const response = await axios.post(
    //         "http://10.32.125.41:8080/travel/LoginTravel",
    //         {
    //           USERNAME,
    //           PASSWORD,
    //         }
    //       );
    //       console.log('peler',response.data.statusCode);

    //       if (response.data.statusCode === 200) {
    //         navigation.navigate("HomeTabs");
    //         // Alert.alert("Login Succes", `Welcome, ${USERNAME}`);
    //         console.log("token", response.data.token);

    //       }

    //     } catch(e) {
    //       console.log(e)
    //     }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.logoContainer}>
            <IconText
              textStyle={{ color: "black" }}
              style={styles.iconTextLeft}
              imageUri={require("./../../assets/welcomeLogo.png")}
            />
          </View>
          {/* Welcome Text */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>
              Streamline all your business travel needs with our all-in-one app,
              from booking to expense tracking and report submission.
            </Text>
          </View>
          {/* Form */}
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>USERNAME</Text>
              <TextInput
                style={styles.input}
                placeholder="Numb regist"
                value={USERNAME}
                onChangeText={setUSERNAME}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>PASSWORD</Text>
              <View style={styles.PASSWORDContainer}>
                <TextInput
                  style={[styles.input, styles.PASSWORDInput]}
                  placeholder="PASSWORD"
                  value={PASSWORD}
                  onChangeText={setPASSWORD}
                  secureTextEntry={!showPASSWORD}
                />
                <TouchableOpacity
                  onPress={() => setShowPASSWORD(!showPASSWORD)}
                  style={styles.eyeIcon}
                >
                  <Text>{showPASSWORD ? "👁️" : "👁️‍🗨️"}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Button
              title="Log In"
              textStyle={styles.butonLogout}
              onPress={handleLogin}
              style={styles.loginButton}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    padding: 24,
    paddingTop: 100,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  welcomeContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  form: {
    gap: 16,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    color: "#000",
  },
  PASSWORDContainer: {
    position: "relative",
  },
  PASSWORDInput: {
    paddingRight: 48,
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: 12,
  },
  loginButton: {
    backgroundColor: "#3F51B5",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  butonLogout: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  iconTextLeft: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
  },
});
