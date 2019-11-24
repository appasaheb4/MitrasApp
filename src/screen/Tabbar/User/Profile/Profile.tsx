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
    Label
} from "native-base";
import { Avatar } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';





export default function Profile( props: any ) {
    // constructor ( props: any ) {
    //     super( props );
    //     this.state = {
    //         urlImageBilling: { uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" },
    //         imgBillingDetails: { uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" },
    //         userDetails: {},
    //         flag_Loading: false
    //     };
    // }

    const click_SelectImage = async () => {
        const options =
        {
            mediaType: 'photo',
            //videoQuality: 'medium',
            durationLimit: 10,
            //takePhotoButtonTitle: null, //'Take video...', //bug at taking video with camera so far 27/10/2018
            //title: 'Select Photo',
            quality: 1,
            //noData,maxWidth and maxHeight shorten time for ImportPhoto to return image
            noData: true,
            allowsEditing: true,
            maxWidth: 500, //speeds up compressImage to almost no time
            maxHeight: 500, //speeds up compressImage to almost no time
            // storageOptions: {
            //     path: 'photo',
            //     skipBackup: true
            // }
        }
        ImagePicker.showImagePicker( options, response => {
            console.log( 'Response = ', response );
            if ( response.didCancel ) {
                console.log( 'User cancelled image picker' );
            } else if ( response.error ) {
                console.log( 'ImagePicker Error: ', response.error );
            } else if ( response.customButton ) {
                console.log( 'User tapped custom button: ', response.customButton );
            } else {
                const source = { uri: response.uri };
                console.log( { source } );
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                // this.setState( {
                //     urlImageBilling: source,
                //     imgBillingDetails: response
                // } );
            }
        } );
    }

    return (
        <Container>

            <SafeAreaView style={ [ styles.container, { backgroundColor: 'transparent' } ] }>
                <Content
                    contentContainerStyle={ styles.container }
                >
                    <View style={ { flex: 0.8, zIndex: 1, paddingTop: 80, alignItems: "center", backgroundColor: "#F4F4F4" } }>
                        <TouchableOpacity onPress={ () => this.click_SelectImage() }>
                            <Avatar
                                size="large"
                                rounded
                                source={
                                    urlImageBilling
                                }
                            />
                        </TouchableOpacity>
                        <Text>Appasaheb Lakade</Text>
                        <Text note>9260303151</Text>
                    </View>

                    <View style={ { flex: 0.2, zIndex: 2, marginTop: -40, margin: 10, flexDirection: "row", justifyContent: "center" } }>
                        <Card style={ { width: 100, height: 80, justifyContent: "center" } }>
                            <CardItem>
                                <Body >
                                    <Text style={ { alignSelf: "center" } }>5</Text>
                                    <Text style={ { alignSelf: "center" } }>order</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card style={ { width: 100, height: 80, justifyContent: "center" } }>
                            <CardItem>
                                <Body >
                                    <Text style={ { alignSelf: "center" } }>5</Text>
                                    <Text style={ { alignSelf: "center" } }>stat</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card style={ { width: 100, height: 80, justifyContent: "center" } }>
                            <CardItem>
                                <Body >
                                    <Text style={ { alignSelf: "center" } }>5</Text>
                                    <Text style={ { alignSelf: "center" } }>stat</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>

                    <View style={ { flex: 1, marginTop: 40 } }>
                        <Form>
                            <Item stackedLabel>
                                <Label style={ { fontWeight: "bold" } }>Phone</Label>
                                <Input placeholder="Enter your number" />
                            </Item>
                            <Item stackedLabel>
                                <Label style={ { fontWeight: "bold" } }>Email(Option)</Label>
                                <Input placeholder="Enter your email" />
                            </Item>
                            <Item stackedLabel>
                                <Label style={ { fontWeight: "bold" } }>Address</Label>
                                <Input placeholder="Address 1,Address 2,Area,City" />
                            </Item>
                        </Form>
                    </View>

                </Content>
            </SafeAreaView>

        </Container>
    );
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
