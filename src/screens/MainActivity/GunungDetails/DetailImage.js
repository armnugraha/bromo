import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  AsyncStorage,
  BackHandler
} from "react-native";
import {
  Container,
} from "native-base";
import Swiper from "react-native-swiper";
import LinearGradient from "react-native-linear-gradient";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";
import { Actions } from "react-native-router-flux";

// Screen Styles
import styles from "./styles";
import { Images, Metrics, Fonts, Colors } from "../../../resources/Themes";

const cardBgOne =
  "https://i.imgur.com/6gs6CWz.png";
const cardBgTwo =
  "https://i.imgur.com/6gs6CWz.png";
const cardBgThree =
  "https://i.imgur.com/6gs6CWz.png";

export default class DetailImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      Option: [
        {
          id: 1,
          name: "View Profile"
        },
        {
          id: 2,
          name: "Message"
        },
        {
          id: 3,
          name: "Block User"
        },
        {
          id: 4,
          name: "Report User"
        }
      ],
      isLike: true
    };
  }

  componentWillMount() {
    AsyncStorage.multiGet(["Name", "WatchCount", "Distance"]).then(data => {
      this.setState({
        Name: data[0][1],
        WatchCount: data[1][1],
        Distance: data[2][1]
      });
    });

    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    Actions.pop()
    return true;
  };

  _toggleModal = () => this.setState({ isModalVisible: false });

  likeButtonHandle() {
    this.setState({ isLike: !this.state.isLike });
  }

  render() {

    var dataContent = [
      {
        id: 1,
        cardBg: { uri: cardBgOne }
      },
      {
        id: 2,
        cardBg: { uri: cardBgTwo }
      },
      {
        id: 3,
        cardBg: { uri: cardBgThree }
      }
    ];

    return (
        // FROM NEARBY DETAILS
      <Container style={styles.mainImgDetail}>
          <StatusBar backgroundColor="transparent"/>
        {/* <Header androidStatusBarColor={"#fa6b7b"} style={styles.header}>

          <Left style={styles.left}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="ios-arrow-round-down" size={30} color="white" />
            </TouchableOpacity>
          </Left>

          <Body style={styles.body}>
            <Title style={{ color: Colors.snow }}>Emma Roberts</Title>
          </Body>

          <Right style={styles.right}>
            <TouchableOpacity
              onPress={() => this.setState({ isModalVisible: true })}
            >
              <SimpleLineIcons
                name="options-vertical"
                size={16}
                color="white"
              />
            </TouchableOpacity>
          </Right>
        </Header> */}

        <View style={styles.swipeContainerImgDetail}>
          <Swiper
            showsButtons={false}
            autoplay={false}
            autoplayTimeout={2.5}
            activeDot={<View />}
            dot={<View />}
          >
            {dataContent.map((item, index) => {
              return (
                <View style={styles.slideContainerImgDetail} key={index}>
                  <Image source={item.cardBg} style={styles.imageContainerImgDetail} />
                  <LinearGradient
                    locations={[0.5, 1]}
                    colors={["transparent", "black"]}
                    style={styles.shadowBgImgDetail}
                  >
                    <View style={styles.swipeImageCountBgImgDetail}>
                      <Image
                        source={Images.albumIcon}
                        style={styles.albumIconImgDetail}
                      />
                      <Text style={styles.galleryImgTxtImgDetail}>{item.id}/3</Text>
                    </View>
                  </LinearGradient>
                </View>
              );
            })}
          </Swiper>
        </View>
      </Container>
    );
  }
}