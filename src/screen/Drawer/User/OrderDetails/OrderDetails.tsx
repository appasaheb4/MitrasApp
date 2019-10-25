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
    Fab,
    CheckBox
} from "native-base";
import Accordion from 'react-native-collapsible/Accordion';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


//TODO: Custome Comp
import { HeaderTitleWithRightIcon } from "mitrasComponents/Header";
import { StatusBar } from "mitrasComponents/StatusBar";



//TODO:Custome Object       
import { colors, images } from "mitrasConstants";


export default class OrderDetails extends Component {
    constructor ( props: any ) {
        super( props );
        this.state = {
            activeSections: [],
        };
    }

    _renderHeader = section => {
        return (
            <Card>
                <CardItem>
                    <Body>
                        <Text>Item Name: { section.itemName }</Text>
                        <Text>Due 19/10/2019</Text>
                    </Body>
                </CardItem>
            </Card>
        );
    };

    _renderContent = section => {
        return (
            <Card style={ { marginTop: -12, } }>
                <CardItem>
                    <Body>
                        <Text>Add Services</Text>
                        <ListItem noBorder>
                            <CheckBox checked={ true } />
                            <Text> Daily Stand Up</Text>
                        </ListItem>
                        <ListItem noBorder>
                            <CheckBox checked={ true } />
                            <Text> Daily Stand Up</Text>
                        </ListItem>
                        <ListItem noBorder>
                            <CheckBox checked={ true } />
                            <Text> Daily Stand Up</Text>
                        </ListItem>
                        <Text>Picture</Text>
                        <View style={ { flex: 1, flexDirection: "row", alignSelf: "center" } }>
                            <Image
                                source={ images.feed.forCard }
                                style={ { height: 100, width: 100, margin: 10, borderRadius: 12 } }
                                resizeMode="cover"
                            />
                            <Image
                                source={ images.feed.forCard }
                                style={ { height: 100, width: 100, margin: 10, borderRadius: 12 } }
                                resizeMode="cover"
                            />
                            <Image
                                source={ images.feed.forCard }
                                style={ { height: 100, width: 100, margin: 10, borderRadius: 12 } }
                                resizeMode="cover"
                            />
                        </View>
                    </Body>
                </CardItem>
            </Card>
        );
    };

    _updateSections = activeSections => {
        this.setState( { activeSections } );
    };




    render() {
        const SECTIONS = [
            {
                itemName: '1',
                content: 'Lorem ipsum...',
            },
            {
                itemName: '2',
                content: 'Lorem ipsum...',
            },
        ];
        return (
            <Container>
                <HeaderTitleWithRightIcon
                    headerDetails={ {
                        title: "Order Details",
                        flagTransparent: false,
                        headerBgColor: colors.appColor
                    } }
                    pop={ () => this.props.navigation.pop() }
                />
                <SafeAreaView style={ [ styles.container, { backgroundColor: 'transparent' } ] }>
                    <Content
                        contentContainerStyle={ styles.container }
                    >
                        <KeyboardAwareScrollView
                            enableOnAndroid
                            extraScrollHeight={ 0 }
                            contentContainerStyle={ { flexGrow: 1 } }
                        >
                            <View style={ { flex: 0.1, margin: 20 } }>
                                <View style={ { flexDirection: "row" } }>
                                    <Text style={ { flex: 1, textAlign: "left" } }>Order Id:1</Text>
                                    <Text note style={ { flex: 1, textAlign: "right" } }>Due:18/10/2019</Text>
                                </View>
                                <Text>Estimate: INR 2000</Text>
                            </View>
                            <View style={ { flex: 1 } }>
                                <Accordion
                                    sections={ SECTIONS }
                                    activeSections={ this.state.activeSections }
                                    renderHeader={ this._renderHeader }
                                    renderContent={ this._renderContent }
                                    onChange={ this._updateSections }
                                />
                                <Card>
                                    <CardItem>
                                        <Body>
                                            <View style={ { flexDirection: "row" } }>
                                                <Text style={ { flex: 1, textAlign: "left" } }>Status: Ready</Text>
                                                <Text style={ { flex: 1, textAlign: "right" } }>19/10/2019</Text>
                                            </View>

                                        </Body>

                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            <Text>
                                                This library heavily depends on the overflow style property.
                                                 Unfortunately, overflow defaults to hidden on Android and cannot be changed.
                                                  Although it looks like a possible fix is in the making, currently,
                                                  FoldingView is only supported on iOS.
                                        </Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                                <Card>
                                    <CardItem>
                                        <Body>
                                            <View style={ { flexDirection: "row" } }>
                                                <Text style={ { flex: 1, textAlign: "left" } }>Status: Delivered</Text>
                                                <Text style={ { flex: 1, textAlign: "right" } }>20/10/2019</Text>
                                            </View>

                                        </Body>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            <Text>
                                                Paid:2000
                                        </Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </View>
                        </KeyboardAwareScrollView>
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
