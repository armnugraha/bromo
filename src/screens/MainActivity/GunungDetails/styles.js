
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../resources/Themes';

const styles = StyleSheet.create({

	header: {
		backgroundColor: Colors.transparent,
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.03),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
	},

	left: {
		flex: 0.5,
		backgroundColor: Colors.transparent,
	},

	menuIconWhite: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	backArrow: {
		width: 30,
	 justifyContent: 'center',
	 alignItems: 'flex-start'
	},
	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: Colors.transparent
	},

	textTitle: {
		color: Colors.snow,
		fontSize: Fonts.moderateScale(17),
		marginTop: (Metrics.HEIGHT * 0.001),
		alignSelf: 'center',
		fontFamily: Fonts.type.sfuiDisplayBold,
	},

	right: {
		flex: 0.5
	},

	mgRight:{
		marginRight:(Metrics.WIDTH * 0.016)
	},

headerImageBG: {
	height:(Metrics.HEIGHT * 0.385),
	width:(Metrics.WIDTH),
	backgroundColor: 'gray'
},

profileContent: {
	width:(Metrics.HEIGHT * 0.12),
	height:(Metrics.HEIGHT * 0.12),
	borderRadius:(Metrics.HEIGHT*0.07),
	marginTop: (Metrics.HEIGHT * 0.315),
	borderWidth: 2.5,
	borderColor: Colors.snow,
	backgroundColor: '#0691ce',
	alignSelf: 'flex-end',
	alignItems: 'flex-end',
	justifyContent: 'flex-end',
	position: 'absolute',
	zIndex:10,
},

slide: {
	marginVertical: (Metrics.HEIGHT * 0.02),
	flexDirection: 'row',
},

imageStyle: {
	width: (Metrics.HEIGHT * 0.06),
	height: (Metrics.HEIGHT * 0.06),
	borderRadius: (Metrics.HEIGHT * 0.03),
	marginRight: (Metrics.WIDTH * 0.04),
	resizeMode: 'cover',
	...Platform.select({
		ios: {
		backgroundColor: 'gray'
		},
	}),
},

notificationContent: {
	marginTop: (Metrics.WIDTH * 0.005),
	marginRight: (Metrics.WIDTH * 0.02),
	width: (Metrics.WIDTH * 0.8),
},

titleBar: {
	flexDirection: 'row',
	alignItems: 'flex-end'
},

name: {
	color: '#363636',
	fontSize: Fonts.moderateScale(15),
	fontFamily: Fonts.type.sfuiDisplayMedium,
	marginRight: (Metrics.WIDTH*0.015)
},

notification: {
	color: '#b7b7b7',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(12),
	alignSelf:'center'
},

comments: {
	color: '#6f6f6f',
	fontSize: Fonts.moderateScale(15),
	fontFamily: Fonts.type.sfuiDisplayRegular,
	width:(Metrics.WIDTH * 0.75),
	marginVertical: (Metrics.HEIGHT*0.005),
	textAlign: 'left'
},

bottombar: {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'flex-start',
	marginTop: (Platform.OS === 'ios')? (Metrics.HEIGHT * 0.005) : 0,
},

timerImage: {
	width: (Metrics.WIDTH * 0.03),
	height: (Metrics.WIDTH * 0.03),
	marginRight: (Metrics.WIDTH * 0.02),
	resizeMode: 'contain',
},


time: {
	color: '#b7b7b7',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(12),
	marginLeft: (Metrics.WIDTH) * 0.005
},

separatoeStyle: {
	height: (Metrics.HEIGHT) * 0.001,
	backgroundColor: '#d7d7d7'
},

main:{
	backgroundColor:'#e6e6e6'
},

level:{
	color:Colors.snow,
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(16),
	backgroundColor: Colors.transparent,
	...Platform.select({
			 ios: {
			 		marginTop:(Metrics.HEIGHT * 0.015),
			 },
			 android:{
				 marginTop:(Metrics.HEIGHT * 0.035),
			 }
 	 }),
},

levelNo:{
	color:Colors.snow,
	fontFamily: Fonts.type.sfuiDisplayBold,
	fontSize: (Platform.OS == 'ios')? Fonts.moderateScale(46) : Fonts.moderateScale(40),
	backgroundColor: Colors.transparent,
	...Platform.select({
		ios: {

		},
		android:{
			marginBottom:(Metrics.HEIGHT * 0.024),
		}
	}),
	marginRight:(Metrics.HEIGHT * 0.035),
},

