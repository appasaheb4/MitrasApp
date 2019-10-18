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
import { RNCamera } from 'react-native-camera';




export default class PostAdd extends Component {
    constructor ( props: any ) {
        super( props );

    }


    render() {
        return (
            <Container>
                <SafeAreaView style={ [ styles.container, { backgroundColor: 'transparent' } ] }>
                    <Content
                        contentContainerStyle={ styles.container }
                    >
                        <RNCamera
                            ref={ ref => {
                                this.camera = ref;
                            } }
                            style={ {
                                flex: 1,
                            } }
                        >
                        </RNCamera>
                    </Content>
                </SafeAreaView>

            </Container>
        );
    }
}


let styles = StyleSheet.create( {
    container: {
        flex: 1
    }
} );
