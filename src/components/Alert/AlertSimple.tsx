import { Alert } from 'react-native';

export default class AlertSimple {
    //TODO: Ok Action
    public simpleOkAction( title: string, subtile: string, click_Ok: Function ) {
        Alert.alert(
            title,
            subtile,
            [
                {
                    text: 'Ok', onPress: () => {
                        click_Ok()
                    }
                },
            ],
            { cancelable: false },
        );
    }
    public simpleOkActionWithPara( title: string, subtile: string, item: any, click_Ok: Function ) {
        {
            Alert.alert(
                title,
                subtile,
                [
                    {
                        text: 'Ok', onPress: () => {
                            click_Ok( item )
                        }
                    },
                    {
                        text: 'Close', onPress: () => {
                            console.log( 'popup close' )

                        }
                    },
                ],
                { cancelable: false },
            );
        }
    }
}
