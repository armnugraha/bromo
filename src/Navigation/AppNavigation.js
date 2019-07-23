import React, { Component } from 'react';
import {
  	AppRegistry,
  	StyleSheet,
	Dimensions,
	AsyncStorage
} from 'react-native';

import { Router, Scene} from 'react-native-router-flux';

import { createStackNavigator, createDrawerNavigator } from "react-navigation";

const { width, height } = Dimensions.get("window");


import WalkThroughScreen from "../screens/BaseActivity/walkthrough/index";
import MainActivity from '../screens/MainActivity/index';
import Index from '../screens/BaseActivity/index';
import '../stores/global';

/*Bubbdy Drawer START*/
const WalkThroughInclLogin =
	createStackNavigator(
		{
		 	WalkThroughScreen: { screen: WalkThroughScreen },
			Index: { screen: Index },
			MainActivityScreen: { screen: MainActivity}
		},
		{
		  headerMode: "none",
		  navigationOptions: {
			gesturesEnabled: false
		  }
		}
	)
/*Bubbdy Drawer END*/

const BaseActivity = createStackNavigator(
	{
	  Index: { screen: Index }
	},
	{
	  headerMode: "none",
	  navigationOptions: {
		gesturesEnabled: false
	  }
	}
);

const PrimaryNav = 
	createStackNavigator(
		{
		  WalkThroughInclLogin: { screen: WalkThroughInclLogin },
		  IndexScreen: { screen: BaseActivity }
		},
		{
		  headerMode: "none",
		  initialRouteName: "IndexScreen",
		  gesturesEnabled: false
		}
	)
  
export default PrimaryNav;