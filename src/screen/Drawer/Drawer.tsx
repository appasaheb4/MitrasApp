import React, { Component } from "react";
import { NavigationActions, DrawerActions, StackActions } from "react-navigation";
import {
  ScrollView,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Alert,
  AsyncStorage
} from "react-native";
import {
  Container,
  Header,
  Title,
  Text,
  Content,
  Button,
  Left,
  Right,
  Thumbnail
} from "native-base";
import IconFontAwe from "react-native-vector-icons/FontAwesome";


//TODO: Custome Alert 
import { AlertSimple } from "mitrasComponents/Alert";
let alert = new AlertSimple();




//TODO: Custome Object 
import { asyncStorageKeys } from "mitrasConstants";

export default class Drawer extends Component<any, any> {
  constructor ( props ) {
    super( props );
    this.state = ( {
      menuItem: [],
    } );
  }

  async componentWillMount() {
    var menuItem = [];
    menuItem = [
      { title: "Home", icon: "home" },
      { title: "Logout", icon: "sign-out" } ]
    this.setState( {
      menuItem
    } )
  }

  //TODO: func
  //TODO:  function NavigateToScreen
  navigateToScreen = async ( title: any ) => {
    this.props.navigation.dispatch( DrawerActions.closeDrawer() );
    if ( title == "Logout" ) {
      alert.simpleOkActionWithPara( "Confirm", "Are you sure logout ?", null, this.click_Logout )
    } else if ( title == "Home" ) {
      console.log( 'home navigation' );
    }
    else {
      console.log( title );
      Alert.alert( 'coming soon' );
    }
  }

  click_Logout = async () => {
    const resetAction = StackActions.reset( {
      index: 0, // <-- currect active route from actions array
      key: null,
      actions: [
        NavigationActions.navigate( {
          routeName: "OnBoardingNavigator"
        } )
      ]
    } );
    await AsyncStorage.setItem( asyncStorageKeys.rootViewController, "OnBoardingNavigator" );
    this.props.navigation.dispatch( resetAction );
  }


  render() {
    //array  
    let { menuItem } = this.state;
    return (
      <Container>
        <Content contentContainerStyle={ styles.container }>
          <ScrollView style={ styles.viewScrollingList }>
            <View>
              <FlatList
                data={ menuItem }
                showsVerticalScrollIndicator={ false }
                renderItem={ ( { item } ) => (
                  <TouchableOpacity onPress={ () => this.navigateToScreen( item.title ) }>
                    <View style={ styles.menuItem }>
                      <IconFontAwe name={ item.icon } size={ 20 } />
                      <Text style={ styles.txtMenuItem }>{ item.title }</Text>
                    </View>
                  </TouchableOpacity>
                ) }
                keyExtractor={ item => item.id }
              />
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
  viewHeading: {
    flex: 0.5,
    marginTop: 10,
    alignItems: "center"
  },
  userProfileIcon: {
    width: 140,
    height: 140,
    borderRadius: 70
  },
  viewUserIcon: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  iconEdit: {
    alignSelf: "flex-end",
    marginTop: -30
  },
  txtUserName: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10
  },
  //menu item
  menuItem: {
    padding: 10,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    alignItems: "center"
  },
  txtMenuItem: {
    paddingLeft: 10,
    color: "#000000",
    fontSize: 16
  },
  //Scrolling:viewScrollingList
  viewScrollingList: {
    flex: 1, marginTop: 25
  }
} );
