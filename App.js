/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, StatusBar, Image, View, PermissionsAndroid, AsyncStorage, TouchableOpacity} from 'react-native';
import { Container} from 'native-base';
import { Fonts, Metrics, Colors, Images } from './src/resources/Themes/';

import Home from './src/screens/MainActivity/index.js';

import App from './src/App';

import {
  BarIndicator
} from 'react-native-indicators';

type Props = {};

export default class Bromo extends Component<Props> {

  constructor(){
    super()
    this.splashScreen()
    this.requestCameraPermission()

    this.state = {
      isLoading: false,
      status_login: false,
      status_wk: false
    };
  }

  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
        {
          'title': 'Cool Photo App Camera Permission',
          'message': 'Cool Photo App needs access to your camera ' +
                     'so you can take awesome pictures.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
      }
    } catch (err) {
    }
  }

  componentDidMount(){
	AsyncStorage.getItem('has_walk_through').then((token) => {
  
		if(token != null){
		  this.setState({status_wk: true})
		}
  
	})
  }

  splashScreen(){
    setTimeout(() => {
      this.setState({isLoading:true})
    }, 4000)
  }

  render() {
    StatusBar.setBarStyle("dark-content", true);
    
    if (Platform.OS == "android") {
      StatusBar.setBackgroundColor("#F4F4F4", true);
      StatusBar.setTranslucent(true);
    }

    if(!this.state.isLoading){

      return (

        <Container style={styles.container}>

          <View style={styles.slidesec}>
            <View style={styles.slide}>
              <Image source={Images.bromo_large} style={styles.sliderImage}/>
              <View style={styles.contentStyle}>
                <BarIndicator style={styles.headertext} />
                <Text style={styles.desctext}>
                  Please Wait...
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.btnsec}>
            <View style={styles.discoverBg}>
              <Text style={styles.discoverTxt}>{'\u00A9'} 2019 ~ BROMO</Text>
            </View>
          </View>
        </Container>

      )
	}
	
	if(this.state.status_wk){
		return (
			<Home />
		);
	}
    
    return (
    	<App />
    );
  }
}

const styles = StyleSheet.create({

	container: {
		backgroundColor: Colors.snow,
		width: (Metrics.WIDTH),
		height: (Metrics.HEIGHT)
	},

	left: {
		flex: 0.5,
	},

	right: {
		flex: 0.5
	},

	body: {
		flex: 3,
		alignSelf: 'center'
	},

	skipTxt: {
		fontFamily: Fonts.type.sfuiDisplayMedium,
		fontSize: Fonts.moderateScale(16),
		color: '#6f6f6f',
		textAlign: 'right',
	},

	slidesec:{
		height: (Metrics.HEIGHT*0.78),
		backgroundColor: Colors.transparent
	},

	btnsec:{
		height: (Metrics.HEIGHT*0.12),
		justifyContent: 'center',
		backgroundColor: Colors.transparent
	},

	slide: {
		height: (Metrics.HEIGHT*0.78),
		backgroundColor: Colors.transparent
	},

	sliderImage: {
		alignSelf: 'center',
		...Platform.select({
        ios: {
          marginTop: (Metrics.HEIGHT * 0.04),
        },
        android: {
          marginTop: (Metrics.HEIGHT * 0.40),
        }
    }),
	},

	contentStyle: {
		marginTop: (Metrics.HEIGHT * 0.07),
	},

	headertext: {
		fontFamily: Fonts.type.sfuiDisplayLight,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(21),
		width :(Metrics.WIDTH) * .85,
		color:'#363636',
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(11),
		width :(Metrics.WIDTH) * 0.7,
		color:'rgba(54,54,54,0.8)',
		marginTop: (Metrics.HEIGHT * 0.03)
	},

	dot:{
		backgroundColor:'rgba(111,111,111,0.3)',
		marginTop: (Metrics.HEIGHT * 0.015),
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
	},

	activeDot:{
		backgroundColor:'#6f6f6f',
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
		marginTop: (Metrics.HEIGHT * 0.015),
	},

	discoverBg: {
		backgroundColor:'#0691ce',
		alignSelf: 'center',
		justifyContent: 'center',
		paddingLeft: (Metrics.WIDTH * 0.08),
		paddingRight: (Metrics.WIDTH * 0.08),
		paddingTop: (Metrics.WIDTH * 0.02),
		paddingBottom: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.06),
	},

	discoverTxt: {
		fontFamily: Fonts.type.sfuiDisplayMedium,
		fontSize: Fonts.moderateScale(12),
		color: Colors.snow,
		textAlign: 'center'
	},

});