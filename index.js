/**
 * @format
 */
import React from "react";
import { createAppContainer } from "react-navigation";
import { AsyncStorage, AppState, AppRegistry, Linking, StatusBar, Alert, SafeAreaView, StyleSheet } from "react-native";

import { name as appName } from './app.json';


import { createRootNavigator } from "mitrasRouter";
import { Launch } from "mitrasScreenLanch";


//TODO: Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from 'Mitras/src/redux/reducers';
const store = createStore( allReducers );

export default class Mitras extends React.Component
{
    constructor ( props )
    {
        super( props );
        this.state = {
            status: true,
            isStartPage: "OnBoardingNavigator",
            appState: AppState.currentState
        };
        StatusBar.setBarStyle( 'light-content', true );
    }

    onComplited ( status, pageName )
    {
        try  
        {
            this.setState( {
                status: status,
                isStartPage: pageName
            } );
        } catch ( e )
        {
            console.log( {
                e
            } );
        }
    }

    render ()
    {
        let { status, isStartPage } = this.state;
        const Layout = createRootNavigator(
            status,
            isStartPage
        );
        const AppContainer = createAppContainer( Layout );
        return (
            <Provider store={ store }>
                { status ?
                    <Launch
                        onComplited={ ( status: boolean, pageName: string ) =>
                            this.onComplited( status, pageName )
                        }
                    />
                    :
                    <AppContainer
                    />
                }
            </Provider>
        )
    }
}

console.disableYellowBox = true;
AppRegistry.registerComponent( appName, () => Mitras );
