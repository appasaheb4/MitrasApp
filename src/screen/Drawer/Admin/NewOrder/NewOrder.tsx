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
    StatusBar as StBar,
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
import IconFontAwe from "react-native-vector-icons/FontAwesome";
import Accordion from 'react-native-collapsible/Accordion';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DatePicker from 'react-native-datepicker'

//TODO: Custome Comp
import { HeaderTitleWithRightIcon } from "mitrasComponents/Header";
import { StatusBar } from "mitrasComponents/StatusBar";



//TODO:Custome Object       
import { colors, images } from "mitrasConstants";

//TODO: Custome Validation
import { validationService } from "mitrasValidation";


var utils = require( "mitrasUtils" );

export default class NewOrder extends Component {
    constructor ( props: any ) {
        super( props );
        this.state = {
            inputs: {
                orderId: {
                    type: "generic",
                    value: ""
                }
            },
            deliveryDate: utils.getDateForYYYYMMDD( Math.round( +new Date() / 1000 ) ),
            arrCustomerList: [ { "item": "Customer Name" } ],
            itemSelectValue: "Customer Name",
            arrPriorityList: [ { "item": "Priority" } ],
            itemSelectPriorityValue: "Priority",
            objProdValue: {
                item1: 1,
                item2: 2,
                item3: 1,
                item4: 1,
            }
        };

        this.onInputChange = validationService.onInputChange.bind( this );
        this.getFormValidation = validationService.getFormValidation.bind( this );
    }
    //TODO: select option
    onValueChange( value: string ) {
        this.setState( {
            itemSocietyName: value
        } );
    }

    //TODO: Validation
    renderError( id: any ) {
        const { inputs } = this.state;
        if ( inputs[ id ].errorLabel ) {
            return <Text style={ validationService.styles.error }>{ inputs[ id ].errorLabel }</Text>;
        }
        return null;
    }