levelDescView:{
	paddingTop: (Metrics.HEIGHT * 0.032),
	// alignItems: 'center',
	// justifyContent: 'center',
	backgroundColor: Colors.snow
},

titleText:{
	marginHorizontal: (Metrics.WIDTH * 0.1),
	marginBottom: (Metrics.HEIGHT * 0.016),
	marginLeft: (Metrics.WIDTH) * 0.032,
	fontSize: Fonts.moderateScale(18),
	color:'#363636',
	fontFamily: Fonts.type.sfuiDisplayRegular
},

descText:{
	marginHorizontal: (Metrics.WIDTH * 0.1),
	marginBottom: (Metrics.HEIGHT * 0.016),
	marginLeft: (Metrics.WIDTH) * 0.032,
	// textAlign: 'center',
	fontSize: Fonts.moderateScale(12),
	color:'#b7b7b7',
	fontFamily: Fonts.type.sfuiDisplayRegular
},

starView:{
	flexDirection: "row",
	marginBottom: (Metrics.HEIGHT * 0.016),
	marginLeft: (Metrics.WIDTH) * 0.032,
},

openView:{
	width:(Metrics.WIDTH),
	paddingVertical: (Metrics.WIDTH * 0.03),
	paddingLeft: (Metrics.WIDTH * 0.03),
	borderTopWidth: 1,
	borderColor: '#d7d7d7',
},

openSeparatorText:{
	color:'#363636',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(14),
	marginBottom: (Metrics.HEIGHT * 0.016),
},

openText:{
	color:'#363636',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(12),
	textAlign: 'left'
},

friendView:{
	width:(Metrics.WIDTH),
	paddingVertical: (Metrics.WIDTH * 0.03),
	paddingLeft: (Metrics.WIDTH * 0.03),
	borderTopWidth: 1,
	borderColor: '#d7d7d7'
},

friendText:{
	color:'#363636',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(12),
	textAlign: 'left'
},

scrollView:{
	flexDirection: 'row',
	marginTop:(Metrics.HEIGHT * 0.035)
},

scrollViewPhotos:{
	flexDirection: 'row',
	marginBottom:(Metrics.HEIGHT * 0.016),
	marginLeft:(Metrics.HEIGHT * 0.016)
},

friendListView:{
	height:(Metrics.HEIGHT * 0.098),
	width:(Metrics.HEIGHT * 0.098),
	flexDirection: 'row',
	marginRight:(Metrics.WIDTH * 0.035)
},

imgView:{
	borderRadius: 6,
	height:(Metrics.HEIGHT * 0.099),
	width:(Metrics.HEIGHT * 0.099),
	// borderRadius:(Metrics.HEIGHT * 0.0375),
 	...Platform.select({
	 ios: {
	 		backgroundColor: 'gray'
	 },
 }),
},

separatorText:{
	color:'#363636',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(14),
	marginTop: (Metrics.HEIGHT * 0.016),
	marginBottom: (Metrics.HEIGHT * 0.016),
	marginLeft: (Metrics.WIDTH) * 0.032,
},

notiView:{
	height:(Metrics.HEIGHT * 0.035),
	width:(Metrics.HEIGHT * 0.035),
	borderRadius:(Metrics.HEIGHT * 0.0175),
	borderWidth: 1.5,
	borderColor: Colors.snow,
	position: 'absolute',
	alignItems: 'center',
	justifyContent: 'center',
	right:0,
},

notiText:{
	color:Colors.snow,
	fontSize: Fonts.moderateScale(12),
	fontFamily: Fonts.type.sfuiDisplayRegular,
	backgroundColor: Colors.transparent
},

listMainView:{
	marginTop:(Metrics.HEIGHT * 0.02),
	backgroundColor: Colors.snow
},

rowBg:{
	backgroundColor: Colors.snow,
	paddingLeft: (Metrics.WIDTH * 0.04)
},

