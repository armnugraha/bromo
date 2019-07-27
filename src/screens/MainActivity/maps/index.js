import React from 'react';
import {Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button} from 'react-native';

import { Images } from "../../../resources/Themes";

import MapboxGL from '@mapbox/react-native-mapbox-gl';

import mapMarker from '../../../../src2/styles/img/map.png';
import Bubble from './common/Bubble';
import { Left } from 'native-base';

import { Actions } from 'react-native-router-flux';

export const IS_ANDROID = Platform.OS === 'android';

import env from '../../../../env';

MapboxGL.setAccessToken(env);

const coordinates = [
  [107.6305345, -6.8910646],
  [107.61861, -6.90389],
];

const styles_maps = MapboxGL.StyleSheet.create({
    icon: {
      iconImage: '{icon}',
      iconSize: MapboxGL.StyleSheet.source(
        [
          ['example', IS_ANDROID ? 1 : 0.5], ['ic_n_gate', 1.5], ['ic_n_pos', 1.5], ['ic_n_puncak', 1.5], ['ic_n_puncak_bayangan', 1.5], ['ic_n_sumber_air', 1.5]
        ],
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
          icon: "ic_n_gate",
          notes:"Pintu Masuk",
        },
        geometry: {
          type: 'Point',
          coordinates: [107.745091, -6.893077],
        },
      },
      {
        type: 'Feature',
        id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
        properties: {
          icon: "ic_n_sumber_air",
          notes:"Sumber Air",
        },
        geometry: {
          type: 'Point',
          coordinates: [107.749103, -6.892071],
        },
      },

      {
        type: 'Feature',
        id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
        properties: {
          icon: "ic_n_sumber_air",
          notes:"Sumber Air & Mushola",
        },
        geometry: {
          type: 'Point',
          coordinates: [107.748759, -6.892859],
        },
      },
      {
        type: 'Feature',
        id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
        properties: {
          icon: "ic_n_pos",
          notes:"Pos 1",
        },
        geometry: {
          type: 'Point',
          coordinates: [107.744297, -6.884726],
        },
      },
      {
        type: 'Feature',
        id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
        properties: {
          icon: "ic_n_pos",
          notes:"Pos 2",
        },
        geometry: {
          type: 'Point',
          coordinates: [107.742837, -6.880423],
        },
      },
      {
        type: 'Feature',
        id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
        properties: {
          icon: "ic_n_pos",
          notes:"Pos 3",
        },
        geometry: {
          type: 'Point',
          coordinates: [107.743569, -6.878727],
        },
      },
      {
        type: 'Feature',
        id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
        properties: {
          icon: "ic_n_puncak_bayangan",
          notes:"Puncak Bayangan",
        },
        geometry: {
          type: 'Point',
          coordinates: [107.743934, -6.877944],
        },
      }

    ],
  };

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    const rowHasChanged = (r1, r2) => r1 !== r2

    this.state = {
      route:
        {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "properties": {},
              "geometry": {
                "type": "LineString",
                "coordinates": [
                  [
                    107.745091, -6.893077
                  ],
                  [
                    107.745667, -6.890376
                  ],
                  [
                    107.749103, -6.892071
                  ],
                  [
                    107.748759, -6.892859
                  ],
                  [
                    107.744036, -6.889353
                  ],
                  [
                    107.742451, -6.889072
                  ],
                  [
                    107.744297, -6.884726
                  ],
                  [
                    107.742107, -6.882979
                  ],
                  [
                    107.742837, -6.880423
                  ],
                  [
                    107.743569, -6.878727
                  ],
                  [
                    107.743934, -6.877944
                  ]
                ]
              }
            }
          ]
      },
      isLoading: true,
      coordinates: coordinates,
      statusBubble:false,
      cla:""
    }

    this.onPress = this.onPress.bind(this);
    this.coba = this.coba.bind(this);
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

  async coba(e){
    const tes = e.nativeEvent.payload
    // alert(JSON.stringify(tes.properties.notes))

    this.setState({cla: tes.properties.notes})
    this.setState({statusBubble:true})
  }

  showBubble(){
    if(this.state.statusBubble){
      return(
        <Bubble>
          <Left>
            <Text>{this.state.cla}</Text>
          </Left>
        </Bubble>
      )
    }else{
      return null;
    }
  }

  async onPress() {
    this.setState({statusBubble:false})
  }

  render() {

    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          styleURL={MapboxGL.StyleURL.Outdoors}
          zoomLevel={8}
          showUserLocation={true}
          centerCoordinate={[107.742332, -6.877344]}
          onPress={this.onPress}
          style={styles.container}> 

          <MapboxGL.ShapeSource id='line1' shape={this.state.route}>
            <MapboxGL.LineLayer id='linelayer1' style={{lineColor:'red', lineWidth:4}} />
          </MapboxGL.ShapeSource>

          <MapboxGL.ShapeSource
            id="exampleShapeSource"
            title='Test'
            shape={featureCollection}
            images={{example: mapMarker, ic_n_gate: Images.ic_n_gate, ic_n_pos: Images.ic_n_pos, ic_n_puncak: Images.ic_n_puncak, ic_n_puncak_bayangan: Images.ic_n_puncak_bayangan, ic_n_sumber_air: Images.ic_n_sumber_air, assets: ['pin']}}
            onPress={this.coba}
          >
            <MapboxGL.SymbolLayer id="exampleIconName" style={styles_maps.icon} />
            <MapboxGL.Callout title="{title}"/>
          </MapboxGL.ShapeSource>


          {/* {this.renderAnnotations()} */}

        </MapboxGL.MapView>

        {this.showBubble()}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Navigation;
