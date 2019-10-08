import React from "react";
import { colors } from "mitrasConstants";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

// import { SvgIcon } from "mitrasCustSvgIcons";
// //localization  

//TODO: RestoreAndWalletSetupScreen
//import { OnBoarding } from "mitrasCompLanch";
import { Launch } from "mitrasCompLanch";






//TODO: StackNavigator:ONBoarding
const OnBoardingStackNavigator = createStackNavigator(
  {
    OnBoarding: {
      screen: Launch, //OnBoarding,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: "OnBoarding"
  }
);

//TODO: RootNavigator
//TODO: RootNavigator:createRootNavigator
export const createRootNavigator = (
  signedIn = false,
  screenName = "OnBoardingNavigator"
) => {
  return createStackNavigator(
    {
      OnBoardingNavigator: {
        screen: OnBoardingStackNavigator,
        navigationOptions: { header: null }
      },
    },
    {
      initialRouteName: signedIn ? "OnBoardingNavigator" : screenName //"TabbarBottom" //
    }
  );
};
