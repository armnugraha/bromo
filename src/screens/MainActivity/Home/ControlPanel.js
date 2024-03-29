import React, { Component } from "react";
import {
  AsyncStorage,
  Clipboard,
  StatusBar,
  View,
  TouchableOpacity,
  Modal,
  Platform,
  ToastAndroid,
  AlertIOS
} from "react-native";
import {
  Text,
  Container,
  Content,
} from "native-base";
import Share, {ShareSheet, Button} from 'react-native-share';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Styles
import styles_drawer from "./styles_drawer";

//  twitter icon
const TWITTER_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABvFBMVEUAAAAA//8AnuwAnOsAneoAm+oAm+oAm+oAm+oAm+kAnuwAmf8An+0AqtUAku0AnesAm+oAm+oAnesAqv8An+oAnuoAneoAnOkAmOoAm+oAm+oAn98AnOoAm+oAm+oAmuoAm+oAmekAnOsAm+sAmeYAnusAm+oAnOoAme0AnOoAnesAp+0Av/8Am+oAm+sAmuoAn+oAm+oAnOoAgP8Am+sAm+oAmuoAm+oAmusAmucAnOwAm+oAmusAm+oAm+oAm+kAmusAougAnOsAmukAn+wAm+sAnesAmeoAnekAmewAm+oAnOkAl+cAm+oAm+oAmukAn+sAmukAn+0Am+oAmOoAmesAm+oAm+oAm+kAme4AmesAm+oAjuMAmusAmuwAm+kAm+oAmuoAsesAm+0Am+oAneoAm+wAmusAm+oAm+oAm+gAnewAm+oAle0Am+oAm+oAmeYAmeoAmukAoOcAmuoAm+oAm+wAmuoAneoAnOkAgP8Am+oAm+oAn+8An+wAmusAnuwAs+YAmegAm+oAm+oAm+oAmuwAm+oAm+kAnesAmuoAmukAm+sAnukAnusAm+oAmuoAnOsAmukAqv9m+G5fAAAAlHRSTlMAAUSj3/v625IuNwVVBg6Z//J1Axhft5ol9ZEIrP7P8eIjZJcKdOU+RoO0HQTjtblK3VUCM/dg/a8rXesm9vSkTAtnaJ/gom5GKGNdINz4U1hRRdc+gPDm+R5L0wnQnUXzVg04uoVSW6HuIZGFHd7WFDxHK7P8eIbFsQRhrhBQtJAKN0prnKLvjBowjn8igenQfkQGdD8A7wAAAXRJREFUSMdjYBgFo2AUDCXAyMTMwsrGzsEJ5nBx41HKw4smwMfPKgAGgkLCIqJi4nj0SkhKoRotLSMAA7Jy8gIKing0KwkIKKsgC6gKIAM1dREN3Jo1gSq0tBF8HV1kvax6+moG+DULGBoZw/gmAqjA1Ay/s4HA3MISyrdC1WtthC9ebGwhquzsHRxBfCdUzc74Y9UFrtDVzd3D0wtVszd+zT6+KKr9UDX749UbEBgULIAbhODVHCoQFo5bb0QkXs1RAvhAtDFezTGx+DTHEchD8Ql4NCcSyoGJYTj1siQRzL/JKeY4NKcSzvxp6RmSWPVmZhHWnI3L1TlEFDu5edj15hcQU2gVqmHTa1pEXJFXXFKKqbmM2ALTuLC8Ak1vZRXRxa1xtS6q3ppaYrXG1NWjai1taCRCG6dJU3NLqy+ak10DGImx07LNFCOk2js6iXVyVzcLai7s6SWlbnIs6rOIbi8ViOifIDNx0uTRynoUjIIRAgALIFStaR5YjgAAAABJRU5ErkJggg==";

