
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './tabliststyle';
import { View} from 'react-native-animatable';

// Maps
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import sheet from '../../../resources/Themes/maps/sheet';
import mapMarker from '../../../styles/img/map.png';

export const IS_ANDROID = Platform.OS === 'android';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

MapboxGL.setAccessToken("pk.eyJ1IjoiYXJtbnVncmFoYSIsImEiOiJjanRkamVldTgwMmxrNDRxZmEwbHM1em94In0.nyNlO5m2AYIhz4JEm5vesQ");

const coordinates = [
  [107.6305345, -6.8910646],
  [107.61861, -6.90389],
];

const styles_maps = MapboxGL.StyleSheet.create({
    icon: {
      iconImage: '{icon}',
      iconSize: MapboxGL.StyleSheet.source(
        [['example', IS_ANDROID ? 1 : 0.5], ['airport-15', 1.2]],
        'icon',
        MapboxGL.InterpolationMode.Categorical,
      ),
    },
  });
  
  const featureCollection = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
        properties: {
          icon: 'example',
        },
        geometry: {
          type: 'Point',
          coordinates: [107.6305345, -6.8910646],
        },
      },
      {
        type: 'Feature',
        id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
        properties: {
          icon: 'example',
        },
        geometry: {
          type: 'Point',
          coordinates: [107.61861, -6.90389],
        },
      }
    ],
  };

/**
 *  Navigation Screen
 */
export default class Navigation extends Component {

  constructor(props) {
    super(props);

    const rowHasChanged = (r1, r2) => r1 !== r2

 		this.state = {
			  isLoading: true,
        coordinates: coordinates
    };

 	}

  renderAnnotation (counter) {
    const id = `pointAnnotation${counter}`;
    const coordinate = this.state.coordinates[counter];
    const title = `Longitude: ${this.state.coordinates[counter][0]} Latitude: ${this.state.coordinates[counter][1]}`;

    return (
      <MapboxGL.PointAnnotation
        key={id}
        id={id}
        title={title}
        coordinate={coordinate}
        images={{example: mapMarker, assets: ['pin']}}
      >

        <MapboxGL.Callout title={title}/>
      </MapboxGL.PointAnnotation>
    );
  }

  renderAnnotations () {
    const items = [];

    for (let i = 0; i < this.state.coordinates.length; i++) {
      items.push(this.renderAnnotation(i));
    }

    return items;
  }

  render(){

    return(
      <Container style={styles.main}>
          <Content>
            <View style={{height:250}}>

                <MapboxGL.MapView
                  zoomLevel={10}
                  centerCoordinate={[107.6305345, -6.8910646]}
                  showUserLocation={true}
                  style={sheet.matchParent}
                  onPress={this.onPress}
                  userTrackingMode={1}
                >
                  <MapboxGL.ShapeSource
                    id="exampleShapeSource"
                    title='Test'
                    shape={featureCollection}
                    images={{example: mapMarker, assets: ['pin']}}
                    onPress={(feature) => alert(feature)}
                  >
                    <MapboxGL.SymbolLayer id="exampleIconName" style={styles_maps.icon} />
                    <MapboxGL.Callout title="{title}"/>
                  </MapboxGL.ShapeSource>
                    
                </MapboxGL.MapView>
                {/* <MapboxGL.MapView
                ref={(c) => this._map = c}
                style={{flex: 1}}
                zoomLevel={11}
                showUserLocation={true}
                userTrackingMode={1}
                centerCoordinate={this.state.coordinates[0]}>
                  {this.renderAnnotations()}
                </MapboxGL.MapView> */}
            </View>

            {/* <View style={{flex:1}}>
                <TouchableOpacity
        style={{padding: 10,backgroundColor: '#557f90',marginRight: 10}}
        onPress={() => {
          this._map.flyTo([107.6305345, -6.8910646], 2500);
        }}>
          <Text style={styles.buttonText}>NYC</Text>
        </TouchableOpacity>
            </View> */}
        </Content>
      </Container>
    );
  }
}