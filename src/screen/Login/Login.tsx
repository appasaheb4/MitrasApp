import React, { useState } from "react";
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
import { StackActions, NavigationActions } from "react-navigation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";



import { ModelLoader } from "mitrasComponents/Loader";

//TODO: Custome Comp 
import { FullLinearGradientButton } from "mitrasComponents/LinearGradient/Button";
import { HeaderTitle } from "mitrasComponents/Header";
import { StatusBar } from "mitrasComponents/StatusBar";


//TODO: Custome Object 
import { colors, images, asyncStorageKeys } from "mitrasConstants";

//TODO: Custome Validation
import { validationService } from "mitrasValidation";

import { getResult } from "../../redux/actions/common";
import { useDispatch, useSelector } from "react-redux";

export default function Login( props: any ) {
    const [ loading, setLoading ] = useState( false );
    const inputs = {
        mobileNo: {
            type: "phone",
            value: ""
        },
        password: {
            type: "password",
            value: ""
        },
    };
    const onInputChange = validationService.onInputChange;
    const getFormValidation = validationService.getFormValidation;


    const dispatch = useDispatch();
    const commonRes = useSelector( state => state.common.payload );

    console.log( { commonRes } );



    const click_Next = async () => {
        // getFormValidation();
        // var isValid = true;
        // for ( var i in inputs ) {
        //     if ( inputs[ i ].hasOwnProperty( 'errorLabel' ) ) {
        //         if ( inputs[ i ].errorLabel != null ) {
        //             console.log( 'null' );
        //             isValid = false;
        //             break;
        //         }
        //     } else {
        //         isValid = false;
        //         break;
        //     }
        // }
        // console.log( { isValid } );
        // if ( isValid ) {    
        dispatch( getResult( "http://society.shridaplastic.com/api/getVisitorAll" ) )
        // if ( inputs.mobileNo.value == "1234567890" && inputs.password.value == "123456" ) {
        //     const resetAction = StackActions.reset( {
        //         index: 0, // <-- currect active route from actions array
        //         key: null,
        //         actions: [
        //             NavigationActions.navigate( {
        //                 routeName: "CustomersTabbarNavigator"
        //             } )
        //         ]
        //     } );
        //     props.navigation.dispatch( resetAction );
        //     await AsyncStorage.setItem( asyncStorageKeys.rootViewController, "CustomersTabbarNavigator" );
        // } else {
        //     const resetAction = StackActions.reset( {
        //         index: 0, // <-- currect active route from actions array
        //         key: null,
        //         actions: [
        //             NavigationActions.navigate( {
        //                 routeName: "UserTabbarNavigator"
        //             } )
        //         ]
        //     } );
        //     props.navigation.dispatch( resetAction );
        //     await AsyncStorage.setItem( asyncStorageKeys.rootViewController, "UserTabbarNavigator" );
        // }


        // } else {
        //     Alert.alert( "Please enter correct mobile no and password." )
        // }
    }

    //TODO: Validation
    const renderError = ( id: any ) => {
        if ( inputs[ id ].errorLabel ) {
            return <Text style={ validationService.styles.error }>{ inputs[ id ].errorLabel }</Text>;
        }
        return null;
    }


    return (
        <Container>
            <HeaderTitle title="Login"
                pop={ () => props.navigation.pop() }
            />
            <Content
                contentContainerStyle={ styles.container }
            >
                <KeyboardAwareScrollView
                    enableOnAndroid
                    extraScrollHeight={ 0 }
                    contentContainerStyle={ { flexGrow: 1 } }
                >
                    <View style={ { flex: 1, alignItems: "center", marginTop: 20 } }>

                        <View style={ styles.viewInputFiled }>
                            <Item rounded style={ styles.itemInputWalletName }>
                                <Input
                                    keyboardType="number-pad"
                                    autoCapitalize='sentences'
                                    placeholder='Mobile'
                                    placeholderTextColor="#B7B7B7"
                                    onChangeText={ value => {
                                        onInputChange( { id: "mobileNo", value } );
                                    } }
                                />
                            </Item>
                            { renderError( "mobileNo" ) }
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
                                        onInputChange( { id: "password", value } );
                                    } }
                                />
                            </Item>
                            { renderError( "password" ) }
                        </View>
                    </View>
                    <View style={ { flex: 0.1 } }>
                        <FullLinearGradientButton
                            title="Login"
                            disabled={ false }
                            style={ [ false ? { opacity: 0.4 } : { opacity: 1 }, { borderRadius: 10 } ] }
                            click_Done={ () => click_Next() } />
                    </View>
                </KeyboardAwareScrollView>
            </Content>
            <StatusBar backgroundColor={ colors.appColor } flagShowStatusBar={ true } barStyle="light-content" />
            <ModelLoader loading={ loading } color={ colors.appColor } size={ 30 } />
        </Container>
    );
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
