import React from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';

import MapHeader from './src2/components/common/MapHeader';
// Styles
import sheet from './src2/styles/sheet';
import colors from './src2/styles/colors';
// Utils
import {IS_ANDROID} from './src2/utils';
// Examples
import ShowMap from './src2/components/ShowMap';
import SetPitch from './src2/components/SetPitch';
import SetBearing from './src2/components/SetBearing';
import ShowClick from './src2/components/ShowClick';
import FlyTo from './src2/components/FlyTo';
import FitBounds from './src2/components/FitBounds';
import SetUserTrackingModes from './src2/components/SetUserTrackingModes';
import SetUserLocationVerticalAlignment from './src2/components/SetUserLocationVerticalAlignment';
import ShowRegionDidChange from './src2/components/ShowRegionDidChange';
import CustomIcon from './src2/components/CustomIcon';
import YoYo from './src2/components/YoYo';
import EarthQuakes from './src2/components/EarthQuakes';
import GeoJSONSource from './src2/components/GeoJSONSource';
import WatercolorRasterTiles from './src2/components/WatercolorRasterTiles';
import TwoByTwo from './src2/components/TwoByTwo';
import IndoorBuilding from './src2/components/IndoorBuilding';
import QueryAtPoint from './src2/components/QueryAtPoint';
import QueryWithRect from './src2/components/QueryWithRect';
import ShapeSourceIcon from './src2/components/ShapeSourceIcon';
import CustomVectorSource from './src2/components/CustomVectorSource';
import ShowPointAnnotation from './src2/components/ShowPointAnnotation';
import CreateOfflineRegion from './src2/components/CreateOfflineRegion';
import DriveTheLine from './src2/components/DriveTheLine';
import ImageOverlay from './src2/components/ImageOverlay';
import DataDrivenCircleColors from './src2/components/DataDrivenCircleColors';
import ChoroplethLayerByZoomLevel from './src2/components/ChoroplethLayerByZoomLevel';
import PointInMapView from './src2/components/PointInMapView';
import TakeSnapshot from './src2/components/TakeSnapshot';
import TakeSnapshotWithMap from './src2/components/TakeSnapshotWithMap';
import GetZoom from './src2/components/GetZoom';
import GetCenter from './src2/components/GetCenter';
import UserLocationChange from './src2/components/UserLocationChange';

const styles = StyleSheet.create({
  noPermissionsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  exampleList: {
    flex: 1,
  },
  exampleListItemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  exampleListItem: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.secondary.white,
  },
  exampleListLabel: {
    fontSize: 18,
  },
  exampleBackground: {
    flex: 1,
    backgroundColor: colors.primary.pinkFaint,
  },
});

MapboxGL.setAccessToken("pk.eyJ1IjoiYXJtbnVncmFoYSIsImEiOiJjanRkamVldTgwMmxrNDRxZmEwbHM1em94In0.nyNlO5m2AYIhz4JEm5vesQ");

class ExampleItem {
  constructor(label, Component) {
    this.label = label;
    this.Component = Component;
  }
}

