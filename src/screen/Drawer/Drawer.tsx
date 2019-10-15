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
import Icon from "react-native-vector-icons/FontAwesome5";
import { Avatar } from 'react-native-elements';





export default class Drawer extends Component<any, any> {
  constructor ( props ) {
    super( props );
    this.state = ( {

    } );
  }



  render() {
    return (
      <Container>
        <Content contentContainerStyle={ styles.container }>
          <ScrollView style={ styles.viewScrollingList }>
            <View>
              <Text>Comming soon</Text>
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
    flex: 1
  }
} );
