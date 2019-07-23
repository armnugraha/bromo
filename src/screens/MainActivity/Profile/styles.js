import { Platform, StyleSheet } from "react-native";
import { Images, Metrics, Fonts, Colors } from "../../../resources/Themes";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.transparent,
    flexDirection: "column"
  },

  header: {
    backgroundColor: "#fa6b7b",
    height: Metrics.HEIGHT * 0.1,
    width: Metrics.WIDTH,
    flexDirection: "row",
    borderBottomColor: "#fa6b7b",
    paddingTop: Metrics.WIDTH * 0.05
  },

  left: {
    flex: 1
  },

  body: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center"
  },

  right: {
    flex: 1
  },

  mainView: {
    height: Metrics.HEIGHT * 0.8,
    width: Metrics.WIDTH,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },

  profile: {
    height: Metrics.HEIGHT * 0.14,
    width: Metrics.HEIGHT * 0.14,
    borderRadius: Metrics.HEIGHT * 0.07,
    borderWidth: 2,
    borderColor: "#ffffff",
    resizeMode: "cover",
    marginTop: Metrics.HEIGHT * 0.03
  },

  name: {
    fontSize: Fonts.moderateScale(22),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#ffffff",
    marginTop: Metrics.HEIGHT * 0.015
  },

  aboutView: {
    padding: 15,
    backgroundColor: "#ffffff",
    marginBottom: 15
  },

  aboutText: {
    color: "#da3c47",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplaySemibold
  },

  aboutDescription: {
    color: "#929292",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  titleText: {
    color: "#929292",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    width: Metrics.WIDTH * 0.4
  },

  ansText: {
    color: "#464646",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    width: Metrics.WIDTH * 0.47,
    textAlign: "right"
  },

  infoView: {
    flexDirection: "row"
  },

  infoDivider: {
    height: 1,
    backgroundColor: "#dcdcdc",
    marginTop: 5,
    marginBottom: 10
  },

  advanceText: {
    paddingLeft: 15,
    ...Platform.select({
      ios: {
        paddingBottom: 15
      },
      android: {
        paddingBottom: 10
      }
    }),
    color: "#464646",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayRegular
  }
});

export default styles;
