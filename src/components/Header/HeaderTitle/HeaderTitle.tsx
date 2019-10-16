import React, { Component } from "react";
import {
    Platform
} from "react-native";
import {
    Header,
    Title,
    Button,
    Left,
    Right,
    Body,
    Icon
} from "native-base";
import IconFontAwe from "react-native-vector-icons/FontAwesome";





export default class HeaderTitle extends Component<any, any> {
    constructor ( props: any ) {
        super( props );
    }
    render() {
        return (
            <Header transparent>
                <Left style={ { flex: 0.9 } }>
                    <Button
                        transparent
                        onPress={ () => this.props.pop() }
                    >
                        <IconFontAwe
                            name='arrow-left' size={ 18 } color="#000000" />
                    </Button>
                </Left>
                <Body style={ { flex: 8 } }>
                    <Title style={ [ { color: "#000000", fontSize: 18, alignSelf: "flex-start" } ] }>{ this.props.title }</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}
