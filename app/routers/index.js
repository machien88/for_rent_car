import React, { Component } from 'react';
import { BackHandler, Alert } from 'react-native';
import { Actions, Router, Scene, Drawer } from 'react-native-router-flux';
import Tabbar from '../components/tabbar/tabbar';
import ListCar from '../screens/tabbar/listCar';
import MapCar from '../screens/tabbar/mapCar';

/**
 * route config 
 */
const transitionConfig = () => ({
    // transition effects right to left
    screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
        const translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [layout.initWidth, 0, 0]
        });
        const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
            outputRange: [0, 1, 1, 0.3, 0]
        });
        return { opacity, transform: [{ translateX }] }
    }
})

// transition effects fade animation
const fadeTransition = () => ({
    screenInterpolator: sceneProps => {
        const { position, scene } = sceneProps

        const thisSceneIndex = scene.index

        const opacity = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex],
            outputRange: [0, 1],
        })

        return { opacity }
    },
})

/** define scene use back to exit */

const backAction = () => {
    const array = [
        '',
    ]
    if (array.indexOf(Actions.currentScene) !== -1) {
        Alert.alert(
            'Thoát ứng dụng',
            'Bạn có muốn thoát không?', [{
                text: 'Hủy',
                onPress: () => { },
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp()
            },], {
            cancelable: false
        }
        )
        return true;
    }
    return false;
}

export default class Routes extends Component {
    render() {
        return (
                <Router backAndroidHandler={() => backAction()}>
                    {/* <!-- transitionConfig = hiệu ứng chuyển màn hình --> */}
                    <Scene key="root" transitionConfig={transitionConfig} drawerLockMode={'locked-closed'} >
                        {/* <!-- Tabbar scene --> */}
                        <Scene key="tabbar" tabs tabBarComponent={Tabbar} type="reset" hideNavBar>
                            <Scene key="list" hideNavBar>
                            <Scene key="list_car" component={ListCar} title="list_car" hideNavBar />
                            </Scene>
                            <Scene key="map" hideNavBar>
                            <Scene key="map_car" component={MapCar} title="map_car" hideNavBar />
                            </Scene>
                        </Scene>
                    </Scene>
                </Router>
        );
    }
}

