
import React from 'react'
import _ from 'lodash'
import RootStack from './src/router/router'


import { StyleSheet, View } from 'react-native'


class App extends React.Component {

	state = {
		routerComponent: null
	}



	render = () => {

				return (
          <RootStack/>

				)
		}
	


}

export default App

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
})
