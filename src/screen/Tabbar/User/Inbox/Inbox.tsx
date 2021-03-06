import React, { Component } from "react";
import {
    StyleSheet,
    View,
    AsyncStorage,
    Platform,
    Dimensions,
    Image,
    SafeAreaView,
    Keyboard,
    StatusBar as StBar,
    Linking,
    Alert,
    TouchableOpacity,
    FlatList,
    RefreshControl,
    ImageBackground
} from "react-native";
import {
    Container,
    Header,
    Title,
    Button,
    Content,
    Item,
    Input,
    Textarea, Form,
    Left,
    Right,
    Body,
    Text,
    List,
    ListItem,
    Icon,
    Picker,
    Fab,
    Card,
    CardItem
} from "native-base";
import { Avatar } from 'react-native-elements';
import IconFontAwe from "react-native-vector-icons/FontAwesome";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { RkCard } from "react-native-ui-kitten";


//TODO: Custome Comp
import { StatusBar } from "mitrasComponents/StatusBar";

//TODO:Custome Object
import { colors, images } from "mitrasConstants";




export default class Inbox extends Component {
    constructor ( props: any ) {
        super( props );
        this.state = ( {

        } );
    }




    render() {
        //values

        return (
            <Container>
                <Header style={ { backgroundColor: colors.appColor, marginTop: StBar.currentHeight } }>
                    <Left>
                        <Button
                            transparent
                            onPress={ () => this.props.navigation.toggleDrawer() }
                        >
                            <IconFontAwe name="bars" size={ 25 } color="#ffffff" />
                        </Button>
                    </Left>
                    <Body style={ { flex: 0, alignItems: "flex-start" } }>
                        <Title
                            adjustsFontSizeToFit={ true }
                            numberOfLines={ 1 }
                        >
                            Inbox
                        </Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                        >
                            <IconFontAwe name="sliders" size={ 25 } color="#ffffff" />
                        </Button>

                    </Right>
                </Header>


                <Content
                    contentContainerStyle={ styles.container }
                >
                    <KeyboardAwareScrollView
                        enableOnAndroid
                        extraScrollHeight={ 0 }
                        contentContainerStyle={ { flexGrow: 1, justifyContent: "center" } }
                    >
                        <Text style={ { textAlign: "center" } }>Comming soon</Text>
                    </KeyboardAwareScrollView>
                </Content>
                <StatusBar backgroundColor={ colors.appColor } hidden={ false } barStyle="light-content" />
            </Container>
        );
    }
}



let styles = StyleSheet.create( {
    container: {
        flex: 1
    },
    //Grid System
    rkCard: {
        height: "95%",
        width: "100%",
        alignSelf: "center",
        borderRadius: 12,
    },
    rkCardFeed: {
        height: "96%",
        borderRadius: 12,
    },
    paginationContainer: {
        marginBottom: -10
    },
    plusButtonBottom: {
        position: "absolute",
        bottom: 20,
    },
} );
