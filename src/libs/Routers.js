import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions
} from 'react-native';

import { Router, Scene} from 'react-native-router-flux';

import { createStackNavigator, createDrawerNavigator } from "react-navigation";

const { width, height } = Dimensions.get("window");

import WalkThroughScreen from "../containers/walkthrough/index";
import Signin from '../screens/BaseActivity/Signin/index';
import MainActivity from '../screens/MainActivity/index';
import login2 from '../screens/MainActivity/Login/index';
import signup from '../screens/MainActivity/SignUpScreen/index';

export default class Routers extends Component {

	constructor() {
		super();
		this.state = { 
			
		};
	}

	startWithCache(){
		
	}

	componentWillMount() {
		
		this.startWithCache()
	}
	  
	componentDidMount(){

	}
	
	render() {

		return (
			<Router>

				{/* SCENE 'initial' for showing first scene*/}
				<Scene key='root'>
				
					<Scene key="walkthrough" hideNavBar initial component={WalkThroughScreen}/>
					<Scene key="signin" hideNavBar component={Signin}/>
					
					<Scene key="mainActivity" hideNavBar component={MainActivity}/>
					<Scene key="login2" hideNavBar component={login2}/>
					<Scene key="signup" hideNavBar component={signup}/>
					
				</Scene>
			</Router>
		);

	}  

}


AppRegistry.registerComponent('App', () => Routers);