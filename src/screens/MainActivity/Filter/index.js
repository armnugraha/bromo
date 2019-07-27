import React, { Component } from "react";
import {
  View,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ListView,
  I18nManager,
  BackHandler
} from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Right,
  Body,
  Title,
  Icon,
  List,
  ListItem,
  Text,
  Item,
  Input,
  Segment
} from "native-base";

import LinearGradient from "react-native-linear-gradient";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { Actions } from "react-native-router-flux";
import { Images, Metrics, Fonts, Colors } from "../../../resources/Themes";
import styles from "./styles";

// Screen Styles

import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class PersonalChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      segment: 1,
      distance: 10,
      multiSliderPrice: [18, 25],
      isSelected: false
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

  multiSliderValuesChange = values => {
    this.setState({ multiSliderPrice: values });
  };

  _renderDecValue = () => {
    var dis = this.state.distance;
    dis -= 1;
    this.setState({ distance: dis });
  };

  _renderIncValue = () => {
    var dis = this.state.distance;
    dis += 1;
    this.setState({ distance: dis });
  };

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return (
      <Container>
        <LinearGradient
          locations={[0.1, 0.75]}
          colors={["#f87264", "#fa6982"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <Header
            androidStatusBarColor={Colors.transparent}
            style={styles.header}
          >
            {/* Take up the space */}
            <Left style={{ flex: 1.5 }}>
              <TouchableOpacity onPress={Actions.pop} style={styles.left}>
                {I18nManager.isRTL ? (
                  <FontAwesome
                    name="angle-right"
                    size={30}
                    color="white"
                    style={{ paddingTop: Metrics.HEIGHT * 0.02 }}
                  />
                ) : (
                  <FontAwesome
                    name="angle-left"
                    size={30}
                    color="white"
                    style={{ paddingTop: Metrics.HEIGHT * 0.02 }}
                  />
                )}
              </TouchableOpacity>
            </Left>

            {/* Title */}
            <Body style={styles.body}>
              <Title style={styles.headetTxt}>Filter</Title>
            </Body>

            {/* Right Icon */}
            <Right style={styles.right}>
              <TouchableOpacity onPress={() => alert("Done")}>
                <Text style={styles.leftMsg}>Done</Text>
              </TouchableOpacity>
            </Right>
          </Header>
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderText}>Filter</Text>
          </View>
          <List style={styles.listMain}>
            <ListItem style={styles.listGenderMain}>
              <View>
                <Text style={styles.listTitle}>Gender</Text>
              </View>
              <LinearGradient
                locations={[0.1, 0.75]}
                colors={["#f87362", "#fa6982"]}
                style={styles.styleGradient}
              >
                {Platform.OS == "ios" ? (
                  <Segment style={styles.segmentTabSec}>
                    <Button
                      style={[
                        styles.leftBtnRadius,
                        this.state.segment === 1
                          ? styles.selectedSegmentTab
                          : styles.segmentTab
                      ]}
                      active={this.state.segment === 1 ? true : false}
                      onPress={() => this.setState({ segment: 1 })}
                    >
                      <Text
                        style={
                          this.state.segment === 1
                            ? styles.activeTab
                            : styles.normalTab
                        }
                      >
                        All
                      </Text>
                    </Button>

                    <Button
                      style={
                        this.state.segment === 2
                          ? styles.selectedSegmentTab
                          : styles.segmentTab
                      }
                      active={this.state.segment === 2 ? true : false}
                      onPress={() => this.setState({ segment: 2 })}
                    >
                      <Text
                        style={
                          this.state.segment === 2
                            ? styles.activeTab
                            : styles.normalTab
                        }
                      >
                        Male
                      </Text>
                    </Button>

                    <Button
                      style={[
                        styles.rightBtnRadius,
                        this.state.segment === 3
                          ? styles.selectedSegmentTab
                          : styles.segmentTab
                      ]}
                      active={this.state.segment === 3 ? true : false}
                      onPress={() => this.setState({ segment: 3 })}
                    >
                      <Text
                        style={
                          this.state.segment === 3
                            ? styles.activeTab
                            : styles.normalTab
                        }
                      >
                        Female
                      </Text>
                    </Button>
                  </Segment>
                ) : (
                  <Segment style={styles.segmentTabSec}>
                    <TouchableOpacity
                      style={[
                        styles.leftBtnRadius,
                        this.state.segment === 1
                          ? styles.selectedSegmentTab
                          : styles.segmentTab
                      ]}
                      active={this.state.segment === 1 ? true : false}
                      onPress={() => this.setState({ segment: 1 })}
                    >
                      <Text
                        style={
                          this.state.segment === 1
                            ? styles.activeTab
                            : styles.normalTab
                        }
                      >
                        All
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={
                        this.state.segment === 2
                          ? styles.selectedSegmentTab
                          : styles.segmentTab
                      }
                      active={this.state.segment === 2 ? true : false}
                      onPress={() => this.setState({ segment: 2 })}
                    >
                      <Text
                        style={
                          this.state.segment === 2
                            ? styles.activeTab
                            : styles.normalTab
                        }
                      >
                        Male
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        styles.rightBtnRadius,
                        this.state.segment === 3
                          ? styles.selectedSegmentTab
                          : styles.segmentTab
                      ]}
                      active={this.state.segment === 3 ? true : false}
                      onPress={() => this.setState({ segment: 3 })}
                    >
                      <Text
                        style={
                          this.state.segment === 3
                            ? styles.activeTab
                            : styles.normalTab
                        }
                      >
                        Female
                      </Text>
                    </TouchableOpacity>
                  </Segment>
                )}
              </LinearGradient>
            </ListItem>

            <ListItem style={styles.listAgeMain}>
              <View>
                <Text style={styles.listTitle}>Age</Text>
              </View>
              <TouchableOpacity
                style={styles.listAgeRight}
                onPress={() =>
                  this.setState({ isSelected: !this.state.isSelected })
                }
              >
                <Text style={styles.listRightText}>
                  {this.state.multiSliderPrice[0]} -{" "}
                  {this.state.multiSliderPrice[1]}
                </Text>
                {I18nManager.isRTL ? (
                  <Icon name="ios-arrow-back" style={styles.arrowForword} />
                ) : (
                  <Icon name="ios-arrow-forward" style={styles.arrowForword} />
                )}
              </TouchableOpacity>

              {this.state.isSelected ? (
                <MultiSlider
                  values={this.state.multiSliderPrice}
                  sliderLength={100}
                  onValuesChange={this.multiSliderValuesChange}
                  min={0}
                  max={100}
                  step={1}
                  allowOverlap
                  snapped
                  selectedStyle={{ backgroundColor: "#fa6982" }}
                  unselectedStyle={{ backgroundColor: "#fa698270" }}
                  markerStyle={styles.markerStyle}
                  containerStyle={styles.containerStyle}
                  trackStyle={styles.trackStyle}
                />
              ) : null}
            </ListItem>

            <ListItem style={styles.listDistanceMain}>
              <View>
                <Text style={styles.listTitle}>Distance</Text>
              </View>
              <View style={styles.listDistanceRight}>
                <TouchableOpacity onPress={this._renderDecValue}>
                  <Icon name="ios-arrow-back" style={styles.arrowBack} />
                </TouchableOpacity>
                <Text style={styles.listRightText}>
                  {this.state.distance} km
                </Text>
                <TouchableOpacity onPress={this._renderIncValue}>
                  {I18nManager.isRTL ? (
                    <Icon name="ios-arrow-back" style={styles.arrowForword} />
                  ) : (
                    <Icon
                      name="ios-arrow-forward"
                      style={styles.arrowForword}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </ListItem>
          </List>
        </View>
      </Container>
    );
  }
}
