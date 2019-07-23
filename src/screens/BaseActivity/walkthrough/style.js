import { Platform, StyleSheet } from "react-native";
import { Metrics, Fonts, Colors } from "../../../resources/Themes";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.snow
  },

  bottomView: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.11,
    alignItems: "center",
    justifyContent: "center"
  },

  getStartedBtnBg: {
    width: Metrics.WIDTH * 0.95,
    backgroundColor: "#51B252",
    height: Metrics.HEIGHT * 0.08,
    justifyContent: "center",
    alignItems: "center"
  },

  getStartedText: {
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(15),
    color: Colors.snow
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
    marginLeft: Metrics.WIDTH * 0.024,
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'left',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(11),
		width :(Metrics.WIDTH) * 0.7,
		color:'rgba(54,54,54,0.8)',
		marginTop: (Metrics.HEIGHT * 0.03)
	},

  dot: {
    backgroundColor: "#FFF",
    width: Metrics.WIDTH * 0.02,
    height: Metrics.WIDTH * 0.02,
    borderRadius: Metrics.WIDTH * 0.01,
    marginLeft: Metrics.WIDTH * 0.005,
    marginRight: Metrics.WIDTH * 0.005,
    marginTop: Metrics.HEIGHT * 3.25
    // marginBottom: Metrics.HEIGHT * 0.25
  },

  activeDot: {
    backgroundColor: "#51B252",
    width: Metrics.WIDTH * 0.02,
    height: Metrics.WIDTH * 0.02,
    borderRadius: Metrics.WIDTH * 0.01,
    marginLeft: Metrics.WIDTH * 0.005,
    marginRight: Metrics.WIDTH * 0.005,
    // marginBottom: Metrics.HEIGHT * 0.25
    marginTop: Metrics.HEIGHT * 3.25
  },

  slide: {
    height: Metrics.HEIGHT * 0.89,
    paddingTop: Metrics.HEIGHT * 0.08,
    alignSelf: "center",
    alignItems: "center"
  },

  desctext: {
    paddingHorizontal: 20,
    color: "#D8D8D8",
    fontFamily: Fonts.type.helveticaRegular,
    fontSize: Fonts.moderateScale(14),
    marginTop: Metrics.HEIGHT * 0.05,
    textAlign: "center",
    lineHeight: 20
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
  
});

export default styles;
