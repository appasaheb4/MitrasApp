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
    Left,
    Right,
    Body,
    Text,
    Card,
    Tab, Tabs
} from "native-base";
import { Avatar } from 'react-native-elements';
import IconFontAwe from "react-native-vector-icons/FontAwesome";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { RkCard } from "react-native-ui-kitten";



import Active from "./Active"
import Post from "./Post";

//TODO: Custome Comp
import { StatusBar } from "mitrasComponents/StatusBar";

//TODO:Custome Object
import { colors, images } from "mitrasConstants";




const { width, height } = Dimensions.get( "window" );
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
    "window"
);

function wp( percentage: number ) {
    const value = ( percentage * viewportWidth ) / 100;
    return Math.round( value );
}
const slideWidth = wp( 75 );
const itemHorizontalMargin = wp( 2 );
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;
const SLIDER_1_FIRST_ITEM = 0;


export default class Orders extends Component {
    constructor ( props: any ) {
        super( props );
        this.state = ( {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
        } );
    }



    componentWillMount() {
        console.log( 'hi' );
    }



    _renderItem( { item, index } ) {
        return (
            <View key={ "card" + index } >
                <Card style={ styles.rkCard }>
                    <ImageBackground
                        source={ images.feed.forCard }
                        style={ { flex: 1, borderRadius: 12, overflow: 'hidden' } }
                        resizeMode="cover"
                    >
                        <Text></Text>
                    </ImageBackground>
                </Card>
            </View>
        );
    }



    renderItemFeeds( { item, index } ) {
        return (
            <View key={ "card" + index } style={ { flex: 1 } } >
                <Card style={ styles.rkCardFeed }>
                    <ImageBackground
                        source={ images.feed.forCard }
                        style={ { flex: 1, borderRadius: 12, overflow: 'hidden' } }
                        resizeMode="cover"
                    >
                        <Text></Text>
                    </ImageBackground>
                </Card>
            </View>
        );
    }


    renderItemForFeeds( { item, index } ) {
        return (
            <View key={ "card" + index } style={ { height: 250, alignItems: "center" } }>
                <View style={ { flexDirection: "row" } }>
                    <Text style={ { flex: 1, alignSelf: 'flex-start' } }>{ item.title }</Text>
                    <Text note style={ { flex: 0.4, textAlign: "right" } }>{ item.subTitle }</Text>
                </View>
                <Carousel
                    ref={ c => {
                        this._slider1Ref = c;
                    } }
                    data={ [ 1, 2, 3, 4 ] }
                    renderItem={ this.renderItemFeeds.bind( this ) }
                    sliderWidth={ sliderWidth }
                    itemWidth={ itemWidth }
                    onSnapToItem={ ( index: any ) => console.log( { index } )
                    }

                />
                <Pagination
                    dotsLength={ [ 1, 2, 3, 4 ].length }
                    activeDotIndex={ 0 }
                    containerStyle={ { marginBottom: -20 } }
                    dotColor={ "rgba(255, 255, 255, 0.92)" }
                    inactiveDotColor={ colors.black }
                    inactiveDotOpacity={ 0.4 }
                    inactiveDotScale={ 0.6 }
                    carouselRef={ this._slider1Ref }
                    tappableDots={ !!this._slider1Ref }
                />
            </View>
        );
    }

    render() {
        //values
        let { slider1ActiveSlide } = this.state;
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
                            Orders
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
                    <Tabs>
                        <Tab heading="Active"
                            tabStyle={ { backgroundColor: colors.appColor } }
                            activeTabStyle={ { backgroundColor: colors.appColor } }
                        >
                            <Active push={ () => this.props.navigation.push( "OrderDetailsNavigator" ) } />
                        </Tab>
                        <Tab heading="Post"
                            tabStyle={ { backgroundColor: colors.appColor } }
                            activeTabStyle={ { backgroundColor: colors.appColor } }
                        >
                            <Post />
                        </Tab>
                    </Tabs>
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
} );