//  facebook icon
const FACEBOOK_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAYFBMVEUAAAAAQIAAWpwAX5kAX5gAX5gAX5gAXJwAXpgAWZ8AX5gAXaIAX5gAXpkAVaoAX5gAXJsAX5gAX5gAYJkAYJkAXpoAX5gAX5gAX5kAXpcAX5kAX5gAX5gAX5YAXpoAYJijtTrqAAAAIHRSTlMABFis4vv/JL0o4QvSegbnQPx8UHWwj4OUgo7Px061qCrcMv8AAAB0SURBVEjH7dK3DoAwDEVRqum9BwL//5dIscQEEjFiCPhubziTbVkc98dsx/V8UGnbIIQjXRvFQMZJCnScAR3nxQNcIqrqRqWHW8Qd6cY94oGER8STMVioZsQLLnEXw1mMr5OqFdGGS378wxgzZvwO5jiz2wFnjxABOufdfQAAAABJRU5ErkJggg==";

//  whatsapp icon
const WHATSAPP_ICON = "data:image/png;base64,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";

//  gplus icon
const GOOGLE_PLUS_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAACQ1BMVEUAAAD/RDP/STX9Sjb+STT+SjX+SjX+SjX+STT/SzP/Sjb/SzX/VVX/SDb+SDP+SjX9RzT9STT9SjT+STX+SjT9SjT/SST/TTP+SjX+SjX/RDP/RzP+SjX+SjX/STf9SDX/SjX/TU3+Sjb+SjX/Qyz/Szb+SjX/TTP+SjX9STX+SjP/TTX9Szb+Szb/YCD/SzX/SzX+Sjb+STX/TTX/SzX/Szb/TDT+SjX9SzX/STf+TDX/SjT9SzX9Szb+SjX/SjX/SzX/STT9SjT9TDT+SDT/VQD9STX/STX9SjX+SjX9STX+SzT/UDD9Sjb+SjX9RzT/QED+SjT+SjX/XS7+SjX/Ui7/RC3+SjX/TTz/RzP+SjX/TTP/STf+SjX/STT/RjP+Sjb/SzX/Szz/Rjr/RzL+RzP+SjX/Szf/SjX9Sjb+SjX+Sjb+SjX+SjX+SjX/STf/SjT/SjT9SjX9SzT+RzT+STT/STT+SjX/STP/Tjf+SjX/Szb/SjX/STX9SjX/SjT/AAD/SjH/STb+SzX+Sjb+SjT9SDT+Sjb+SjX9STf9STT/SDX/TDf+STb/TjT/TjH+SjX+SDT/Sjb9SzX9RzX+TDT/TUD/STX+SjX+STX/VTn/QjH/SjX+SjX/Ri7+Szb/TTP+SjX/SDX/STT9SjX+SjX/SDL/TjT9Sjb/RjL+SjX9SzX/QED/TDT+SjX+SjX9STX/RjX/VSv/Rzb/STX/ORz/UDD9SzX+Sjb/STT9SzP+SzX+SjX+SjX9Szb/Ti//ZjPPn7DtAAAAwXRSTlMAD1uiy+j5/8FBZHQDY9zvnYSc5dGhBwr+1S0Zqu44mz4KtNkXY7Yo8YLcfp3bCGZ+sLhWaks2z4wO6VOklrtWRFSXos4DoD+D/ZnoEKasjwS7+gvfHC3kHmjtMlTXYjfZXBEWa+/nQRiK5u7c8vVGRWepp6+5eulQF/dfSHSQdQEfdrzguZzm+4KSQyW1JxrAvCaCiLYUc8nGCR9h6gvzFM41MZHhYDGYTMejCEDi3osdBj1+CSCWyGyp1PC3hUEF/yhErwAAAjFJREFUSMft1tdfE0EQB/ADJD+JKAomHoqKxhJLFCnSpdgIxobYgqhYaJKIHVQUsSFiBSuCvWPv3T/N2ZPD3EucvVcyL3sz2W8+l73ZvShKKEIxcCIsPGJQpAV9MThK1KzAEAaNHjosZviI2DgBR9psVrvCx6Ni1fjRNI5JIDx2nF5m4ejxsCRqVxMmknZMksGTVUzpu5zqJD1NAodNB2boyUzCrlnK7CSKOUCyGJOC4BSan6onaWLN5irpCIwgOAMBt5eZRVk2H+fQx7n92TzK8pT8AopCwCbGgiB4Pk1fsFDPFlG2mL9gRTTdnahnxcASDx/nq6SX6tkyYLnEo1qxknBJ2t9kVSlcq2WaZM1a0qXrtOv18Jbp9Q3l5Rv/39ubHKQ3V2xRtm7bXlkluyGra2qJ76jzwb/TxH721O9K3U1fsMfsgbCXcLFZvI+wL8ok3i/6+ECDOdxYJ/TBQ9Kw+nDTkRyHtodKjjbLyGMtx304cTKi8NRpoVutfJp5xgtv21ntxGw/J7T3PNdeuAhcuqxn9o5W0p1Ma78CpF/9lzdfI3ydiStobrjhIL4BRN7k4WRa3i5D5RbQ3cPDMcDtO4ZKGXCXedtuQL1nqNwHHjDxQ/rNGYbKI/gfM/ETwv6ngafSM3RwH3O7eK86Wzz9L582PO9lN9iLl6KpXr2uf9P7tvHde4e75oNEZ3/85NQ2hKUyzg/1c57klur68vXbd9XtdP34+et36C9WKAZo/AEHHmXeIIIUCQAAAABJRU5ErkJggg==";

