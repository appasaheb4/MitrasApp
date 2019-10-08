import React, { Component } from "react";
import {
  View,
  AsyncStorage,
  StyleSheet,
  ImageBackground,
  Animated,
  Easing
} from "react-native";

import { colors, images, asyncStorageKeys } from "mitrasConstants";
import Singleton from "mitrasSingleton";

//TODO: Custome Object   
import { StatusBar } from "mitrasCustStatusBar";

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
    // let commonData = Singleton.getInstance();
    // let value = await AsyncStorage.getItem( asyncStorageKeys.flag_PasscodeCreate );
    // let rootViewController = await AsyncStorage.getItem( asyncStorageKeys.rootViewController );
    // console.log( { value, rootViewController } );
    // let status = JSON.parse( value );
    // setTimeout( () => {
    //   if ( rootViewController == "PasscodeConfirm" ) {
    //     this.props.onComplited( false, rootViewController );
    //   }
    //   else if ( status ) {
    //     this.props.onComplited( false, "Passcode" );
    //   }
    //   else {
    //     this.props.onComplited( false, "OnBoardingNavigator" );
    //   }
    // }, 3000 );

  }

  render() {
    return (
      <View style={ styles.container }>
        <ImageBackground
          source={ images.appIcon }
          style={ styles.backgroundImage }
          imageStyle={ {
            resizeMode: "cover" // works only here!
          } }
        >
        </ImageBackground>
        <StatusBar backgroundColor={ colors.white } hidden={ true } barStyle="dark-content" />
      </View>
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
