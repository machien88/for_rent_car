import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    View,
    RefreshControl,
    FlatList,
    Image,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    Animated
} from 'react-native';

class MapCar extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
    }
    render() {
        return (
            <View >
            </View>
        )
    }
}

export default connect(state => state)(MapCar);