//  email icon
const EMAIL_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABC1BMVEUAAAA/Pz8/Pz9AQEA/Pz8/Pz8+Pj4+Pj4/Pz8/Pz8/Pz8/Pz8+Pj4+Pj4/Pz8/Pz8/Pz9AQEA+Pj5AQEA/Pz87Ozs7Ozs/Pz8+Pj47OztAQEA/Pz89PT01NTVBQUFBQUE/Pz8/Pz8+Pj4/Pz9BQUE+Pj4/Pz8/Pz89PT0+Pj4/Pz9BQUFAQEA9PT09PT0/Pz87Ozs9PT05OTk/Pz8+Pj4/Pz9AQEA/Pz8/Pz8/Pz8/Pz+AgIA+Pj4/Pz8/Pz9AQEA/Pz8/Pz8/Pz8/Pz8+Pj4/Pz8/Pz8/Pz9AQEA+Pj4/Pz8+Pj4/Pz85OTk/Pz8/Pz8/Pz8/Pz88PDw9PT0/Pz88PDw8PDw+Pj45OTlktUJVAAAAWXRSTlMA/7N4w+lCWvSx8etGX/XlnmRO7+1KY/fjOGj44DU7UvndMec/VvLbLj7YKyiJdu9O7jZ6Um1w7DnzWQJz+tpE6uY9t8D9QehAOt7PVRt5q6duEVDwSEysSPRjqHMAAAEfSURBVEjH7ZTXUgIxGEa/TwURUFyKYgMURLCvbe2gYAV7ff8nMRksgEDiKl7lXOxM5p8zO3s2CWAwGAx/CjXontzT25Y+pezxtpv2+xTygJ+BYOvh4BBDwx1lKxxhNNZqNjLK+JjVWUYsykj4+2h8gpNTUMkIBuhPNE+SKU7PQC3D62E60ziYzXIuBx0Z+XRTc9F5fgF6MhKNzWXnRejKWGJdc9GZy8AP3kyurH52Ju01XTkjvnldNN+Qi03RecthfFtPlrXz8rmzi739Ax7mUCjy6FhH/vjPonmqVD6pdT718excLX/tsItLeRAqtc7VLIsFlVy/t6+ub27v7t8XD490niy3p+rZpv3i+jy/Or+5SUrdvcNcywaDwfD/vAF2TBl+G6XvQwAAAABJRU5ErkJggg==";

//  pinterest icon
const PINTEREST_ICON = "data:image/png;base64,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"

