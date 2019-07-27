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

import TabIcon from "./TabIcon";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Home from "./Home/index";
import ListItemRekomendasi from "./Home/ListItemRekomendasi";
import Filter from "./Filter/index";
import Profile from "./Profile/index";

import GunungDetails from "./GunungDetails2/index";

import DetailImage from "./GunungDetails/DetailImage";
import Kosong from "./kosong";

import '../../stores/global';

/*Main Activity START*/
const MainActivity = createStackNavigator(
	{
	  Home: { screen: Home },
	  Detail: { screen: GunungDetails },
	  ListItem: { screen: ListItemRekomendasi },
	  Kosong: { screen: Kosong }
	},
	{
	  headerMode: "none",
	  navigationOptions: {
		gesturesEnabled: false
	  }
	}
);
/*Main Activity END*/

const PrimaryNav = 
	createStackNavigator(
		{
		  MainActivity: { screen: MainActivity }
		},
		{
		  headerMode: "none",
		  initialRouteName: "MainActivity",
		  gesturesEnabled: false
		}
	)
  
export default PrimaryNav;