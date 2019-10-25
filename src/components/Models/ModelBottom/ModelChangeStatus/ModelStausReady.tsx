import React, { Component } from 'react';
import { View, StyleSheet, Platform, TouchableHighlight, Image } from 'react-native';
import { Button, Text, CardItem, Textarea } from 'native-base';
import Modal from 'react-native-modalbox';

// TODO: Custome Object  
import { colors, svgIcon, images } from 'mitrasConstants';

interface Props {
    data: [];
    closeModal: Function;
    click_Done: Function;
    click_Clsoe: Function;
    pop: Function;
}
  
export default class ModelStausReady extends Component<Props, any> {
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
                <View>
                    <Text style={ { fontWeight: "bold" } }>Status: Ready</Text>
                </View>
                <View style={ { flex: 1 } }>
                    <Textarea rowSpan={ 5 } bordered placeholder="Enter a collection date" />
                    <View style={ { flex: 1, flexDirection: "row" } }>
                        <Image
                            source={ images.feed.forCard }
                            style={ { height: 80, width: 80, margin: 10 } }
                            resizeMode="cover"
                        />
                        <Image
                            source={ images.feed.forCard }
                            style={ { height: 80, width: 80, margin: 10 } }
                            resizeMode="cover"
                        />
                    </View>
                </View>
                <View style={ { flex: 0.2, flexDirection: "row", justifyContent: "space-around" } }>
                    <Button danger rounded
                     bordered style={ { flex: 1, margin: 10 } } 
                        onPress={ () => this.props.click_Clsoe()}
                     >
                        <Text>Cancel</Text>
                    </Button>
                    <Button rounded style={ { flex: 1, margin: 10 } }>
                        <Text>Save</Text>
                    </Button>
                </View>
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
