import React from "react";
import { StyleSheet, View, SafeAreaView, Image, AsyncStorage, Dimensions, Alert } from "react-native";
import { Text, Button, Icon } from "native-base";
import { StackActions, NavigationActions } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import IconFontAwe from "react-native-vector-icons/FontAwesome";


//Custome Compontes  
import { StatusBar } from "mitrasCustStatusBar";
import { OnBoardingSwip } from "mitrasCustOnBoarding";
import { FullLinearGradientButton } from "mitrasCustomeLinearGradientButton";


//TODO: Custome object  
import { colors, images, asyncStorageKeys } from "mitrasConstants";



export default class OnBoarding extends React.Component<any, any> {
  constructor ( props: any ) {
    super( props );
    this.state = {
      data: []
    };
  }




  // TODO: func click_Done  
  click_Done() {
    try {
      //   AsyncStorage.setItem(
      //     asyncStorageKeys.rootViewController,
      //     "PasscodeConfirm"
      //   );
      //   const resetAction = StackActions.reset( {
      //     index: 0, // <-- currect active route from actions array
      //     key: null,
      //     actions: [
      //       NavigationActions.navigate( { routeName: "PasscodeConfirm" } )
      //     ]
      //   } );
      //   this.props.navigation.dispatch( resetAction );
      console.log( 'hi' );
    } catch ( error ) {
      Alert.alert( error )
    }
  }

  render() {
    const data = [
      {
        backgroundColor: "#ffffff",
        image: images.onBoarding.img1,
        title: "On Boarding 1",
      },
      {
        backgroundColor: "#ffffff",
        image: images.onBoarding.img2,
        title: "On Boarding 2",
      },
      {
        backgroundColor: "#ffffff",
        image: images.onBoarding.img3,
        title: "On Boarding 3",
      }
    ];
    return (
      <View style={ styles.container }>
        <StatusBar backgroundColor={ colors.white } barStyle="dark-content" />
        <SafeAreaView style={ styles.container }>
          <OnBoardingSwip
            click_GetStarted={ () => this.click_Done() }>
            {/* First screen */ }
            <View style={ [ styles.slide ] }>
              <Image
                style={ { width: 300, height: 300 } }
                resizeMode="contain"
                source={ data[ 0 ].image }
              />
              <Text style={ [ styles.header ] }>{ data[ 0 ].title }</Text>
            </View>
            {/* Second screen */ }
            <View style={ [ styles.slide ] }>
              <Image
                style={ { width: 300, height: 300 } }
                resizeMode="contain"
                source={ data[ 1 ].image }
              />
              <Text style={ [ styles.header ] }>{ data[ 1 ].title }</Text>

            </View>
            {/* Third screen */ }
            <View style={ [ styles.slide ] }>
              <Image
                style={ { width: 300, height: 300 } }
                resizeMode="contain"
                source={ data[ 2 ].image }
              />
              <Text style={ [ styles.header ] }>{ data[ 2 ].title }</Text>
            </View>
          </OnBoardingSwip>
          <LinearGradient
            colors={ [ '#8948D2', '#D360F9', ] }
            style={ { flex: 0.4, alignItems: "center", marginTop: 20 } }
          >
            <View style={ { flex: 1, flexDirection: "row", alignItems: "center" } }>
              <Button light
                style={ { flex: 1, margin: 10, height: 60, borderRadius: 10, alignItems: "center", justifyContent: "center" } }
                onPress={ () => this.props.navigation.push( "Registration" ) }
              >
                <Text style={ { color: colors.appColor } }> <IconFontAwe name="edit" size={ 20 } /> SIGN UP</Text>
              </Button>
              <Button light
                style={ { flex: 1, margin: 10, height: 60, borderRadius: 10, alignItems: "center", justifyContent: "center" } }
                onPress={ () => this.props.navigation.push( "Login" ) }
              >
                <Text style={ { color: colors.appColor } }> <IconFontAwe name="lock" size={ 20 } color={ colors.appColor } />  LOG IN</Text>
              </Button>
            </View>
            <Text style={ { flex: 0.2, textAlign: "center", color: "#ffffff" } }>@ 2019 Design Studio</Text>
          </LinearGradient>


        </SafeAreaView>
      </View >
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
  slide: {
    flex: 1, // Take up all screen
    marginTop: 100,
    alignItems: "center" // Center horizontally
  },
  // Header styles
  header: {
    color: "#000000",
    fontSize: 30,
    marginVertical: 15,
    margin: 30,
    textAlign: "center"
  },
  // Text below header
  text: {
    fontFamily: "Avenir",
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: "center"
  }
} );
