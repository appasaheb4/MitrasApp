import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Platform,
    Dimensions,
    Image,
    SafeAreaView,
    Keyboard,
    StatusBar,
    Linking,
    ScrollView,
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
import { Avatar } from 'react-native-elements';


export default class Post extends Component {
    constructor ( props: any ) {
        super( props );

    }

    _renderItem( { item, index } ) {
        return (
            <View key={ "card" + index }>
                <Card style={ styles.card }>
                    <CardItem>
                        <Left>
                            <Avatar
                                size={ 100 }
                                source={ {
                                    uri:
                                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                } }
                            />
                        </Left>
                        <Body>
                            <Text>Order Id: 1234</Text>
                            <Text note>Items: 3</Text>
                            <Text note>Date: 15/10/2019</Text>
                        </Body>
                        <Right>
                            <Icon type="FontAwesome5" name="comment" />
                        </Right>
                    </CardItem>

                </Card>
            </View>
        );
    }

    render() {
        return (
            <Container>
                <SafeAreaView style={ [ styles.container, { backgroundColor: 'transparent' } ] }>
                    <Content
                        contentContainerStyle={ styles.container }
                    >
                        <FlatList
                            data={ [ 1 ] }
                            showsVerticalScrollIndicator={ false }
                            refreshControl={
                                <RefreshControl
                                    refreshing={ false }
                                    onRefresh={ () => {
                                        this.componentWillMount()
                                    } }
                                />
                            }
                            renderItem={ this._renderItem.bind( this ) }
                            keyExtractor={ ( item, index ) => index.toString() }
                        />
                    </Content>

                </SafeAreaView>
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
} );
