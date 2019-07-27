import React, { Component } from "react";
import {
  View,
  Image,
  StatusBar,
  Platform,
  TouchableOpacity,
  ListView,
  BackHandler,
  Alert,
  FlatList,
  Modal,
  ToastAndroid,
  RefreshControl
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
  List,
  Text,
  Item,
  Input,
  Segment
} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import { Images, Metrics, Fonts, Colors } from "../../../resources/Themes";
import Api from '../../../libs/Api';
import { CachedImage } from "react-native-cached-image";

import ListItemRekomendasi from './ListItemRekomendasi';

import Drawer from 'react-native-drawer';
import MyControlPanel from './ControlPanel';
import tweens from './tweens';

import {
  DotIndicator
} from 'react-native-indicators';

// Screen Styles
import styles from "./styles";
import styles_drawer from "./styles_drawer";

const cardBg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFnHJsE8uzmYtD2klBoevGCeZ9CnTN9GnzZt_4OCXLMUr5twmJAzVqgK5";
const cardBgOne = "https://i.imgur.com/6gs6CWz.png";
const cardBgTwo = "https://i.imgur.com/f4u4lSi.jpg";
const cardBgThree = "https://i.imgur.com/Wk274YA.jpg";
const cardBgFour = "https://imgur.com/0fN2HJ7.png";
const cardBgFive = "https://i.imgur.com/sAcpCvo.png";
const profileImgOne = "https://i.imgur.com/7SHivJ1.png";
const profileImgTwo = "https://i.imgur.com/imGXHfy.png";