const Examples = [
  new ExampleItem('Show Map', ShowMap),
  new ExampleItem('Set Pitch', SetPitch),
  new ExampleItem('Set Bearing', SetBearing),
  new ExampleItem('Show Click', ShowClick),
  new ExampleItem('Fly To', FlyTo),
  new ExampleItem('Fit Bounds', FitBounds),
  new ExampleItem('Set User Tracking Modes', SetUserTrackingModes),
  new ExampleItem(
    'Set User Location Vertical Alignment',
    SetUserLocationVerticalAlignment,
  ),
  new ExampleItem('Show Region Did Change', ShowRegionDidChange),
  new ExampleItem('Custom Icon', CustomIcon),
  new ExampleItem('Yo Yo Camera', YoYo),
  new ExampleItem('Clustering Earthquakes', EarthQuakes),
  new ExampleItem('GeoJSON Source', GeoJSONSource),
  new ExampleItem('Watercolor Raster Tiles', WatercolorRasterTiles),
  new ExampleItem('Two Map Views', TwoByTwo),
  new ExampleItem('Indoor Building Map', IndoorBuilding),
  new ExampleItem('Query Feature Point', QueryAtPoint),
  new ExampleItem('Query Features Bounding Box', QueryWithRect),
  new ExampleItem('Shape Source From Icon', ShapeSourceIcon),
  new ExampleItem('Custom Vector Source', CustomVectorSource),
  new ExampleItem('Show Point Annotation', ShowPointAnnotation),
  new ExampleItem('Create Offline Region', CreateOfflineRegion),
  new ExampleItem('Animation Along a Line', DriveTheLine),
  new ExampleItem('Image Overlay', ImageOverlay),
  new ExampleItem('Data Driven Circle Colors', DataDrivenCircleColors),
  new ExampleItem('Choropleth Layer By Zoom Level', ChoroplethLayerByZoomLevel),
  new ExampleItem('Get Pixel Point in MapView', PointInMapView),
  new ExampleItem('Take Snapshot Without Map', TakeSnapshot),
  new ExampleItem('Take Snapshot With Map', TakeSnapshotWithMap),
  new ExampleItem('Get Current Zoom', GetZoom),
  new ExampleItem('Get Center', GetCenter),
  new ExampleItem('User Location Updates', UserLocationChange),
];

class App6 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetchingAndroidPermission: IS_ANDROID,
      isAndroidPermissionGranted: false,
      activeExample: -1,
    };

    this.renderItem = this.renderItem.bind(this);
    this.onCloseExample = this.onCloseExample.bind(this);
  }

  async componentWillMount() {
    if (IS_ANDROID) {
      const isGranted = await MapboxGL.requestAndroidLocationPermissions();
      this.setState({
        isAndroidPermissionGranted: isGranted,
        isFetchingAndroidPermission: false,
      });
    }
  }

  getActiveItem() {
    if (
      this.state.activeExample < 0 ||
      this.state.activeExample >= Examples.length
    ) {
      return null;
    }
    return Examples[this.state.activeExample];
  }

  onExamplePress(activeExamplePosition) {
    this.setState({activeExample: activeExamplePosition});
  }

  onCloseExample() {
    this.setState({activeExample: -1});
  }

  renderItem({item, index}) {
    return (
      <View style={styles.exampleListItemBorder}>
        <TouchableOpacity onPress={() => this.onExamplePress(index)}>
          <View style={styles.exampleListItem}>
            <Text style={styles.exampleListLabel}>{item.label}</Text>
            <Icon name="keyboard-arrow-right" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  renderActiveExample() {
    const item = this.getActiveItem();

    const modalProps = {
      visible: !!item,
      transparent: true,
      animationType: 'slide',
      onRequestClose: this.onCloseExample,
    };

    return (
      <Modal {...modalProps}>
        <SafeAreaView
          style={[sheet.matchParent, {backgroundColor: colors.primary.pink}]}
          forceInset={{top: 'always'}}
        >
          <View style={styles.exampleBackground}>
            {modalProps.visible ? (
              <item.Component
                key={item.label}
                label={item.label}
                onDismissExample={this.onCloseExample}
              />
            ) : null}
          </View>
        </SafeAreaView>
      </Modal>
    );
  }

  render() {
    if (IS_ANDROID && !this.state.isAndroidPermissionGranted) {
      if (this.state.isFetchingAndroidPermission) {
        return null;
      }
      return (
        <SafeAreaView
          style={[sheet.matchParent, {backgroundColor: colors.primary.blue}]}
          forceInset={{top: 'always'}}
        >
          <View style={sheet.matchParent}>
            <Text style={styles.noPermissionsText}>
              You need to accept location permissions in order to use this
              example applications
            </Text>
          </View>
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView
        style={[sheet.matchParent, {backgroundColor: colors.primary.blue}]}
        forceInset={{top: 'always'}}
      >
        <View style={sheet.matchParent}>
          <MapHeader label="React Native Mapbox GL" />

          <View style={sheet.matchParent}>
            <FlatList
              style={styles.exampleList}
              data={Examples}
              keyExtractor={item => item.label}
              renderItem={this.renderItem}
            />
          </View>

          {this.renderActiveExample()}
        </View>
      </SafeAreaView>
    );
  }
}

export default App6;