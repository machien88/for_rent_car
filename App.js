import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/reducers/index';
import Routes from './app/routers/index';


class App extends Component {
	componentDidMount() {
		// SplashScreen.hide();
	}
	
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Provider store={store}>
					<Routes />
				</Provider>
			</View>
		)
	}
}

export default App;