// STYLE FOR IMAGE SHOW
mainImgDetail: {
    // height: Metrics.HEIGHT * 0.9,
    width: Metrics.WIDTH,
    backgroundColor: Colors.transparent,
	flexDirection: 'column'
},

  headerImgDetail: {
    backgroundColor: "#fa6b7b",
  	height: (Metrics.HEIGHT * 0.1),
  	width: Metrics.WIDTH,
  	flexDirection: 'row',
    borderBottomColor: "#fa6b7b",
    paddingTop: (Metrics.WIDTH * 0.05),
  },

  leftImgDetail: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -15
  },

  bodyImgDetail: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  rightImgDetail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  downArrowIconImgDetail: {
    width: (Metrics.WIDTH * 0.035),
    height: (Metrics.WIDTH * 0.05),
    resizeMode: 'cover'
  },

  optionIconImgDetail: {
    width: (Metrics.WIDTH * 0.038),
    height: (Metrics.WIDTH * 0.05),
    resizeMode: 'contain'
  },

  swipeContainerImgDetail: {
    width: Metrics.WIDTH ,
    height: (Metrics.HEIGHT) * 1,
    backgroundColor: Colors.transparent
  },

  shadowBgImgDetail: {
    width: Metrics.WIDTH,
    height: (Metrics.HEIGHT) * 0.9,
    bottom: 0,
    position:'absolute',
  },

  profileImageImgDetail: {
    width: (Metrics.WIDTH) * 0.14,
    height: (Metrics.WIDTH) * 0.14,
    borderRadius: (Metrics.WIDTH) * 0.07,
    borderColor: Colors.snow,
    borderWidth: 1
  },

  likeIconImgDetail: {
    marginTop: -(Metrics.WIDTH * 0.02),
  },

  nameTxtImgDetail: {
    fontSize: Fonts.moderateScale(20),
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    backgroundColor: Colors.transparent
  },

  watchIconImgDetail: {
    width: (Metrics.WIDTH * 0.045),
    height: (Metrics.WIDTH * 0.045),
    backgroundColor: Colors.transparent,
    marginTop: (Metrics.WIDTH * 0.02),
  },

  watchDistanceTxtImgDetail: {
    fontSize: Fonts.moderateScale(16),
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    backgroundColor: Colors.transparent,
    marginLeft: (Metrics.WIDTH * 0.02),
    marginTop: (Metrics.WIDTH * 0.008),
  },

  mapPinImgDetail: {
    marginLeft: Metrics.WIDTH * 0.08,
    backgroundColor: Colors.transparent,
    marginTop: (Metrics.WIDTH * 0.012),
  },

  albumIconImgDetail: {
    width: (Metrics.WIDTH * 0.06),
    height: (Metrics.WIDTH * 0.06),
  },

  galleryImgTxtImgDetail: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginLeft: 8
  },

  slideContainerImgDetail: {
    width: Metrics.WIDTH,
    height: (Metrics.HEIGHT) * 2,
    bottom: 0,
    position:'absolute'
  },

  imageContainerImgDetail: {
    width: Metrics.WIDTH,
    height: (Metrics.HEIGHT) * 1,
    bottom: 0,
    position:'absolute',
    resizeMode: 'cover'
  },

  swipeImageCountBgImgDetail: {
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH * 0.05),
  },

  profileDetailBgImgDetail: {
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH) * 0.04,
    marginRight: (Metrics.WIDTH) * 0.04,
    position: 'absolute',
    bottom: (Metrics.WIDTH * 0.08),
    backgroundColor: 'transparent'
  },
  successMessageImgDetail: {
    backgroundColor: "transparent",


  },
  mainModelSecImgDetail: {
    backgroundColor:"#ffffff",
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    width:Metrics.WIDTH*0.9,
    alignSelf:"center",
    marginTop:  Platform.OS === "ios" ? Metrics.HEIGHT*0.4 : Metrics.HEIGHT*0.32


  },
  mainrendermodalImgDetail:{
    alignSelf:"center",

  },
  nameTxtmodalImgDetail:{
    color:"#da3c47",
    textAlign:"center",
    paddingTop:Metrics.HEIGHT*0.025,
    paddingBottom:Metrics.HEIGHT*0.025,
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.sfuiDisplayRegular,

  },
  horizontalborderImgDetail:{
    backgroundColor:"#e6e6e6",
    width:Metrics.WIDTH * 0.85,
    height:1,
  },
  maincanclebgImgDetail:{
    backgroundColor:"#fff",
      borderRadius: 9,
      width:Metrics.WIDTH*0.9,
      alignSelf:"center",
      height:Metrics.HEIGHT*0.08,
      marginTop:Metrics.HEIGHT*0.02,
      position:"absolute",
      bottom:0,
      justifyContent:"center"


  },
  cancletextImgDetail:{
    color:"#0084ff",
    textAlign:"center",
      fontSize: Fonts.moderateScale(18),
        fontFamily: Fonts.type.sfuiDisplayRegular,
  }

});

export default styles;
