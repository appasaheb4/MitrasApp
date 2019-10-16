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
    Linking,
    TouchableOpacity,
    FlatList,
    RefreshControl
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
    Card, CardItem,
    Thumbnail,
    Icon,
    Picker,
    Fab
} from "native-base";

//TODO: Custome Comp
import { HeaderTitle } from "mitrasComponents/Header";
import { StatusBar } from "mitrasComponents/StatusBar";

//TODO:Custome Object       
import { colors } from "mitrasConstants";


export default class OrderDetails extends Component {
    constructor ( props: any ) {
        super( props );
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <HeaderTitle title="Manage Account"
                    pop={ () => this.props.navigation.pop() }
                />
                <SafeAreaView style={ [ styles.container, { backgroundColor: 'transparent' } ] }>
                    <Content
                        contentContainerStyle={ styles.container }
                    >
                        <Text>hi</Text>
                    </Content>
                </SafeAreaView>
                <StatusBar backgroundColor={ colors.appColor } hidden={ false } barStyle="light-content" />
            </Container>
        );
    }
}


let styles = StyleSheet.create( {
    container: {
        flex: 1,
        margin: 2,
    },
    card: {
        padding: 5,
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: "#000000"
    },
    plusButtonBottom: {
        position: "absolute",
    },
    viewInputFiled: {
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    viewTextAreaFiled: {
        alignItems: "center",
        borderWidth: 0.2,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    itemInputWalletName: {
        borderWidth: 2,
        borderRadius: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'gray',
        shadowOpacity: 0.3,
        backgroundColor: '#FFFFFF',
        height: 50

    },
    itemQuestionPicker: {
        width: Dimensions.get( 'screen' ).width / 1.07,
        borderWidth: Platform.OS == "ios" ? 0 : 0.2,
        borderRadius: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        backgroundColor: '#FFFFFF',
        height: 50,
        marginBottom: 10
    },
} );
