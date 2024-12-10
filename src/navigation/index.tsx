import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderButton, Text } from "@react-navigation/elements";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import riwayat from "../assets/riwayat.png";
import profile from "../assets/profile.png";
import home from "../assets/home.png";
import { Profile } from "./screens/Profile";
import { Settings } from "./screens/Settings";
import { Updates } from "./screens/Updates";
import { NotFound } from "./screens/NotFound";
import Home from "./screens/Home";
import Upload from "./screens/Upload";
import Notification from "./screens/Notification";

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#3F51B5', 
        tabBarInactiveTintColor: 'gray', 
        tabBarStyle: { backgroundColor: 'white' }, 
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Beranda',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={home}
              style={{ width: size, height: size }}
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Riwayat"
        component={Updates}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={riwayat}
              style={{ width: size, height: size }}
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={profile}
              style={{ width: size, height: size }}
              tintColor={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: "Home",
        headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
    },
    Settings: {
      screen: Settings,
    },
    Upload: {
      screen: Upload,
      options: {
        headerShown: false,
      },
    },
    Notification: {
      screen: Notification,
      options: {
        headerShown: false,
      },
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: "404",
      },
      linking: {
        path: "*",
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
