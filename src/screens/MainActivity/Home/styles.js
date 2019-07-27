import { Platform, StyleSheet, I18nManager } from "react-native";
import { Images, Metrics,Fonts,Colors } from "../../../resources/Themes";

const styles = StyleSheet.create({
  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    flexDirection: "column"
  },

  header: {
    backgroundColor: '#FFF',
    height: (Metrics.HEIGHT * 0.1),
    borderBottomWidth: 0,
    paddingTop: (Metrics.HEIGHT * 0.03),
    elevation: 0,
    paddingLeft: (Metrics.WIDTH * 0.05),
    paddingRight: (Metrics.WIDTH * 0.05),
  },
  headerBG: {
    height: (Metrics.HEIGHT * 0.1),
    width: Metrics.WIDTH,
  },

  headerText:{
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(18),
    color: "#bfbfbf",
    marginLeft: (Metrics.HEIGHT) * 0.015
  },

  headerTitleText:{
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(18),
    color: "#bfbfbf",
    marginLeft: (Metrics.HEIGHT) * 0.015
  },

  searchHeaderView:{
    borderRadius: 5,
    backgroundColor: Colors.snow,
    flexDirection: 'row',
    backgroundColor: 'green'
  },

  rowHeaderView:{
    flexDirection: 'row',
    marginTop: (Metrics.HEIGHT) * 0.015,
    width: (Metrics.WIDTH) * 0.84,
    alignSelf: 'center',
  },

  rowHeaderNameView:{
    flexDirection: 'column',
    marginLeft: (Metrics.WIDTH) * 0.03
  },

  left: {
    flex: 4,
    flexDirection:'row',
    alignItems:'center'
  },

  body: {
    flex: 1,
    flexDirection:'row',
  },

  bagIcon: {
		marginLeft: Metrics.WIDTH * 0.04,
		color: Colors.snow,
	},

	heartIcon: {
		color: "#363636",
		alignSelf: 'center',
  },
  
  iconCenter: {
    alignItems:'center'
  },

  mgLeft:{
    marginLeft: (Metrics.WIDTH) * 0.06,
  },

  mgRight:{
    marginRight: (Metrics.WIDTH) * 0.06,
  },

  searchView:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft: (Metrics.WIDTH) * 0.03,
    backgroundColor: '#EAE2E2',
    height:30
  },
  searchText:{
    flex:2,
    height:(Metrics.HEIGHT) * 0.066,
    marginLeft: (Metrics.WIDTH) * 0.02,
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#c3c3c3",
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'transparent',
  },

  right: {
    flex: 1,
    alignItems: "center"
  },

  titleTxt: {
    color: Colors.snow
  },

  titleView:{
    // paddingTop: (Metrics.HEIGHT * 0.032),
    paddingTop: (Metrics.HEIGHT * 0.026),
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

  filterTxt: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16)
  },

  imgContainer: {
    width: Metrics.WIDTH * 0.52,
    height: Metrics.HEIGHT * 0.63,
    alignItems: "center",
    justifyContent: "center"
  },

  cardImage: {
    borderRadius: 6,
    height: Metrics.HEIGHT * 0.27,
    width: Metrics.WIDTH * 0.7,
  },

  cardBgImage: {
    borderRadius: 6,
    height: Metrics.HEIGHT * 0.27,
    width: Metrics.WIDTH * 0.7,
    backgroundColor:"#51B252"
  },

  rowMain: {
    marginHorizontal: Metrics.WIDTH * 0.05,
    // marginTop: Metrics.HEIGHT * 0.1
  },

  profileImage: {
    width: Metrics.WIDTH * 0.08,
    height: Metrics.WIDTH * 0.08,
    borderRadius: Metrics.WIDTH * 0.04,
    borderColor: Colors.snow,
    borderWidth: 1
  },

  likeIcon: {
    width: Metrics.WIDTH * 0.06,
    height: Metrics.WIDTH * 0.05,
    resizeMode: "cover",
    marginTop: -(Metrics.WIDTH * 0.02)
  },

  nameTxt: {
    fontSize: Fonts.moderateScale(12),
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    backgroundColor: Colors.transparent
  },

  watchIcon: {
    width: Metrics.WIDTH * 0.026,
    height: Metrics.WIDTH * 0.026,
    backgroundColor: Colors.transparent,
    marginTop: Metrics.WIDTH * 0.015
  },

  watchDistanceTxt: {
    fontSize: Fonts.moderateScale(12),
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    backgroundColor: Colors.transparent,
    marginLeft: Metrics.WIDTH * 0.008,
    marginTop: Metrics.WIDTH * 0.01
  },

  mapPin: {
    // marginLeft: Metrics.WIDTH * 0.04,
    backgroundColor: Colors.transparent,
    marginTop: Metrics.WIDTH * 0.01
  },

  postDetailBg: {
    flexDirection: "row",
    marginLeft: Metrics.WIDTH * 0.04,
    marginRight: Metrics.WIDTH * 0.04,
    bottom: Metrics.WIDTH * 0.04,
    position: "absolute"
  },

  profileDetailBg: {
    flexDirection: "column",
    marginLeft: Metrics.WIDTH * 0.03
  },

  watchDistanceBg: {
    flexDirection: "row"
  },

  hratIconBg: {
    backgroundColor: "transparent",
    marginTop: -(Metrics.WIDTH * 0.02)
  },
  heightSeparator: {
    height: Metrics.HEIGHT * 0.09,
  },

  heightSeparatorBg: {
    height: Metrics.HEIGHT * 0.032,
    backgroundColor: "#F6F6F6",
    marginTop: (Metrics.WIDTH * 0.032)
  },
  // STYLE FOR SWIPER
  slidesec: {
    height: Metrics.HEIGHT * 0.3,
    backgroundColor: Colors.transparent
  },

  dot: {
    backgroundColor: "#d4d4d4",
    width: Metrics.WIDTH * 0.02,
    height: Metrics.WIDTH * 0.02,
    borderRadius: Metrics.WIDTH * 0.01,
    marginLeft: Metrics.WIDTH * 0.005,
    marginRight: Metrics.WIDTH * 0.005
  },

  activeDot: {
    backgroundColor: "#0691ce",
    width: Metrics.WIDTH * 0.02,
    height: Metrics.WIDTH * 0.02,
    borderRadius: Metrics.WIDTH * 0.01,
    marginLeft: Metrics.WIDTH * 0.005,
    marginRight: Metrics.WIDTH * 0.005
  },

  slide: {
    height: Metrics.HEIGHT * 0.3,
    backgroundColor: Colors.transparent
  },

  sliderImage: {
    resizeMode: "cover",
    height: Metrics.HEIGHT * 0.3,
    width: Metrics.WIDTH,
    backgroundColor: "grey"
  },

  contentStyle: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    top: Metrics.HEIGHT * 0.055
  },

  // headertext: {
  //   fontFamily: Fonts.type.helveticaNeueBold,
  //   backgroundColor: Colors.transparent,
  //   fontSize: Fonts.moderateScale(16),
  //   textAlign: "center",
  //   alignSelf: "center",
  //   color: "#0e1130"
  // },

  desctext: {
    fontFamily: Fonts.type.helveticaNeueLight,
    backgroundColor: Colors.transparent,
    fontSize: Fonts.moderateScale(23),
    textAlign: "center",
    alignSelf: "center",
    color: "#8d1b1b",
    lineHeight: Fonts.moderateScale(23)
  },
  // END SWIPER

  listContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: Metrics.HEIGHT * 0.014,
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "space-between",
    // backgroundColor: "#fafafa",
    paddingBottom: Metrics.HEIGHT * 0.02,
    marginLeft: Metrics.HEIGHT * 0.01,
    marginRight: Metrics.HEIGHT * 0.01
  },

  listMainview: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.345,
        width: Metrics.WIDTH * 0.47
      },
      android: {
        height: Metrics.HEIGHT * 0.382,
        width: Metrics.WIDTH * 0.47
      }
    }),
    backgroundColor: "#fff",
    borderRadius: Metrics.HEIGHT * 0.005,
    marginBottom: Metrics.HEIGHT * 0.015,
    shadowColor: "gray",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderColor: "#bec1c2"
  },

  destinationimg: {
    width: Metrics.WIDTH * 0.47,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.27,
        borderRadius: 1.8
      },
      android: {
        height: Metrics.HEIGHT * 0.3,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2
      }
    })
  },

  destinationnamelist: {
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(14),
    color: "#1d262a",
    paddingTop: Metrics.HEIGHT * 0.01,
    paddingLeft: Metrics.HEIGHT * 0.01
  },

  placeDistanceBg: {
    flexDirection: "row",
    marginLeft: Metrics.WIDTH * 0.016,
  },

  placeDistanceTxt: {
    fontSize: Fonts.moderateScale(12),
    color: "#b7b7b7",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    backgroundColor: Colors.transparent,
    marginLeft: Metrics.WIDTH * 0.008,
    marginTop: Metrics.WIDTH * 0.01
  },

  mexicotext: {
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(12),
    color: "#e63575",
    paddingLeft: Metrics.HEIGHT * 0.01,
    paddingTop: Metrics.HEIGHT * 0.004
  },

  listContentFL: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: Metrics.HEIGHT * 0.014,
    paddingBottom: Metrics.HEIGHT * 0.02,
    marginLeft: Metrics.HEIGHT * 0.002,
    marginRight: Metrics.HEIGHT * 0.01
  },

  listMainviewFL: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.345,
        width: Metrics.WIDTH * 0.47
      },
      android: {
        height: Metrics.HEIGHT * 0.392,
        width: Metrics.WIDTH * 0.485,
        paddingLeft: Metrics.HEIGHT * 0.014
      }
    }),
    borderRadius: Metrics.HEIGHT * 0.008,
    borderWidth:1,
    borderColor:"transparent"
  },

  destinationimgFL: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.27,
        borderRadius: 1.8
      },
      android: {
        height: Metrics.HEIGHT * 0.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderColor:"transparent"
      }
    })
  },

  destinationnamelistFL: {
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(14),
    color: "#1d262a",
    paddingTop: Metrics.HEIGHT * 0.01,
    paddingLeft: Metrics.HEIGHT * 0.01
  },

  placeDistanceBgFL: {
    flexDirection: "row",
    marginLeft: Metrics.WIDTH * 0.016,
  },

  placeDistanceTxtFL: {
    fontSize: Fonts.moderateScale(12),
    color: "#b7b7b7",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    backgroundColor: Colors.transparent,
    marginLeft: Metrics.WIDTH * 0.008,
    marginTop: Metrics.WIDTH * 0.01,
    marginRight: Metrics.WIDTH * 0.024,
  },

  btnsec:{
		height: (Metrics.HEIGHT*0.12),
		justifyContent: 'center',
		backgroundColor: Colors.transparent
  },
  
  discoverBg: {
		backgroundColor:'#51B252',
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

  bottomModal: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 0,
    ...Platform.select({
      ios: {
        marginTop:65
      },
      android: {
        marginTop:45
      }
    }),

  },
  mainview:{
    alignItems: 'flex-start',
    height: 300,
    backgroundColor: 'white',
    borderRadius:10,
    width: Metrics.WIDTH*0.9,
  },
  headerbottom:{
    height: 50,
    width: Metrics.WIDTH*0.9,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  semirow:{
    width: Metrics.WIDTH,
    height:125,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  horizontalline:{
    height: 0.5,
    backgroundColor: '#f2f2f2',
    width: Metrics.WIDTH*0.9
  },
  verticalline:{
    height: 125,
    backgroundColor: '#f2f2f2',
    width: 0.5
  },
  listrow:{
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.WIDTH*0.3,
    height: 125
  },



  headertxt:{
    fontSize: Fonts.moderateScale(32),
    textAlign: 'center',
    color:'white'
  },
  screenBg: {
  	flex: 1,
  	width: Metrics.WIDTH,
  	height: Metrics.HEIGHT,
  	position: 'absolute'
  },
  body: {
		flex: 2,
		alignItems: 'center',
		backgroundColor: 'transparent'
  },

  badgetext:{
    color:'white',
    fontSize: Fonts.moderateScale(13),
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  badgeview:{
    backgroundColor: '#d9b63e',
    marginLeft: 10,
    borderRadius: 10,
    height: 17,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  modalbg:{
    flex: 1,
  	width: Metrics.WIDTH,
  	height: Metrics.HEIGHT*0.5,
     margin:-(Metrics.WIDTH*0.001),
  },
  rowicon:{
    backgroundColor: 'transparent',
    height: 20,
    width: 20,
    tintColor: '#36343f',
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center'
  },
  rowtxt:{
    color:'#919cae',
    fontSize: Fonts.moderateScale(15),
    backgroundColor: 'transparent',
    textAlign: 'left',
    marginTop: 12,
    fontFamily: Fonts.type.sfuiDisplayLight
  },


  linebg:{
    backgroundColor: 'rgba(61,61,61,0.9)',
    height:0.5,
    width: Metrics.WIDTH*0.6
  },
  imageLogoMountify: {
    alignSelf: 'center',
    width: 100,
    height: 80,
    marginBottom: 20
  },


  userpic:{
    width: (Metrics.WIDTH) * 0.13,
    height: (Metrics.WIDTH) * 0.13,
    borderRadius: (Metrics.WIDTH)* 0.065,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    alignSelf: 'center',
    marginLeft: (Metrics.WIDTH) * 0.1,
  },
  closeview:{
    borderTopLeftRadius:180,
    height:90,
    width: 90,
    backgroundColor: '#d9b63e',
    position: 'absolute',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: 0,
    right: 0
  },
  mainclose:{
    // backgroundColor: "red",
    height:70,
    width: 50,

    // alignItems: 'flex-start',
  },
  closeicon:{
    color:'white',
    fontSize: Fonts.moderateScale(80),
    backgroundColor: 'transparent',
    alignSelf: 'flex-start'
    // textAlign: 'right',
  },


  lefts: {
    flex: 1,
		 backgroundColor: 'transparent',
     marginRight: 15,
     marginTop: 15,
     alignSelf: 'flex-end',
     justifyContent: 'flex-end'
  },
  headerModal: {
    backgroundColor: 'rgba(5,6,6,0.5)',

    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
			}
    }),
		elevation: 0
  },
  triangles:{
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white'
  },

  headerNameView:{
    flexDirection: 'column',
    marginTop: 10
  },

  headerTitle:{
    color:'white'
  },

  headerArrow:{
    color:'white',
    alignItems:'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },

  filterText:{
    color:'#292d48',
    textAlign:'center',
    justifyContent:'center'
  },

  listMain: {
    backgroundColor: 'white',
    // paddingLeft: (Metrics.WIDTH*0.005)
  },

  listGenderMain: {
    justifyContent: 'space-between',
    height:(Metrics.HEIGHT*0.08),
    borderColor: '#e5e5e5',
    borderBottomWidth: 0.5
  },

  listTitle: {
    color:'#4c4c4c',
    fontFamily:Fonts.type.sfuiDisplayRegular,
    fontSize:Fonts.moderateScale(18)
  },

  listAgeMain: {
    justifyContent: 'space-between',
    height:(Metrics.HEIGHT*0.08),
    borderColor: '#e5e5e5',
    borderBottomWidth: 1
  },

  listAgeRight: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  listRightText: {
    color:'#a5a5a5',
    fontFamily:Fonts.type.sfuiDisplayRegular,
    fontSize:Fonts.moderateScale(18)
  },

  arrowForword: {
    color:'#c7c7cc',
    paddingLeft: (Metrics.WIDTH*0.02),
    fontSize: Fonts.moderateScale(30)
  },

  markerStyle: {
    height:(Metrics.HEIGHT*0.035),
    width: (Metrics.HEIGHT*0.035),
    backgroundColor:'#f87362',
    borderWidth: 0.5,
    borderColor: '#fa6982'
  },

  containerStyle: {
    alignSelf: 'center',
    height:5
  },

  trackStyle: {
    height: (Metrics.HEIGHT*0.005),
    borderRadius: 4
  },

  listDistanceMain: {
    justifyContent: 'space-between',
    height:(Metrics.HEIGHT*0.08),
    borderColor: Colors.transparent
  },

  listDistanceRight: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  arrowBack: {
    color:'#c7c7cc',
    paddingRight: (Metrics.WIDTH*0.02),
    fontSize: Fonts.moderateScale(30)
  },

  styleGradient: {
    height: (Metrics.HEIGHT * 0.038),
    width: (Metrics.WIDTH * 0.48),
    borderRadius: (Metrics.HEIGHT * 0.02),
  },

  leftBtnRadius: {
    borderTopLeftRadius: I18nManager.isRTL ? 0 : (Metrics.HEIGHT * 0.02),
    borderBottomLeftRadius: I18nManager.isRTL ? 0 : (Metrics.HEIGHT * 0.02),
    borderTopRightRadius: I18nManager.isRTL ? (Metrics.HEIGHT * 0.02) : 0,
    borderBottomRightRadius: I18nManager.isRTL ? (Metrics.HEIGHT * 0.02) : 0,
  },


  rightBtnRadius: {
    borderTopRightRadius: I18nManager.isRTL ? 0 : (Metrics.HEIGHT * 0.02),
    borderBottomRightRadius: I18nManager.isRTL ? 0 : (Metrics.HEIGHT * 0.02),
    borderTopLeftRadius: I18nManager.isRTL ? (Metrics.HEIGHT * 0.02) : 0,
    borderBottomLeftRadius: I18nManager.isRTL ? (Metrics.HEIGHT * 0.02) : 0,
  },

  segmentTabSec: {
    height: (Metrics.HEIGHT * 0.038),
    width: (Metrics.WIDTH * 0.48),
    borderRadius: (Metrics.HEIGHT * 0.02),
    backgroundColor: Colors.transparent,
  },

  selectedSegmentTab: {
    height: (Metrics.HEIGHT * 0.038),
    width: (Metrics.WIDTH * 0.16),
    backgroundColor: Colors.transparent,
    borderColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
		overflow: 'visible'
  },

  segmentTab: {
    height: (Metrics.HEIGHT * 0.038),
    width: (Metrics.WIDTH * 0.16),
    backgroundColor: '#e6e6e6',
    borderColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
		overflow: 'hidden'
  },

  activeTab: {
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: Colors.snow
  },

  normalTab: {
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: '#666666'
  },

});

export default styles;
