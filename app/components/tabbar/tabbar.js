import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import style from '../../../assets/styles/tabbar.style'
import * as Animatable from 'react-native-animatable';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';
/* ===========================================
 * define tabbar component for all project
 * 
 * =========================================== */

class Tabbar extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    /** handle double tap to back to root tab screen */
    doubleTapHandle = (tab_scene, main_scene) => {
        var delta = new Date().getTime() - this.state.lastPress;
        if (delta < 200) {
            Actions.popTo(main_scene);
        } else {
            Actions.jump(tab_scene)
        }
        this.setState({
            lastPress: new Date().getTime()
        })
    }
    render() {
        const { index } = this.props.navigation.state;
        return (
            <Animatable.View animation="slideInUp" style={style.footer} >
                <View style={style.footerMenu} >
                    <TouchableOpacity onPress={() => Actions.map_car()} style={style.bottomButtons}>
                        <Icon name="headphones" size={30} color={index === 0 ? "#f55f22" : "#fff"} />
                        <Text style={style.footerText}>Map</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.list_car()} style={style.bottomButtons}>
                        <Icon name="book-reader" size={30} color={index === 1 ? "#f55f22" : "#fff"} />
                        <Text style={style.footerText}>List</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        )
    }
}

export default connect(state => state)(Tabbar);