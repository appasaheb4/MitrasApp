import React from "react";
import { colors } from "mitrasConstants";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

// import { SvgIcon } from "mitrasCustSvgIcons";
// //localization  

//TODO: RestoreAndWalletSetupScreen
import { OnBoarding } from "mitrasCompLanch";
import { Login, Registration } from "mitrasCompLogin";






//TODO: StackNavigator:ONBoarding
const OnBoardingStackNavigator = createStackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding,
      navigationOptions: { header: null }
    },
    Login: {
      screen: Login,
      navigationOptions: { header: null }
    },
    Registration: {
      screen: Registration,
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
