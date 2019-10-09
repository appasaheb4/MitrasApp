import React from "react";
import { View } from "react-native";
import { Text } from "native-base";
import { colors } from "mitrasConstants";


import IconFontAwe from "react-native-vector-icons/FontAwesome";
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";

// import { SvgIcon } from "mitrasCustSvgIcons";
// //localization  

//TODO: RestoreAndWalletSetupScreen
import { OnBoarding } from "mitrasCompLanch";
import { Login, Registration } from "mitrasCompLogin";

//TODO: Drawer
import { Drawer } from "mitrasCompDrawer";

//TODO: Tabbar
import { Feeds } from "mitrasCompFeeds";







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

// Tabbar
const TabNavigator = createBottomTabNavigator(
  {
    Feeds: {
      screen: Feeds,
      navigationOptions: {
        tabBarLabel: "Feeds",
        drawerLockMode: "locked-open",
        tabBarIcon: ( { tintColor } ) => (
          <IconFontAwe name="home" color={ tintColor } size={ 22 } />
        )

      }
    },
    Fav: {
      screen: Feeds,
      navigationOptions: {
        tabBarLabel: "Fav",
        drawerLockMode: "locked-open",
        tabBarIcon: ( { tintColor } ) => (
          <IconFontAwe name="heart" color={ tintColor } size={ 22 } />

        )
      }
    },
    Order: {
      screen: Feeds,
      navigationOptions: {
        tabBarLabel: "Order",
        drawerLockMode: "locked-open",
        tabBarIcon: ( { tintColor } ) => (
          <View>
            <IconFontAwe name="shopping-cart" color={ tintColor } size={ 22 } />
            <Badge
              status="warning"
              badgeStyle={ { height: 15, width: 15 } }
              containerStyle={ { position: 'absolute', top: -4, right: -12 } }
              value="1"
            />
          </View>

        )

      }
    },
    Inbox: {
      screen: Feeds,
      navigationOptions: {
        tabBarLabel: "Inbox",
        drawerLockMode: "locked-open",
        tabBarIcon: ( { tintColor } ) => (
          <View>
            <IconFontAwe name="comment" color={ tintColor } size={ 22 } />
            <Badge
              status="warning"
              badgeStyle={ { height: 15, width: 15 } }
              containerStyle={ { position: 'absolute', top: -4, right: -12 } }
              value="4"
            />
          </View>

        )

      }
    },
    Profile: {
      screen: Feeds,
      navigationOptions: {
        tabBarLabel: "Profile",
        drawerLockMode: "locked-open",
        tabBarIcon: ( { tintColor } ) => (
          <IconFontAwe name="user" color={ tintColor } size={ 22 } />
        )

      }
    }
  },
  {
    initialRouteName: "Feeds",
    tabBarOptions: {
      showLabel: true,
      //swipeEnabled: true,
      showIcon: true,
      activeTintColor: "#FFD370",
      labelStyle: {
        fontSize: 11,
        fontFamily: "FiraSans-Medium"
      },
      style: {
        backgroundColor: colors.appColor
      },
      tabStyle: {}
    }
  }
);


//TODO: DrawerNavigator
const DrawerNavigator = createDrawerNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLabel: "Feeds",
        drawerIcon: ( { tintColor } ) => <IconFontAwe name="home" size={ 17 } />
      }
    }
  },
  {
    initialRouteName: "TabNavigator",
    contentComponent: Drawer,
    drawerPosition: "left",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    contentOptions: {
      activeTintColor: "#3F51B5",
      style: {
        flex: 1,
        paddingTop: 15
      }
    }
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
      TabbarNavigator: {
        screen: DrawerNavigator,
        navigationOptions: { header: null }
      }
    },
    {
      initialRouteName: signedIn ? "OnBoardingNavigator" : screenName //"TabbarBottom" //
    }
  );
};
