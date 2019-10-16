import React, { Component } from "react";
import {
  View,
  AsyncStorage,
  StyleSheet,
  ImageBackground,
  Animated,
  Easing,
  Image,
} from "react-native";
import { Text } from "native-base";
import LinearGradient from "react-native-linear-gradient";

import { images, asyncStorageKeys } from "mitrasConstants";


//TODO: Custome Object   
import { StatusBar } from "mitrasComponents/StatusBar";

interface Props {
  onComplited: Function;
}

export default class Launch extends Component<Props, any> {
  constructor ( props: any ) {
    super( props );
    this.state = ( {
      centerLogo: null,
      centerLogoOpticy: new Animated.Value( 0 )
    } )
  }

  async componentDidMount() {
    let rootViewController = await AsyncStorage.getItem( asyncStorageKeys.rootViewController );
    setTimeout( () => {
      if ( rootViewController == "TabbarNavigator" ) {
        this.props.onComplited( false, rootViewController );
      }
      else {
        this.props.onComplited( false, "OnBoardingNavigator" );
      }
    }, 3000 );

  }

  render() {
    return (
      <LinearGradient
        colors={ [ '#8948D2', '#D360F9', ] }
        style={ { flex: 1, alignItems: "center" } }
      >
        <StatusBar hidden />
        <Image
          source={ images.appIcon }
          resizeMode="contain"
          style={ { flex: 1, tintColor: "#ffffff", width: 150, height: 150, marginTop: 200 } }
        />
        <Text style={ { flex: 1, textAlign: "center", color: "#ffffff", fontSize: 40, margin: 20 } }>Mitr</Text>
        <Text style={ { flex: 1, textAlign: "center", color: "#ffffff" } }>Dummay Text</Text>
        <Text style={ { flex: 0.2, textAlign: "center", color: "#ffffff" } }>@ 2019 Design Studio</Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
} );