//  clipboard icon
const CLIPBOARD_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAB5lBMVEUAAAA8PDw+Pj4/Pz8/Pz8/Pz8/Pz8+Pj47OzsAAAA5OTk+Pj4/Pz8/Pz8+Pj49PT0/Pz8/Pz85OTlAQEA/Pz87Ozs+Pj4+Pj4/Pz8/Pz8/Pz8zMzNBQUE/Pz8/Pz8/Pz9AQEA7Ozs9PT0/Pz9AQEA+Pj4/Pz8+Pj4AAABAQEA/Pz87OztBQUE/Pz8+Pj4zMzNDQ0M/Pz89PT03Nzc/Pz8/Pz8/Pz8/Pz88PDw8PDwAAABCQkI7Ozs9PT0/Pz9AQEA/Pz8uLi4rKytAQEA/Pz89PT0+Pj4/Pz8/Pz8/Pz9CQkJAQEA/Pz9CQkI/Pz8/Pz8/Pz8+Pj49PT0/Pz8yMjI/Pz88PDw/Pz9BQUE8PDw/Pz9AQEA/Pz8/Pz8/Pz89PT0/Pz9CQkI9PT1EREQ9PT08PDw4ODg+Pj6AgIA/Pz8/Pz82NjZVVVU7Ozs/Pz81NTVAQEA/Pz8+Pj49PT1BQUE/Pz8/Pz8/Pz8vLy8/Pz87OztAQEA3Nzc9PT0+Pj4/Pz89PT0/Pz8/Pz89PT1AQEA9PT04ODgzMzM/Pz8/Pz9AQEA/Pz9AQEA/Pz83Nzc9PT0/Pz9AQEA/Pz8+Pj4+Pj5AQEA/Pz89PT1FRUU5OTk/Pz8/Pz8+Pj47Ozs/Pz89PT08PDw+Pj6z1Mg0AAAAonRSTlMAEXTG8/7pslICKMn//J0u2LcSLNu9Y0523KoKL9b7hggauZsEOuJ/ARS7VifkiwUX0bEq1f1p6KGQAz4NpnpY8AsGtMIyb46NbSOMcRuh+fGTFc0z1yKFKy/dpKff1CqKMoYPp+lAgAKd6kIDhdorJJExNjflktMr3nkQDoXbvaCe2d2EijIUn3JsbjDDF1jjOOdWvIDhmhoJfWrAK7bYnMgx8fGWAAACNUlEQVRIx+2W6V8SURSGBxEVeydMbVER1DCwRNTCEhMNsywqExXcUrNVU9NK2wy1fd9sMyvrP+1cmYH5eK5f5f3APef85hnuvfPeM6MoaaW1dWXKMGdasrJzrJtgc7dhQ+p2kzRry4OuHfmSbEEhUTt37d5TRGNxiRRrLwUczjKKyiuI3uuSYCv3ARa3ZyOu2k/xAT5b7aXra3xaVlsH1LPZg4cAvzM10wbgMBs+QqtsDKTyJroXGz7a7AgandECtPLXfKzFY8hCbcBxFudpP3Gy49RpQ8UXtgBnOOzZc53CU+e7Ism7uYnt5ji0p1e3pDmqzTnmAEr7GGz/AGEDg0MXaBgeERXrKIWFBQz2IvlYHbtEh/EycOUqVQLXVCDPxvGz+MPYdRGWjE/coGFyyg9M32SwM8PkydlQIim7JX6DxHpvM9g7c+SjoLESmqd9vjvDYO9NEzs1aahYY7SK+3Zm31Ddmp8jDx4qysIj2qt4O6dviH4xqvk5soj40vJjqjzh7HOf6BtPtb1SnulG6X3O6bHdqb5BejHbKtDOl+UcQ78iNuwzFKKvwx1v3npYJ+kd0BYynqz3Eu2OZvnB+IyCRVE+TD5qSmWBRuDjJzb8GWhIJq4xv36kWKoH6mr1vlFDnvRW86e9Qtd/qUrs1VeKv1VKbJjrOz3Wih8UrTpF37ArMlotFmfg58raLxrjvyXfifl/ku/TdZsiK9NfNcH+y93Ed4A1JzvLkmnOMClppbV19R+iQFSQ2tNASwAAAABJRU5ErkJggg==";

//  more icon
const MORE_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAQlBMVEUAAABEREQ9PT0/Pz8/Pz9AQEA7OzszMzM/Pz8/Pz9FRUU/Pz8/Pz9VVVUAAAA/Pz8+Pj4/Pz8/Pz9BQUFAQEA/Pz+e9yGtAAAAFnRSTlMAD5bv9KgaFJ/yGv+zAwGltPH9LyD5QNQoVwAAAF5JREFUSMft0EkKwCAQRFHHqEnUON3/qkmDuHMlZlVv95GCRsYAAAD+xYVU+hhprHPWjDy1koJPx+L63L5XiJQx9PQPpZiOEz3n0qs2ylZ7lkyZ9oyXzl76MAAAgD1eJM8FMZg0rF4AAAAASUVORK5CYII=";