const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props);

    const dataObjects = [
      {
        id: 1,
        name: "Gunung Gede",
        cardBg: { uri: cardBgOne },
        profileImage: { uri: profileImgOne },
        watch: "58",
        distance: "120m",
        place:"Cianjur, Jawa Barat-2958 mdpl"
      },
      {
        id: 2,
        name: "Gunung Gede",
        cardBg: { uri: cardBgTwo },
        profileImage: { uri: profileImgTwo },
        watch: "80",
        distance: "90km",
        place:"Cianjur, Jawa Barat-2958 mdpl"
      },
      {
        id: 3,
        name: "Gunung Gede",
        cardBg: { uri: cardBgThree },
        profileImage: { uri: profileImgOne },
        watch: "90",
        distance: "200m",
        place:"Cianjur, Jawa Barat-2958 mdpl"
      },
      {
        id: 4,
        name: "Gunung Gede",
        cardBg: { uri: cardBgOne },
        profileImage: { uri: profileImgTwo },
        watch: "10",
        distance: "5km",
        place:"Cianjur, Jawa Barat-2958 mdpl"
      },
      {
        id: 5,
        name: "Gunung Gede",
        cardBg: { uri: cardBgTwo },
        profileImage: { uri: profileImgOne },
        watch: "50",
        distance: "2km",
        place:"Cianjur, Jawa Barat-2958 mdpl"
      }
    ];
    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      isLoading: false,
      isLoadingAll: false,
      dataSource: ds.cloneWithRows(dataObjects),
      selectedLots: [],
      drawerType: 'overlay',
      openDrawerOffset:200,
      closedDrawerOffset:0,
      panOpenMask: .1,
      relativeDrag: false,
      panThreshold: .25,
      tweenHandlerOn: false,
      tweenDuration: 190,
      tweenEasing: 'linear',
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: true,
      negotiatePan: false,
      side: "right",
      dataListRekomendasi: [],
      dataListGunung: [],
      visible: false,
      modalVisible: false,
      segment: 1,
      typeFilter:"easy",
      priceFilter:"",
      locFilter:"",
      refreshing: false,
    };
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);

    this.setState({isLoading: true})
    this.setState({isLoadingAll: true})
    this.fetchRekomendasi()
    this.fetchAll()
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    // return BackHandler.exitApp();
    Alert.alert(
      'Exit App',
      'Exiting the application?', [{
          text: 'Cancel',
          style: 'cancel'
      }, {
          text: 'OK',
          onPress:()=> BackHandler.exitApp(),
      }, ], {
          cancelable: false
      }
    )
    return true;
  };

  async fetchAll(){
    Api.get('public/data/').then(resp =>{
      this.setState({dataListGunung: resp.data})
      this.setState({isLoadingAll: false})
    });
  }

  async fetchRekomendasi(){
    Api.get('public/rekomendasi/').then(resp =>{
      this.setState({dataListRekomendasi: resp.data})
      this.setState({isLoading: false})
    });
  }

  fetchFilter(location,type,price){

    this.toggleModal(false);

    this.setState({isLoadingAll: true})
    
    let params = "?type=" + type + "&price=" + price + "&address=" + location;


    Api.get('/filter' + params).then(resp =>{
      this.setState({dataListGunung: resp.data})
      this.setState({isLoadingAll: false})
    })
    .catch(error => {
      ToastAndroid.show("Request Time Out")
      this.setState({isLoadingAll: false})
    });

  }

  showDetail(data){
    this.props.navigation.navigate("Detail", {data: data});
  }

  _renderRow(rowData) {
    return (      
      <ListItemRekomendasi
        rowData={rowData}
      />
    );
  }

  _renderList(rowData) {

    return (
      <TouchableOpacity
        style={styles.listMainview}
        onPress={() =>
          this.showDetail(rowData)
        }
      >
        <CachedImage
          source={rowData.img}
          style={styles.destinationimg}
        >
          <TouchableOpacity />
        </CachedImage>
        <Text style={styles.destinationnamelist}>
          {rowData.name}
        </Text>
        {/* <Text style={styles.mexicotext}>
          {rowData.destinationname}
        </Text> */}
        <View style={styles.placeDistanceBg}>
          <View style={styles.mapPin}>
            <FontAwesome name="map-marker" size={12} color="#b7b7b7" />
          </View>
          <Text style={styles.placeDistanceTxt}>{rowData.address}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  // Drawer
  setDrawerType(type){
    this.setState({
      drawerType: type
    })
  }

  tweenHandler(ratio){
    if(!this.state.tweenHandlerPreset){ return {} }
    return tweens[this.state.tweenHandlerPreset](ratio)
  }

  noopChange(){
    this.setState({
      changeVal: Math.random()
    })
  }

  openDrawer(){
    this.drawer.open()
  }

  setStateFrag(frag) {
    this.setState(frag);
  }

  dataListAll(data){

    return (
      <TouchableOpacity
        style={styles.listMainviewFL}
        onPress={() =>
          this.showDetail(data)
        }
      >
        <View style={{backgroundColor:"#FFF", borderRadius: 8}}>
        <CachedImage
          source={{uri: data.img}}
          style={styles.destinationimgFL}
        >
          <TouchableOpacity />
        </CachedImage>
          <Text numberOfLines={1} style={styles.destinationnamelistFL}>
            {data.name}
          </Text>
          <View style={styles.placeDistanceBgFL}>
            <View style={styles.mapPin}>
              <FontAwesome name="map-marker" size={12} color="#b7b7b7" />
            </View>
            <Text numberOfLines={1} style={styles.placeDistanceTxtFL}>{data.address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  _renderListRekomendasi(rowData) {
    return (      
      <ListItemRekomendasi
        rowData={rowData}
      />
    );
  }

  _renderLoading(){
    if(this.state.isLoading){
      return(
        <DotIndicator color="#0006" />
      )
    }

    return null;

  }

  _renderLoadingAll(){
    if(this.state.isLoadingAll){
      return(
        <DotIndicator color="#0006" />
      )
    }

    return null;

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

  _renderFilter(){
    if(!this.state.isLoadingAll){
      return(
        <TouchableOpacity
          style={{
              borderWidth:1,
              borderColor:'#00A852',
              alignItems:'center',
              justifyContent:'center',
              alignSelf: 'center',
              width:120,
              position: 'absolute',
              bottom: 48,
              // right: 10,
              height:40,
              backgroundColor:'#51B252',
              borderRadius:50,
              shadowColor: "#F8F8F8",
              shadowOpacity: 0.8,
              shadowRadius: 1,
              shadowOffset: {
                height: 1,
                width: 1
              }
            }}
            onPress={() => this.toggleModal(true)}
        >
          <View style={{flexDirection:"row"}}>
            <FontAwesome name="filter" size={18} color="#FFF" />
            <Text style={styles.discoverTxt}> Filter</Text>
          </View>
        </TouchableOpacity>
      )
    }

    return null;
  }

  _onRefresh = () => {
    
    this.setState({dataListGunung: []})
    this.setState({dataListRekomendasi: []})

    this.setState({refreshing: true});
  
    this.setState({isLoading: true})
    this.setState({isLoadingAll: true})
    this.fetchRekomendasi()
    this.fetchAll()
  
    this.setState({refreshing: false});
    
  }

  _renderDataNull(){
    let totalData = this.state.dataListGunung.length

    if(totalData == 0 && !this.state.isLoadingAll){
      return(
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Data Tidak Ditemukan</Text>
        </View>
      )
    }

    return null;

  }

  render() {
    StatusBar.setBarStyle("dark-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#F4F4F4", true);
      StatusBar.setTranslucent(true);
    }

    var controlPanel = <MyControlPanel closeDrawer={() => {
      this.drawer.close();
    }} />

    return (
      <Container style={styles.main}>

        <Drawer
          ref={c => this.drawer = c}
          type={this.state.drawerType}
          animation={this.state.animation}
          openDrawerOffset={this.state.openDrawerOffset}
          closedDrawerOffset={this.state.closedDrawerOffset}
          panOpenMask={this.state.panOpenMask}
          panCloseMask={this.state.panCloseMask}
          relativeDrag={this.state.relativeDrag}
          panThreshold={this.state.panThreshold}
          content={controlPanel}
          styles={drawerStyles}
          disabled={this.state.disabled}
          tweenHandler={this.tweenHandler.bind(this)}
          tweenDuration={this.state.tweenDuration}
          tweenEasing={this.state.tweenEasing}
          acceptDoubleTap={this.state.acceptDoubleTap}
          acceptTap={this.state.acceptTap}
          acceptPan={this.state.acceptPan}
          tapToClose={this.state.tapToClose}
          negotiatePan={this.state.negotiatePan}
          changeVal={this.state.changeVal}
          side={this.state.side}
        >

          <Header style={styles.header}>
            <Left style={styles.left}>
              <Image
                source={Images.bromo_medium}
              />
            </Left>
            <Body style={styles.body}>
              
            </Body>
            <Right style={styles.right}>
              <View style={[styles.iconCenter, { flexDirection: "row" }]}>
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  onPress={() => this.openDrawer()}
                >
                  <FontAwesome
                    name="bars"
                    size={Fonts.moderateScale(18)}
                    style={styles.heartIcon}
                  />

                </TouchableOpacity>
              </View>
            </Right>
          </Header>

          <StatusBar barStyle="dark-content" backgroundColor="#F4F4F4"/>

          <Content refreshControl={
            <RefreshControl
              tintColor="#3498db"
              colors={['#3498db', 'red', '#3498db']}
              style={{backgroundColor: 'transparent'}}
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>

            <View style={styles.titleView}>
              <Text style={styles.titleText}>Rekomendasi Gunung</Text>
            </View>

            {this._renderLoading()}

            <FlatList
              horizontal
              data={this.state.dataListRekomendasi}
              renderItem = {({item, index}) => (
                  this._renderListRekomendasi({...item})
                )
              }

              keyExtractor = {(item, index) => index.toString()}
            />

            <View style={styles.heightSeparatorBg}></View>

            {/* <View style={styles.titleView}>
              <Text style={styles.titleText}>Rekomendasi Gunung Terdekat</Text>
            </View>

            <ListView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              enableEmptySections
              scrollEnabled={true}
            /> */}

            {/* <View style={styles.heightSeparatorBg}></View> */}

            <View style={styles.titleView}>
              <Text style={styles.titleText}>List Gunung</Text>
            </View>

            {this._renderLoadingAll()}

            {this._renderDataNull()}

            <FlatList
              data={this.state.dataListGunung}
              numColumns={2}
              style={styles.listContentFL}
              renderItem = {({item, index}) => (
                  this.dataListAll({...item})
                )
              }

              keyExtractor = {(item, index) => index.toString()}
            />

          </Content>

          {/* <View>
            <Fab
              containerStyle={{ }}
              style={{ backgroundColor: '#5067FF',bottom: this.state.status }}
              position="bottomRight"
              onPress={() => alert("asd")}>
              <FontAwesome name="fas fa-filter" size={12} color="#b7b7b7" />
            </Fab>
          </View> */}


          {this._renderFilter()}

          </Drawer>

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
                <Text style={styles_drawer.nameTxtModal}>FILTER</Text>
                <View style={styles_drawer.followerFollowingBg}>

                  <View style={styles_drawer.followerFollowingBg}>

                    {/* Place */}
                    <List style={styles.listMain}>
                      <ListItem style={styles.listGenderMain}>
                        <View>
                          <Text style={styles.listTitle}>Wilayah</Text>
                        </View>
                        <Item rounded  style={{height: 32, width: 152, marginLeft:8}}>
                          <Input placeholder='Ex. Bandung'
                            value={this.state.locFilter}
                            onChangeText={(text) => {this.setState({locFilter:text})}}
                          />
                        </Item>
                      </ListItem>
                    </List>

                    {/* Type Filter */}
                    <List style={styles.listMain}>
                      <ListItem style={styles.listGenderMain}>
                        <View>
                          <Text style={styles.listTitle}>Tipe</Text>
                        </View>
                        <LinearGradient
                          locations={[0.1, 0.75]}
                          colors={["#5AFF15", "#00B712"]}
                          style={[styles.styleGradient, {marginLeft:18}]}
                        >
                          <Segment style={styles.segmentTabSec}>
                            <TouchableOpacity
                              style={[
                                styles.leftBtnRadius,
                                this.state.typeFilter === "easy"
                                  ? styles.selectedSegmentTab
                                  : styles.segmentTab
                              ]}
                              active={this.state.typeFilter === "easy" ? true : false}
                              onPress={() => this.setState({ typeFilter: "easy" })}
                            >
                              <Text
                                style={
                                  this.state.typeFilter === "easy"
                                    ? styles.activeTab
                                    : styles.normalTab
                                }
                              >
                                Mudah
                              </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                              style={
                                this.state.typeFilter === "medium"
                                  ? styles.selectedSegmentTab
                                  : styles.segmentTab
                              }
                              active={this.state.typeFilter === "medium" ? true : false}
                              onPress={() => this.setState({ typeFilter: "medium" })}
                            >
                              <Text
                                style={
                                  this.state.typeFilter === "medium"
                                    ? styles.activeTab
                                    : styles.normalTab
                                }
                              >
                                Sedang
                              </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                              style={[
                                styles.rightBtnRadius,
                                this.state.typeFilter === "hard"
                                  ? styles.selectedSegmentTab
                                  : styles.segmentTab
                              ]}
                              active={this.state.typeFilter === "hard" ? true : false}
                              onPress={() => this.setState({ typeFilter: "hard" })}
                            >
                              <Text
                                style={
                                  this.state.typeFilter === "hard"
                                    ? styles.activeTab
                                    : styles.normalTab
                                }
                              >
                                Sulit
                              </Text>
                            </TouchableOpacity>
                          </Segment>

                        </LinearGradient>
                      </ListItem>
                    </List>
                    
                    {/* Price Filter */}
                    <List style={styles.listMain}>
                      <ListItem style={styles.listGenderMain}>
                        <View>
                          <Text style={styles.listTitle}>Harga</Text>
                        </View>
                        <LinearGradient
                          locations={[0.1, 0.75]}
                          colors={["#5AFF15", "#00B712"]}
                          style={[styles.styleGradient, {marginLeft:4}]}
                        >
                          <Segment style={styles.segmentTabSec}>
                            <TouchableOpacity
                              style={[
                                styles.leftBtnRadius,
                                this.state.priceFilter === ""
                                  ? styles.selectedSegmentTab
                                  : styles.segmentTab
                              ]}
                              active={this.state.priceFilter === "" ? true : false}
                              onPress={() => this.setState({ priceFilter: "" })}
                            >
                              <Text
                                style={
                                  this.state.priceFilter === ""
                                    ? styles.activeTab
                                    : styles.normalTab
                                }
                              >
                                All
                              </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                              style={
                                this.state.priceFilter === "ASC"
                                  ? styles.selectedSegmentTab
                                  : styles.segmentTab
                              }
                              active={this.state.priceFilter === "ASC" ? true : false}
                              onPress={() => this.setState({ priceFilter: "ASC" })}
                            >
                              <Text
                                style={
                                  this.state.priceFilter === "ASC"
                                    ? styles.activeTab
                                    : styles.normalTab
                                }
                              >
                                Terendah
                              </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                              style={[
                                styles.rightBtnRadius,
                                this.state.priceFilter === "DESC"
                                  ? styles.selectedSegmentTab
                                  : styles.segmentTab
                              ]}
                              active={this.state.priceFilter === "DESC" ? true : false}
                              onPress={() => this.setState({ priceFilter: "DESC" })}
                            >
                              <Text
                                style={
                                  this.state.priceFilter === "DESC"
                                    ? styles.activeTab
                                    : styles.normalTab
                                }
                              >
                                Tertinggi
                              </Text>
                            </TouchableOpacity>
                          </Segment>

                        </LinearGradient>
                      </ListItem>
                    </List>

                  </View>
                </View>
                
                <View style={styles_drawer.followerFollowingBg}>
                    <View style={styles.btnsec}>
                  <TouchableOpacity onPress={() => this.fetchFilter(this.state.locFilter, this.state.typeFilter, this.state.priceFilter)} >
                      <View style={styles.discoverBg}>
                        <Text style={styles.discoverTxt}>Terapkan</Text>
                      </View>
                  </TouchableOpacity>
                    </View>
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

      </Container>
    );
  }
}
