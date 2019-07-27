import React, { Component } from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  BackHandler,
  AsyncStorage,
  PermissionsAndroid
} from "react-native";
import { Metrics, Images } from "../../../resources/Themes";
import Swiper from "react-native-swiper";
import styles from "./style";

const swiperData = [
  {
    id: 1,
    title: "Bromo",
    description:"Selamat Datang \n Terimakasih telah menggunakan aplikasi kami",
    image: { uri: 'https://i.imgur.com/lOiZxaX.png' }
  },
  {
    id: 2,
    title: "Bromo",
    description:"Sibuk Kerja, Kuliah, maupun tugas numpuk ?",
    image: { uri: 'https://i.imgur.com/lwZiGxd.png' }
  },
  {
    id: 3,
    title: "Bromo",
    description:"Rencanakan liburan anda dengan lebih mudah",
    image: { uri: 'https://i.imgur.com/p3zHWCv.png' }
  },
  {
    id: 4,
    title: "Bromo",
    description:"Selamat bersenang - senang",
    image: { uri: 'https://i.imgur.com/fVaTMKn.png' }
  }
];

export default class IntroductionScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
    this.requestLocationPermission()
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    return BackHandler.exitApp();
  };

  goToHome(){
    this.props.navigation.navigate("MainActivityScreen")
    AsyncStorage.setItem('has_walk_through', "TRUE");
  }

  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Cool Location Permission',
          'message': 'Cool Location App needs access to your location '
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
      }
    } catch (err) {
    }
  }

  render() {
    // StatusBar.setBarStyle("dark-content", true);
    // if (Platform.OS == "android") {
    //   StatusBar.setBackgroundColor("#F4F4F4", true);
    //   StatusBar.setTranslucent(true);
    // }

    return (
      <View style={styles.main}>
        <View
          style={{
            width: Metrics.WIDTH,
            height: Metrics.HEIGHT * 0.86,
            backgroundColor:"#f5f5f6",
            borderBottomEndRadius:150,
            borderBottomStartRadius:150,
          }}
        >
          <Swiper
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={2.5}
            activeDot={<View style={styles.activeDot} />}
            dot={<View style={styles.dot} />}
          >
            {swiperData.map((item, index) => {
              return (
                <View style={styles.slide} key={index}>
                  <Image
                    style={{
                      resizeMode: 'cover',
                      height: (Metrics.HEIGHT * 0.44),
                      width: (Metrics.HEIGHT * 0.44),
                      borderRadius: (Metrics.HEIGHT * 0.22),
                      alignSelf: 'center',
                      ...Platform.select({
                          ios: {
                            marginTop: (Metrics.HEIGHT * 0.04),
                          },
                          android: {
                            marginTop: (Metrics.HEIGHT * 0.02),
                          }
                      })
                    }}
                    source={item.image}
                  />
                  {/* <Text style={styles.desctext}>{item.description}</Text> */}
                  <View style={styles.contentStyle}>
                    <Text style={styles.headertext}>
                      {item.title}
                    </Text>
                    <Text style={styles.desctext}>
                      {item.description}
                    </Text>
                  </View>
                </View>
              );
            })}
          </Swiper>
        </View>
        {/* <View style={styles.bottomView}>
          <TouchableOpacity
            style={styles.getStartedBtnBg}
            onPress={() => this.goToSignin()}
          >
            <Text style={styles.getStartedText}>GET STARTED</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.btnsec}>
         <TouchableOpacity onPress={()=> this.goToHome()} style={styles.discoverBg}>
           <Text style={styles.discoverTxt}>GET STARTED</Text>
         </TouchableOpacity>
       </View>
      </View>
    );
  }
}
