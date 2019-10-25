import React, { Component } from 'react';
import { View, StyleSheet, Platform, TouchableHighlight } from 'react-native';
import { Button, Text, CardItem } from 'native-base';
import Modal from 'react-native-modalbox';

// TODO: Custome Object
import { colors, svgIcon } from 'hexaConstants';

interface Props {
    data: [];  
    closeModal: Function;
    click_Done: Function;
    click_Clsoe:Function;
    click_Ready:Function;
    click_Delivered:Function;
    pop: Function;
}
     
export default class ModelChangeStatus extends Component<Props, any> {
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
                   <Text style={{fontWeight:"bold"}}>Change Status</Text>
                </View>
                <View style={{flex:1}}>
                    <CardItem>
                        <Text>New</Text>
                    </CardItem>
                    <CardItem>
                        <TouchableHighlight onPress={() => this.props.click_Ready()}>
                        <Text>Ready</Text>
                        </TouchableHighlight>
                    </CardItem>  
                    <CardItem>
                        <TouchableHighlight onPress={ () => this.props.click_Delivered() }>
                        <Text>Delivered</Text>
                        </TouchableHighlight>
                    </CardItem>
                    <CardItem>
                        <Text>Cancelled</Text>
                    </CardItem>
                </View>
                <View style={{flex:0.2, flexDirection:"row",justifyContent:"space-around"}}>
                    <Button danger rounded bordered style={{flex:1,margin:10}} >
                        <Text>Cancel</Text>
                    </Button>
                    <Button rounded style={ { flex: 1,margin:10 } }>
                        <Text>Next</Text>
                    </Button>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create( {
    // botom model
    modal: {
        padding:10,
        flex:0.6
    },
} );
