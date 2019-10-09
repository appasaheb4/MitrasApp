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
    StatusBar,
    Linking,
    Alert
} from "react-native";

import {
    Container,
    Header,
    Title,
    Button,
    Content,
    Item,
    Input,
    Left,
    Right,
    Body,
    Text,
    List,
    ListItem,
    Icon,
    Picker,
    Fab
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";




interface Props {
    click_Next: Function
}

export default class Login extends Component<Props, any> {
    constructor ( props: any ) {
        super( props );
        this.state = {
            flag_Loading: false,
            inputs: {
                name: {
                    type: "generic",
                    value: ""
                },
                mobileNo: {
                    type: "phone",
                    value: ""
                },
                password: {
                    type: "password",
                    value: ""
                },
                confirmPassword: {
                    type: "confirmPassword",
                    value: ""
                }
            }
        };

        // this.onInputChange = validationService.onInputChange.bind( this );
        // this.getFormValidation = validationService.getFormValidation.bind( this );
    }

    // //TODO: select option
    // onValueChange( value: string ) {
    //     this.setState( {
    //         itemSocietyName: value
    //     } );
    // }

    // click_Next = () => {
    //     this.getFormValidation();
    //     const { inputs, itemSocietyName } = this.state;
    //     console.log( { inputs } );
    //     var isValid = true;
    //     for ( var i in inputs ) {
    //         if ( inputs[ i ].hasOwnProperty( 'errorLabel' ) ) {
    //             if ( inputs[ i ].errorLabel != null ) {
    //                 console.log( 'null' );
    //                 isValid = false;
    //                 break;
    //             }
    //         } else {
    //             isValid = false;
    //             break;
    //         }
    //     }
    //     console.log( { isValid } );
    //     if ( isValid ) {
    //         if ( inputs.password.value == inputs.confirmPassword.value ) {
    //             this.setState( {
    //                 flag_Loading: true
    //             } );
    //             var body = {
    //                 date: Date.now(),
    //                 societyName: itemSocietyName,
    //                 name: inputs.name.value,
    //                 mobileNo: inputs.mobileNo.value,
    //                 tokenNo: utils.getTokenNo(),
    //                 password: inputs.confirmPassword.value,
    //                 type: "guard"
    //             };
    //             console.log( { body } );
    //             axios( {
    //                 method: "post",
    //                 url: apiary.registration,
    //                 data: body
    //             } )
    //                 .then( ( response: any ) => {
    //                     let data = response.data;
    //                     console.log( { data } );
    //                     if ( data.statusCode == 200 ) {
    //                         this.props.click_Next( inputs.mobileNo.value, data.data.otp );
    //                     } else {
    //                         Alert.alert( data.msg );
    //                     }
    //                     this.setState( {
    //                         flag_Loading: false
    //                     } );
    //                 } )
    //                 .catch( function ( error: any ) {
    //                     console.log( error );
    //                 } );

    //         } else {
    //             Alert.alert( 'Please enter correct password and confirm password.' );
    //         }
    //     }
    // }

    // //TODO: Validation
    // renderError( id: any ) {
    //     const { inputs } = this.state;
    //     if ( inputs[ id ].errorLabel ) {
    //         return <Text style={ validationService.styles.error }>{ inputs[ id ].errorLabel }</Text>;
    //     }
    //     return null;
    // }

    render() {
        // const itemList = this.state.arrSocietyList.map( ( item: any, index: number ) => (
        //     <Picker.Item label={ item.item } value={ item.item } />
        // ) );
        let { flag_Loading } = this.state;
        return (
            <Container>
                <Content
                    contentContainerStyle={ styles.container }
                >
                    <KeyboardAwareScrollView
                        enableOnAndroid
                        extraScrollHeight={ 0 }
                        contentContainerStyle={ { flexGrow: 1 } }
                    >
                        <View style={ { flex: 1, alignItems: "center", marginTop: 20 } }>
                            {/* <View style={ [ styles.itemQuestionPicker ] }>
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
                                    selectedValue={ this.state.itemSocietyName }
                                    onValueChange={ this.onValueChange.bind( this ) }
                                >
                                    { itemList }
                                </Picker>
                            </View>
                            <View style={ styles.viewInputFiled }>
                                <Item rounded style={ styles.itemInputWalletName }>
                                    <Input
                                        keyboardType="default"
                                        autoCapitalize='sentences'
                                        placeholder='Your Name'
                                        placeholderTextColor="#B7B7B7"
                                        onChangeText={ value => {
                                            this.onInputChange( { id: "name", value } );
                                        } }
                                    />
                                </Item>
                                { this.renderError( "name" ) }
                            </View>
                            <View style={ styles.viewInputFiled }>
                                <Item rounded style={ styles.itemInputWalletName }>
                                    <Input
                                        keyboardType="number-pad"
                                        autoCapitalize='sentences'
                                        placeholder='Mobile'
                                        placeholderTextColor="#B7B7B7"
                                        onChangeText={ value => {
                                            this.onInputChange( { id: "mobileNo", value } );
                                        } }
                                    />
                                </Item>
                                { this.renderError( "mobileNo" ) }
                            </View>
                            <View style={ styles.viewInputFiled }>
                                <Item rounded style={ styles.itemInputWalletName }>
                                    <Input
                                        secureTextEntry
                                        keyboardType="default"
                                        autoCapitalize='sentences'
                                        placeholder='Password'
                                        placeholderTextColor="#B7B7B7"
                                        onChangeText={ value => {
                                            this.onInputChange( { id: "password", value } );
                                        } }
                                    />
                                </Item>
                                { this.renderError( "password" ) }
                            </View>
                            <View style={ styles.viewInputFiled }>
                                <Item rounded style={ styles.itemInputWalletName }>
                                    <Input
                                        secureTextEntry
                                        keyboardType="default"
                                        autoCapitalize='sentences'
                                        placeholder='Confirm Password'
                                        placeholderTextColor="#B7B7B7"
                                        onChangeText={ value => {
                                            this.onInputChange( { id: "confirmPassword", value } );
                                        } }
                                    />
                                </Item>
                                { this.renderError( "confirmPassword" ) }
                            </View>
                        </View>
                        <View style={ { flex: 0.1 } }>
                            <FullLinearGradientButton
                                title="Next"
                                disabled={ false }
                                style={ [ false ? { opacity: 0.4 } : { opacity: 1 }, { borderRadius: 10 } ] }
                                click_Done={ () => this.click_Next() } />
                        </View> */}
                            <Text>hi</Text>
                        </View>
                    </KeyboardAwareScrollView>
                </Content>
                {/* <CustomeStatusBar backgroundColor={ colors.appColor } flagShowStatusBar={ true } barStyle="light-content" />
                <Loader loading={ flag_Loading } color={ colors.appColor } size={ 30 } /> */}
            </Container>
        );
    }
}

let styles = StyleSheet.create( {
    container: {
        flex: 1
    },
    viewInputFiled: {
        alignItems: "center",
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