    render() {
        const itemList = this.state.arrCustomerList.map( ( item: any, index: number ) => (
            <Picker.Item label={ item.item } value={ item.item } />
        ) );

        const itemPriorityList = this.state.arrPriorityList.map( ( item: any, index: number ) => (
            <Picker.Item label={ item.item } value={ item.item } />
        ) );


        //values
        let { itemSelectValue, itemSelectPriorityValue, deliveryDate } = this.state;
        //obj
        let { objProdValue } = this.state;
        return (
            <Container>
                {/* <HeaderTitleWithRightIcon
                    headerDetails={ {
                        title: "New Order",
                        flagTransparent: false,
                        headerBgColor: colors.appColor
                    } }
                    pop={ () => this.props.navigation.pop() }
                /> */}
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
                            New Order
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
                <SafeAreaView style={ [ styles.container, { backgroundColor: 'transparent' } ] }>
                    <Content
                        contentContainerStyle={ styles.container }
                    >
                        <KeyboardAwareScrollView
                            enableOnAndroid
                            extraScrollHeight={ 0 }
                            contentContainerStyle={ { flexGrow: 1 } }
                        >
                            <View style={ { flex: 1, alignItems: "center", marginTop: 20, marginBottom: 20 } }>
                                <View style={ [ styles.itemQuestionPicker ] }>
                                    <Picker
                                        renderHeader={ backAction =>
                                            <Header style={ { backgroundColor: "#ffffff" } }>
                                                <Left>
                                                    <Button transparent onPress={ backAction }>
                                                        <Icon name="arrow-back" style={ { color: "#000" } } />
                                                    </Button>
                                                </Left>
                                                <Body style={ { flex: 3 } }>
                                                    <Title style={ [ { color: "#000" } ] }>Select Question</Title>
                                                </Body>
                                                <Right />
                                            </Header> }
                                        mode="dropdown"
                                        iosIcon={ <Icon name="arrow-down" style={ { fontSize: 25, marginLeft: -10 } } /> }
                                        selectedValue={ itemSelectValue }
                                        onValueChange={ this.onValueChange.bind( this ) }
                                    >
                                        { itemList }
                                    </Picker>
                                </View>
                                <View style={ styles.viewInputFiled }>
                                    <Item rounded style={ styles.itemInputWalletName }>
                                        <Input
                                            keyboardType="numeric"
                                            autoCapitalize='sentences'
                                            placeholder='Order Id'
                                            placeholderTextColor="#B7B7B7"
                                            onChangeText={ value => {
                                                this.onInputChange( { id: "orderId", value } );
                                            } }
                                        />
                                    </Item>
                                    { this.renderError( "orderId" ) }
                                </View>
                                <View>
                                    <Text style={ { textAlign: 'left', marginBottom: 10 } }>Delivery Date:</Text>
                                    <Item>
                                        <DatePicker
                                            style={ [ { width: Dimensions.get( 'screen' ).width / 1.07 } ] }
                                            date={ deliveryDate }
                                            mode="date"
                                            placeholder="select date"
                                            format="YYYY-MM-DD"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            customStyles={ {
                                                dateIcon: {
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 4,
                                                    marginLeft: 0
                                                },
                                                dateInput: {
                                                    marginLeft: 36
                                                }
                                            } }
                                            onDateChange={ ( date ) => { this.setState( { eventDate: date } ) } }
                                        />
                                    </Item>
                                </View>

                                <View style={ [ styles.itemQuestionPicker, { marginTop: 20, marginBottom: 20 } ] }>
                                    <Picker
                                        renderHeader={ backAction =>
                                            <Header style={ { backgroundColor: "#ffffff" } }>
                                                <Left>
                                                    <Button transparent onPress={ backAction }>
                                                        <Icon name="arrow-back" style={ { color: "#000" } } />
                                                    </Button>
                                                </Left>
                                                <Body style={ { flex: 3 } }>
                                                    <Title style={ [ { color: "#000" } ] }>Select Priority</Title>
                                                </Body>
                                                <Right />
                                            </Header> }
                                        mode="dropdown"
                                        iosIcon={ <Icon name="arrow-down" style={ { fontSize: 25, marginLeft: -10 } } /> }
                                        selectedValue={ itemSelectPriorityValue }
                                        onValueChange={ this.onValueChange.bind( this ) }
                                    >
                                        { itemPriorityList }
                                    </Picker>
                                </View>
                            </View>
                            <View style={ { flex: 1 } }>
                                <Text style={ { flex: 1, textAlign: 'left', marginBottom: 10 } }>Select  Product:</Text>
                                <View style={ { flexDirection: "row" } }>
                                    <Card style={ { flex: 1 } }>
                                        <CardItem>
                                            <Body>
                                                <Text>Product 1</Text>
                                            </Body>
                                        </CardItem>
                                        <CardItem>
                                            <Body style={ { flexDirection: "row", alignItems: "center", justifyContent: "flex-end" } }>
                                                <Button transparent
                                                    onPress={ () => {
                                                        let { objProdValue } = this.state;
                                                        objProdValue.item1 = objProdValue.item1 - 1;
                                                        this.setState( {
                                                            objProdValue
                                                        } )
                                                    } }>
                                                    <Text>-</Text>
                                                </Button>
                                                <Text>{ objProdValue.item1 }</Text>
                                                <Button transparent
                                                    onPress={ () => {
                                                        let { objProdValue } = this.state;
                                                        objProdValue.item1 = objProdValue.item1 + 1;
                                                        this.setState( {
                                                            objProdValue
                                                        } )
                                                    } }>
                                                    <Text>+</Text>
                                                </Button>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                    <Card style={ { flex: 1 } }>
                                        <CardItem>
                                            <Body>
                                                <Text>Product 2</Text>
                                            </Body>
                                        </CardItem>
                                        <CardItem>
                                            <Body style={ { flexDirection: "row", alignItems: "center", justifyContent: "flex-end" } }>
                                                <Button transparent
                                                    onPress={ () => {
                                                        let { objProdValue } = this.state;
                                                        objProdValue.item2 = objProdValue.item2 - 1;
                                                        this.setState( {
                                                            objProdValue
                                                        } )
                                                    } }>
                                                    <Text>-</Text>
                                                </Button>
                                                <Text>{ objProdValue.item2 }</Text>
                                                <Button transparent
                                                    onPress={ () => {
                                                        let { objProdValue } = this.state;
                                                        objProdValue.item2 = objProdValue.item2 + 1;
                                                        this.setState( {
                                                            objProdValue
                                                        } )
                                                    } }>
                                                    <Text>+</Text>
                                                </Button>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </View>
                                <View style={ { flexDirection: "row" } }>
                                    <Card style={ { flex: 1 } }>
                                        <CardItem>
                                            <Body>
                                                <Text>Product 3</Text>
                                            </Body>
                                        </CardItem>
                                        <CardItem>
                                            <Body style={ { flexDirection: "row", alignItems: "center", justifyContent: "flex-end" } }>
                                                <Button transparent
                                                    onPress={ () => {
                                                        let { objProdValue } = this.state;
                                                        objProdValue.item3 = objProdValue.item3 - 1;
                                                        this.setState( {
                                                            objProdValue
                                                        } )
                                                    } }>
                                                    <Text>-</Text>
                                                </Button>
                                                <Text>{ objProdValue.item3 }</Text>
                                                <Button transparent
                                                    onPress={ () => {
                                                        let { objProdValue } = this.state;
                                                        objProdValue.item3 = objProdValue.item3 + 1;
                                                        this.setState( {
                                                            objProdValue
                                                        } )
                                                    } }>
                                                    <Text>+</Text>
                                                </Button>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                    <Card style={ { flex: 1 } }>
                                        <CardItem>
                                            <Body>
                                                <Text>Product 4</Text>
                                            </Body>
                                        </CardItem>
                                        <CardItem>
                                            <Body style={ { flexDirection: "row", alignItems: "center", justifyContent: "flex-end" } }>
                                                <Button transparent
                                                    onPress={ () => {
                                                        let { objProdValue } = this.state;
                                                        objProdValue.item4 = objProdValue.item4 - 1;
                                                        this.setState( {
                                                            objProdValue
                                                        } )
                                                    } }>
                                                    <Text>-</Text>
                                                </Button>
                                                <Text>{ objProdValue.item4 }</Text>
                                                <Button transparent
                                                    onPress={ () => {
                                                        let { objProdValue } = this.state;
                                                        objProdValue.item4 = objProdValue.item4 + 1;
                                                        this.setState( {
                                                            objProdValue
                                                        } )
                                                    } }>
                                                    <Text>+</Text>
                                                </Button>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </View>
                            </View>
                            <View style={ { flex: 0.2, flexDirection: "row" } }>
                                <Button bordered style={ { flex: 1, margin: 30, justifyContent: "center", alignSelf: "flex-start" } }>
                                    <Text>Prev</Text>
                                </Button>
                                <Button style={ { flex: 1, margin: 30, justifyContent: "center", alignSelf: "flex-end" } }>
                                    <Text>Next</Text>
                                </Button>
                            </View>
                        </KeyboardAwareScrollView>
                    </Content>
                </SafeAreaView>
                <StatusBar backgroundColor={ colors.appColor } hidden={ false } barStyle="light-content" />
            </Container >
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
