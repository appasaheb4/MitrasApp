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
    CardItem,
    Tab, Tabs
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


export default class Active extends Component {
    constructor ( props: any ) {
        super( props );
        this.state = ( {

        } );
    }


    renderItem = () => {
        return (
            <View>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>Customer Name</Text>
                            <Text note>9260303151</Text>
                            <Text note>Last Order Date:20/10/2019</Text>
                        </Body>
                        <Right>
                            <View style={ { flexDirection: "row" } }>
                                <View>
                                    <IconFontAwe style={ { margin: 10 } } size={ 20 } color="gray" name="shopping-cart" />
                                </View>
                                <View>
                                    <IconFontAwe style={ { margin: 10 } } size={ 20 } color="gray" name="comment" />
                                </View>
                            </View>
                        </Right>
                    </CardItem>
                </Card>
            </View>
        )
    }


    render() {
        //values
        return (
            <Container>

                <Content
                    contentContainerStyle={ styles.container }
                >
                    <Header style={ { backgroundColor: colors.appColor } } searchBar rounded>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Search" />
                            <Icon name="ios-people" />
                        </Item>
                        <Button transparent>
                            <Text>Search</Text>
                        </Button>
                    </Header>
                    <View>
                        <FlatList
                            data={ [
                                { title: "Feed", subTitle: "INR 1000" },
                                { title: "Product", subTitle: "INR 500" },
                                { title: "Product", subTitle: "INR 500" }
                            ] }
                            refreshControl={
                                <RefreshControl
                                    refreshing={ false }
                                    onRefresh={ () => {
                                        //this.componentDidMount()
                                    } }
                                />
                            }
                            scrollEnabled={ true }
                            showsVerticalScrollIndicator={ false }
                            renderItem={ this.renderItem.bind( this ) }
                            keyExtractor={ ( item, index ) => index.toString() }
                        />
                    </View>
                </Content>
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