//  close icon
const CLOSE_ICON = " data:image/png;base64,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";

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langId: 1,
      activeMenu: "SignUp",
      visible: false,
      modalVisible: false
    };
  }

  componentWillMount() {
    AsyncStorage.multiGet([
      "langId",
      "siteLink",
      "siteText",
      "copyrighttext",
      "levelTitle"
    ]).then(data => {
      this.setState({
        langId: data[0][1],
        siteLink: data[1][1],
        siteText: data[2][1],
        copyrighttext: data[3][1],
        levelTitle: data[4][1]
      });
    });
  }

  _handlePress(screenName) {
    var tempVar = "";
    this.setState({ activeMenu: screenName, activeMenuImage: tempVar });
    this.props.navigation.navigate(screenName);
  }

  onCancel() {
    this.setState({visible:false});
  }
  onOpen() {
    this.setState({visible:true});
  }

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {

    let shareOptions = {
      title: "Best Route of Mountain",
      message: "Hallo kaka silahkan diunduh aplikasi khusus tentang informasi gunung dari saya :)",
      url: "http://facebook.github.io/react-native/",
      subject: "Share Link"
    };

    StatusBar.setBarStyle("dark-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#F4F4F4", true);
      StatusBar.setTranslucent(true);
    }
    return (
      <Container>
        <View style={styles_drawer.container}>
          {/* <View style={styles_drawer.headerBg}>
            <View style={styles_drawer.headerDivider} />
            <View style={styles_drawer.headerTitleBg}>
              <Text style={styles_drawer.headerTitleTxt}></Text>
              <Image source={Images.bromo_medium} style={{width:80, height:null}} />
              <TouchableOpacity onPress={() => alert("EDIT")}>
                <Text style={styles_drawer.headerTitleTxt}></Text>
              </TouchableOpacity>
            </View>
          </View> */}
          <Content>
            <View style={styles_drawer.recentUserBgFirst}>
                {/* <Button
                    onPress={()=>{
                      this.onCancel();
                      setTimeout(() => {
                        Share.open(shareOptions)
                      },300);
                    }}
                >
                  <Text style={styles_drawer.recentlyTxt}>Share This App</Text>
                </Button> */}
              <TouchableOpacity onPress={this.onOpen.bind(this)}>
                <View style={styles_drawer.instructions}>
                  <Text style={styles_drawer.recentlyTxt}>Share This App</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.toggleModal(true);
              }}
            >
              <View style={styles_drawer.recentUserBg}>
                <Text style={styles_drawer.recentlyTxt}>About</Text>
              </View>
            </TouchableOpacity>
            {/* {this.state.dataRecentUser.map((item, index) => {
              return (
                <View key={index} style={styles_drawer.listRecentBg}>
                  <View style={styles_drawer.menuListItem}>
                    <View style={styles_drawer.nameProfileBg}>
                      <Image
                        style={styles_drawer.profileImg}
                        source={item.profileImg}
                      />
                      <TouchableOpacity onPress={() => alert(item.name)}>
                        <Text style={styles_drawer.nameTxt}>{item.name}</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles_drawer.timeTxt}>{item.time}</Text>
                  </View>
                  <View
                    style={
                      index === this.state.dataRecentUser.length - 1
                        ? null
                        : styles_drawer.listDivider
                    }
                  />
                </View>
              );
            })} */}
            {/* Screen Share */}
            <View style={styles_drawer.heightShare}>

              <ShareSheet visible={this.state.visible} onCancel={this.onCancel.bind(this)}>
                <Button iconSrc={{ uri: TWITTER_ICON }}
                        onPress={()=>{
                    this.onCancel();
                    setTimeout(() => {
                      Share.shareSingle(Object.assign(shareOptions, {
                        "social": "twitter"
                      }));
                    },300);
                  }}>Twitter</Button>
                <Button iconSrc={{ uri: FACEBOOK_ICON }}
                        onPress={()=>{
                    this.onCancel();
                    setTimeout(() => {
                      Share.shareSingle(Object.assign(shareOptions, {
                        "social": "facebook"
                      }));
                    },300);
                  }}>Facebook</Button>
                <Button iconSrc={{ uri: WHATSAPP_ICON }}
                        onPress={()=>{
                    this.onCancel();
                    setTimeout(() => {
                      Share.shareSingle(Object.assign(shareOptions, {
                        "social": "whatsapp"
                      }));
                    },300);
                  }}>Whatsapp</Button>
                <Button iconSrc={{ uri: GOOGLE_PLUS_ICON }}
                        onPress={()=>{
                    this.onCancel();
                    setTimeout(() => {
                      Share.shareSingle(Object.assign(shareOptions, {
                        "social": "googleplus"
                      }));
                    },300);
                  }}>Google +</Button>
                <Button iconSrc={{ uri: EMAIL_ICON }}
                        onPress={()=>{
                    this.onCancel();
                    setTimeout(() => {
                      Share.shareSingle(Object.assign(shareOptions, {
                        "social": "email"
                      }));
                    },300);
                  }}>Email</Button>
                <Button iconSrc={{ uri: PINTEREST_ICON }}
                        onPress={()=>{
                    this.onCancel();
                    setTimeout(() => {
                      Share.shareSingle(Object.assign(shareOptions, {
                        "social": "pinterest"
                      }));
                    },300);
                  }}>Pinterest</Button>
                <Button
                  iconSrc={{ uri: CLIPBOARD_ICON }}
                  onPress={()=>{
                    this.onCancel();
                    setTimeout(() => {
                      if(typeof shareOptions["url"] !== undefined) {
                        Clipboard.setString(shareOptions["url"]);
                        if (Platform.OS === "android") {
                          ToastAndroid.show('Link berhasil di copy', ToastAndroid.SHORT);
                        } else if (Platform.OS === "ios") {
                          AlertIOS.alert('Link berhasil di copy');
                        }
                      }
                    },300);
                  }}>Copy Link</Button>
                <Button iconSrc={{ uri: MORE_ICON }}
                  onPress={()=>{
                    this.onCancel();
                    setTimeout(() => {
                      Share.open(shareOptions)
                    },300);
                  }}>More</Button>

                  <Button iconSrc={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAI78lVcAeieeBl471fA3F4XM36z2GAsrb4GPpW32Tl2DLcvx" }}
                    onPress={()=>{
                    this.onCancel();
                  }}>Close</Button>

              </ShareSheet>
            </View>
            
            {/* Screen Modal */}
            <Modal
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.toggleModal(!this.state.modalVisible);
              }}
            >
              <View style={styles_drawer.modalmain}>
                {/* <Text style={styles_drawer.designationTxt}>Graphic Design</Text> */}
                <View style={styles_drawer.modal}>
                  <Text style={styles_drawer.nameTxt}>BROMO</Text>
                  <View style={styles_drawer.followerFollowingBg}>
                    <Text style={styles_drawer.followerFollowingTxt}>Bromo adalah aplikasi beta version yang membantu para pendaki untuk mengetahui informasi gunung yang ada di indonesia.</Text>
                  </View>
                  <View style={styles_drawer.followerFollowingBg}>
                    {/* <Text style={styles_drawer.followerFollowingCountTxt}>11k</Text> */}
                    <Text style={styles_drawer.followerFollowingTxt}>Karena aplikasi ini masih dalam versi beta maka data yang ada belum terintegrasi dengan benar</Text>
                    <Text style={styles_drawer.followerFollowingTxt}>Tujuan dibuat nya versi beta ini saya ingin memberikan gambaran dari aplikasi yang saya bikin sebelum versi release di publikasikan</Text>
                  </View>
                  <View style={styles_drawer.followerFollowingBg}>
                    <Text style={styles_drawer.followerFollowingCountTxt}>Kritik dan Saran</Text>
                    <Text style={styles_drawer.followerFollowingTxt}>Silahkan hubungi di bawah ini :</Text>
                    <Text style={styles_drawer.followerFollowingTxt}>Email : armannugraha85@gmail.com</Text>
                    <Text style={styles_drawer.followerFollowingTxt}>WA : +62 878 2251 6625</Text>
                  </View>
                </View>

                <TouchableOpacity
                  style={styles_drawer.closeIconBg}
                  onPress={() => this.toggleModal(false)}
                >
                  <FontAwesome name="close" size={15} color="white" />
                </TouchableOpacity>
              </View>
            </Modal>

          </Content>
        </View>
      </Container>
    );
  }
}
