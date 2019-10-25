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
    Tab, Tabs,
    Badge
} from "native-base";
import { Avatar } from 'react-native-elements';
import IconFontAwe from "react-native-vector-icons/FontAwesome";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { RkCard } from "react-native-ui-kitten";

// TODO: Custome Comp   
import { StatusBar } from "mitrasComponents/StatusBar";


// TODO: Custome Model  
import { ModelChangeStatus, ModelStausReady, ModelStatusDelivered } from "mitrasComponents/Models"

// TODO:Custome Object
import { colors, images } from "mitrasConstants";


export default class New extends Component {
    constructor ( props: any ) {
        super( props );
        this.state = ( {
            arrModelChangeStatus:[],
            arrModelStausReady:[],
            arrModelStatusDelivered:[]
        } );
    }

    componentDidMount() {
        console.log( 'reload' );
    }
   
    renderItem = () => {
        return (
            <View>
                <Card>   
                    <ListItem avatar>
                        <Left style={ { alignSelf: "center" } }>
                            <IconFontAwe color="gray" size={ 30 } name="shopping-cart" />
                        </Left>  
                        <Body>
                            <Text>Kumar Pratik</Text>
                            <Text note>Doing what you like will always keep you happy . .</Text>
                        </Body>
                        <Right>
                            <Button 
                            rounded 
                            onPress={()=>{
                                this.setState({
                                    arrModelChangeStatus:{
                                        modalVisible:true
                                    }  
                                })
                            }}
                            >
                                <Text>Status</Text>
                            </Button>
                        </Right>
                    </ListItem>
                </Card>
            </View>
        )
    }   

    render() {
        //array
        let { arrModelChangeStatus, arrModelStausReady, arrModelStatusDelivered} = this.state;
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
                                        this.componentDidMount()
                                    } }
                                />
                            }
                            scrollEnabled={ true }
                            showsVerticalScrollIndicator={ false }
                            renderItem={ this.renderItem.bind( this ) }
                            keyExtractor={ ( item, index ) => index.toString() }
                        />
                    </View>   
                    <ModelChangeStatus   
                        modelData={ arrModelChangeStatus}   
                        click_Clsoe={()=>{  
                            this.setState({
                                arrModelChangeStatus: {
                                    modalVisible: false
                                }
                            })
                        }}
                        click_Ready={()=>{
                            this.setState( {
                                arrModelChangeStatus: {
                                    modalVisible: false
                                },  
                                arrModelStausReady:{
                                    modalVisible: true
                                }
                            } )
                        }}
                        
                        click_Delivered={()=>{
                            this.setState({
                                arrModelChangeStatus: {
                                    modalVisible: false
                                },  
                                arrModelStatusDelivered:{
                                    modalVisible: true
                                }  
                            })
                        }}
                    />  
                    <ModelStausReady
                        modelData={ arrModelStausReady}
                        click_Clsoe={()=>{
                            this.setState({
                                arrModelStausReady: {
                                    modalVisible: false
                                } 
                            })
                        }}
                    />
                    <ModelStatusDelivered   
                        modelData={arrModelStatusDelivered}
                        click_Clsoe={ () => {
                            this.setState( {  
                                arrModelStatusDelivered: {
                                    modalVisible: false
                                }
                            } )
                        } }
                    />  
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


