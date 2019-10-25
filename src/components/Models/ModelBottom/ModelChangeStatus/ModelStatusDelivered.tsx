import React, { Component } from 'react';
import { View, StyleSheet, Platform, TouchableHighlight, Image } from 'react-native';
import { Button, Text, Item, Textarea, Input, Icon } from 'native-base';
import Modal from 'react-native-modalbox';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


// TODO: Custome Object  
import { colors, svgIcon, images } from 'mitrasConstants';

interface Props {
    data: [];
    closeModal: Function;
    click_Done: Function;
    click_Clsoe: Function;
    pop: Function;
}

export default class ModelStatusDelivered extends Component<Props, any> {
    constructor ( props: any ) {
        super( props );
        this.state = {
            data: [],
        };
    }



    render() {
        let { modalVisible } = this.props.modelData;
        return (
            <Modal
                style={ [ styles.modal ] }
                position={ 'bottom' }
                isOpen={ modalVisible }  
                onClosed={ () => this.props.click_Clsoe() }
            >  

                <KeyboardAwareScrollView
                    enableOnAndroid
                    extraScrollHeight={ 0 }
                    contentContainerStyle={ { flexGrow: 1 } }
                >  
                <View>
                    <Text style={ { fontWeight: "bold" } }>Status: Delivered</Text>
                </View>
                <View style={ { flex: 1 } }>
                    <Textarea rowSpan={ 5 } bordered placeholder="Enter a collection date" />
                    <View style={ { flex: 1 } }>
                        <Item>
                            <Input placeholder='Delivered Date' />
                            <Icon active name='time' />
                        </Item>  
                        <Item>
                            <Input placeholder='Location' />
                            <Icon active name='map' />
                        </Item>  
                    </View>  
                </View>       
                <View style={ { flex: 0.2, flexDirection: "row", justifyContent: "space-around" } }>
                    <Button danger rounded 
                    bordered 
                    style={ { flex: 1, margin: 10 } } 
                        onPress={ () => this.props.click_Clsoe()}
                    >    
                        <Text>Cancel</Text>
                    </Button>
                    <Button rounded style={ { flex: 1, margin: 10 } }>
                        <Text>Save</Text>
                    </Button>
                </View>    
                </KeyboardAwareScrollView>
            </Modal>
        );
    }
}

const styles = StyleSheet.create( {
    // botom model
    modal: {
        padding: 10,
        flex: 0.6
    },
} );
