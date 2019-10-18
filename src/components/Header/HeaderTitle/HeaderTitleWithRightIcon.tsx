import React, { Component } from "react";
import {
    Platform,
    StatusBar
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

export default class HeaderTitleWithRightIcon extends Component<any, any> {
    constructor ( props: any ) {
        super( props );
    }
    render() {
        let { flagTransparent, title, headerBgColor } = this.props.headerDetails;
        return (
            <Header transparent={ flagTransparent } style={ { backgroundColor: headerBgColor, marginTop: StatusBar.currentHeight } }>
                <Left style={ { flex: 0.9 } }>
                    <Button
                        transparent
                        onPress={ () => this.props.pop() }
                    >
                        <IconFontAwe
                            name='arrow-left' size={ 18 } color="#ffffff" />
                    </Button>
                </Left>
                <Body style={ { flex: 8 } }>
                    <Title style={ [ { color: "#ffffff", fontSize: 18, alignSelf: "flex-start" } ] }>{ title }</Title>
                </Body>
                <Right>
                    <IconFontAwe name="sliders" size={ 25 } color="#ffffff" />
                </Right>
            </Header>
        );
    }
}
