import React from "react";
import { Platform } from "react-native";

import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";

import { MakeHomeScreen, MakeOnboardingScreen } from "@main/factories/screens";
import { CustomNavigationButton } from "@presentation/components";
import { theme } from "@presentation/styles";

import BarsOutlineIcon from "@presentation/assets/icons/bars-outline-icon.svg";
import HomeOutlineIcon from "@presentation/assets/icons/home-outline-icon.svg";
import UserOutlineIcon from "@presentation/assets/icons/user-outline-icon.svg";
import SearchIcon from "@presentation/assets/icons/search-outline-icon.svg";
import HomeFillIcon from "@presentation/assets/icons/home-fill-icon.svg";
import UserFillIcon from "@presentation/assets/icons/user-fill-icon.svg";
import BarsFillIcon from "@presentation/assets/icons/bars-fill-icon.svg";
import PlusIcon from "@presentation/assets/icons/plus-icon.svg";
import { IRenderTabIcon } from "./types";

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: theme.colors.neutral.black,
  tabBarInactiveTintColor: theme.colors.neutral["grey-3"],
  tabBarStyle: {
    backgroundColor: theme.colors.neutral.white,
    paddingVertical: Platform.OS === "ios" ? 20 : 0,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    height: 78,
    elevation: 24,
    shadowRadius: 16.0,
    shadowOpacity: 0.58,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderColor: theme.colors.transparent,
  },
};

const renderTabIcon = ({
  iconProps,
  focusedIcon: FocusedIcon,
  inactiveIcon: InactiveIcon,
}: IRenderTabIcon) => {
  const { color, focused } = iconProps;

  const props = {
    height: 24,
    width: 24,
    color,
  };

  if (focused) return <FocusedIcon {...props} />;
  return <InactiveIcon {...props} />;
};

export const PrivateTabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="home">
      <Tab.Screen
        name="home"
        component={MakeHomeScreen}
        options={{
          tabBarIcon: (props) =>
            renderTabIcon({
              iconProps: props,
              focusedIcon: HomeFillIcon,
              inactiveIcon: HomeOutlineIcon,
            }),
        }}
      />
      <Tab.Screen
        name="search"
        component={MakeHomeScreen}
        options={{
          tabBarIcon: (props) =>
            renderTabIcon({
              iconProps: props,
              focusedIcon: SearchIcon,
              inactiveIcon: SearchIcon,
            }),
        }}
      />
      <Tab.Screen
        name="create-quiz"
        component={MakeOnboardingScreen}
        options={{
          tabBarButton: (props) => <CustomNavigationButton.Root {...props} />,
          tabBarIcon: () => <PlusIcon color={theme.colors.neutral.white} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={MakeHomeScreen}
        options={{
          tabBarIcon: (props) =>
            renderTabIcon({
              iconProps: props,
              focusedIcon: BarsFillIcon,
              inactiveIcon: BarsOutlineIcon,
            }),
        }}
      />
      <Tab.Screen
        name="statistics"
        component={MakeHomeScreen}
        options={{
          tabBarIcon: (props) =>
            renderTabIcon({
              iconProps: props,
              focusedIcon: UserFillIcon,
              inactiveIcon: UserOutlineIcon,
            }),
        }}
      />
    </Tab.Navigator>
  );
};
