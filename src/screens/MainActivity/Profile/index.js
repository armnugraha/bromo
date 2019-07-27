import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ListView,
  AsyncStorage,
  I18nManager,
  BackHandler,
  ScrollView
} from "react-native";
import {
  Container,
  Button,
  Right,
  Left,
  ListItem,
  Content,
  Body,
  Header,
  Title
} from "native-base";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

import { Actions } from "react-native-router-flux";

// Screen Styles
import { Images, Metrics, Fonts, Colors } from "../../../resources/Themes";
import styles from "./styles";

const imageArrayOne = [
  {
    id: 1,
    image: Images.letter
  },
  {
    id: 2,
    image: Images.loveArrow
  },
  {
    id: 3,
    image: Images.loveDevil
  },
  {
    id: 4,
    image: Images.loveLock
  },
  {
    id: 5,
    image: Images.mobile
  },
  {
    id: 6,
    image: Images.teddy
  }
];

const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({ rowHasChanged });

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(imageArrayOne)
    };
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.goBack();
    return true;
  };

  _renderRow(rowData) {
    return (
      <View style={{ marginLeft: 12 }}>
        <Image
          style={{
            width: Metrics.WIDTH * 0.15,
            height: Metrics.WIDTH * 0.15,
            resizeMode: "contain"
          }}
          source={rowData.image}
        />
      </View>
    );
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#fa6b7b", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.main}>
        <Header androidStatusBarColor={"#fa6b7b"} style={styles.header}>
          {/* Take up the space */}
          <Left style={styles.left}>
            <TouchableOpacity onPress={Actions.pop}>
              {I18nManager.isRTL ? (
                <FontAwesome name="angle-right" size={30} color="white" />
              ) : (
                <FontAwesome name="angle-left" size={30} color="white" />
              )}
            </TouchableOpacity>
          </Left>

          {/* Title */}
          <Body style={styles.body}>
            <Title style={{ color: Colors.snow }}>Profile</Title>
          </Body>

          {/* Right Icon */}
          <Right style={styles.right} />
        </Header>

        <View style={{ flex: 1, backgroundColor: "#f6f6f6" }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flexGrow: 1 }}
          >
            <View>
              <View
                style={{
                  width: Metrics.WIDTH,
                  height: Metrics.HEIGHT * 0.3,
                  alignItems: "center"
                }}
              >
                <ImageBackground
                  style={{
                    width: Metrics.WIDTH,
                    height: Metrics.HEIGHT * 0.3,
                    backgroundColor: "transparent",
                    alignItems: "center"
                  }}
                  source={Images.profileBgImg}
                  blurRadius={8}
                >
                  <Image source={Images.profileBgImg} style={styles.profile} />
                  <Text style={styles.name}>John Doe</Text>
                  <View style={{ flexDirection: "row", marginTop: -12 }}>
                    <Ionicons
                      name="ios-male"
                      size={20}
                      color="#00aeef"
                      style={{ marginRight: 5, marginTop: 12 }}
                    />
                    <Text
                      style={[
                        styles.name,
                        { fontSize: Fonts.moderateScale(18) }
                      ]}
                    >
                      25
                    </Text>
                  </View>
                </ImageBackground>
              </View>

              <View style={styles.aboutView}>
                <Text style={styles.aboutText}>About Me</Text>
                <Text style={styles.aboutDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Text>
              </View>

              <View style={styles.aboutView}>
                <ListView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow.bind(this)}
                  enableEmptySections
                  scrollEnabled={true}
                />
              </View>

              <View style={[styles.aboutView, { paddingRight: 0 }]}>
                <View style={styles.infoView}>
                  <Text style={styles.titleText}>Address</Text>
                  <Text style={styles.ansText}>California,USA</Text>
                  <Entypo
                    name="chevron-small-right"
                    size={25}
                    color="#c7c7cc"
                    style={{ marginLeft: 5 }}
                  />
                </View>

                <View style={styles.infoDivider} />

                <View style={styles.infoView}>
                  <Text style={styles.titleText}>Birthday</Text>
                  <Text style={styles.ansText}>04/16/1988</Text>
                  <Entypo
                    name="chevron-small-right"
                    size={25}
                    color="#c7c7cc"
                    style={{ marginLeft: 5 }}
                  />
                </View>

                <View style={styles.infoDivider} />

                <View style={styles.infoView}>
                  <Text style={styles.titleText}>Status</Text>
                  <Text style={styles.ansText}>Single</Text>
                  <Entypo
                    name="chevron-small-right"
                    size={25}
                    color="#c7c7cc"
                    style={{ marginLeft: 5 }}
                  />
                </View>

                <View style={styles.infoDivider} />

                <View style={styles.infoView}>
                  <Text style={styles.titleText}>Gender</Text>
                  <Text style={styles.ansText}>Male</Text>
                  <Entypo
                    name="chevron-small-right"
                    size={25}
                    color="#c7c7cc"
                    style={{ marginLeft: 5 }}
                  />
                </View>

                <View style={styles.infoDivider} />

                <View style={styles.infoView}>
                  <Text style={styles.titleText}>Nation</Text>
                  <Text style={styles.ansText}>Italia</Text>
                  <Entypo
                    name="chevron-small-right"
                    size={25}
                    color="#c7c7cc"
                    style={{ marginLeft: 5 }}
                  />
                </View>
              </View>

              <Text style={styles.advanceText}>Advance</Text>
              <View
                style={[styles.aboutView, { paddingRight: 0, marginBottom: 0 }]}
              >
                <View style={styles.infoView}>
                  <Text style={styles.titleText}>Religion</Text>
                  <Text style={styles.ansText}>California,USA</Text>
                  <Entypo
                    name="chevron-small-right"
                    size={25}
                    color="#c7c7cc"
                    style={{ marginLeft: 5 }}
                  />
                </View>

                <View style={styles.infoDivider} />

                <View style={styles.infoView}>
                  <Text style={styles.titleText}>Sport</Text>
                  <Text style={styles.ansText}>04/16/1988</Text>
                  <Entypo
                    name="chevron-small-right"
                    size={25}
                    color="#c7c7cc"
                    style={{ marginLeft: 5 }}
                  />
                </View>

                <View style={styles.infoDivider} />

                <View style={styles.infoView}>
                  <Text style={styles.titleText}>Travel</Text>
                  <Text style={styles.ansText}>One per year</Text>
                  <Entypo
                    name="chevron-small-right"
                    size={25}
                    color="#c7c7cc"
                    style={{ marginLeft: 5 }}
                  />
                </View>

                <View style={styles.infoDivider} />

                <View style={styles.infoView}>
                  <Text style={styles.titleText}>Income</Text>
                  <Text style={styles.ansText}>$500-$1000</Text>
                  <Entypo
                    name="chevron-small-right"
                    size={25}
                    color="#c7c7cc"
                    style={{ marginLeft: 5 }}
                  />
                </View>

                <View style={styles.infoDivider} />

                <View style={styles.infoView}>
                  <Text style={styles.titleText}>Style</Text>
                  <Text style={styles.ansText}>Fashion</Text>
                  <Entypo
                    name="chevron-small-right"
                    size={25}
                    color="#c7c7cc"
                    style={{ marginLeft: 5 }}
                  />
                </View>

                <View style={styles.infoDivider} />

                <View style={styles.infoView}>
                  <Text style={styles.titleText}>Smoke</Text>
                  <Text style={styles.ansText}>No Smoke</Text>
                  <Entypo
                    name="chevron-small-right"
                    size={25}
                    color="#c7c7cc"
                    style={{ marginLeft: 5 }}
                  />
                </View>

                <View style={styles.infoDivider} />

                <View style={styles.infoView}>
                  <Text style={styles.titleText}>Beer</Text>
                  <Text style={styles.ansText}>Little</Text>
                  <Entypo
                    name="chevron-small-right"
                    size={25}
                    color="#c7c7cc"
                    style={{ marginLeft: 5 }}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Container>
    );
  }
}
