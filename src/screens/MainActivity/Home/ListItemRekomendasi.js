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
  TextInput
} from "react-native";
import { CachedImage } from "react-native-cached-image";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Images, Metrics, Fonts, Colors } from "../../../resources/Themes";
import Stars from 'react-native-stars';
import Api from '../../../libs/Api';

import { withNavigation } from 'react-navigation';

// Screen Styles
import styles from "./styles";

class ListItemRekomendasi extends Component {

  showDetail(data){
    this.props.navigation.navigate("Detail", {data: data})
  }

  render(){

    var {rowData} = this.props;

    let numberRate = parseFloat(rowData.rank)

    return (
      <View style={styles.rowMain}>
        <TouchableOpacity
          style={styles.cardImage}
          onPress={() =>
            // this.onLearnMore(rowData.name, rowData.watch, rowData.distance)
            this.showDetail(rowData)
          }
        >
          <CachedImage style={styles.cardBgImage} source={{uri: rowData.img}} />

          <View style={styles.postDetailBg}>
            <View style={styles.profileDetailBg}>
              <Text style={styles.nameTxt}>{rowData.name}</Text>
              <View style={styles.watchDistanceBg}>
                <View style={styles.mapPin}>
                  <FontAwesome name="map-marker" size={12} color="white" />
                </View>
                <Text style={styles.watchDistanceTxt}>{rowData.address}</Text>
              </View>
              <View style={styles.watchDistanceBg}>
                <Stars
                  half={true}
                  rating={numberRate}
                  update={(val)=>{this.setState({stars: val})}}
                  spacing={4}
                  starSize={20}
                  count={5}
                  disabled={true}
                  fullStar={Images.starFilled1}
                  emptyStar={Images.starEmpty1}
                  halfStar={Images.starHalf1} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

}

export default withNavigation(ListItemRekomendasi);