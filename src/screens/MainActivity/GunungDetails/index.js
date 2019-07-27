import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, ScrollView, BackHandler, I18nManager, Modal} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, FooterTab, Left, Body, Title, Content, Form, Label} from 'native-base';
// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images, Colors, Fonts, Metrics } from '../../../resources/Themes';
import Stars from 'react-native-stars';
import { Actions } from "react-native-router-flux";
import ImageViewer from 'react-native-image-zoom-viewer';

// Maps
import MapboxGL from '@mapbox/react-native-mapbox-gl';

const headerBG = 'https://i.imgur.com/6gs6CWz.png';
const firiendProOne = 'https://antiqueruby.aliansoftware.net//Images/profile/card_propic_18.png';
const firiendProTwo = 'https://antiqueruby.aliansoftware.net//Images/profile/card_propic_18_02.png';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

MapboxGL.setAccessToken("pk.eyJ1IjoiYXJtbnVncmFoYSIsImEiOiJjanRkamVldTgwMmxrNDRxZmEwbHM1em94In0.nyNlO5m2AYIhz4JEm5vesQ");

const coordinates = [
  [107.6305345, -6.8910646],
  [107.61861, -6.90389],
];

export default class ProfileNewsFeedThree extends Component {

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      Actions.pop()
      return true;
    });
  }

  constructor(props) {
 		super(props);

 		this.state = {
      renderHeader: false,
		  renderList: false,
      renderFooter: false,
      modalVisible: false,
      coordinates: coordinates
    };
  }

  componentDidMount() {
		setTimeout(() => {this.setState({renderHeader: true})}, 0);
		setTimeout(() => {this.setState({renderList: true})}, 0);
		setTimeout(() => {this.setState({renderFooter: true})}, 0);
  }

  showImage(index) {
    // Actions.gunung_detail_image();
    this.setState({
			modalVisible: true,
			index: index,
    })
    StatusBar.setHidden(true);
  }

  modalClose(){
    StatusBar.setHidden(false);
    this.setState({ modalVisible: false })
  }

  renderAnnotation (counter) {
    const id = `pointAnnotation${counter}`;
    const coordinate = this.state.coordinates[counter];
    const title = `Longitude: ${this.state.coordinates[counter][0]} Latitude: ${this.state.coordinates[counter][1]}`;

    return (
      <MapboxGL.PointAnnotation
        key={id}
        id={id}
        title='Test'
        coordinate={coordinate}>

        <Image
        source={require('../../../styles/img/map.png')}
        style={{
          flex: 1,
          resizeMode: 'contain',
          width: 25,
          height: 25
          }}/>
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
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
    }
    
    const {renderHeader,renderList,renderFooter} = this.state;

    var that = this;

    var data = [
      {
        id: 1,
        image: 'https://i.imgur.com/6gs6CWz.png',
        notifications: 3,
        color: '#f7a235'
      },
      {
        id: 2,
        image: 'https://i.imgur.com/f4u4lSi.jpg',
        notifications: 11,
        color: '#76cf25'
      },
      {
        id: 3,
        image: 'https://i.imgur.com/Wk274YA.jpg',
        notifications: 52,
        color: '#ed1c24'
      },
    ]

    const images = [];

		for(let i = 0; i < data.length; i++){
			images.push({
				url: data[i].image,
				width: 300,
				height: 300
			})
		}

    var dataFriends = [
      {
        id: 1,
        name: 'Agus',
        profile: firiendProOne,
        notification: 'followed you',
        comment: 'Bagus',
        time: 'Just now',
      },
      {
        id: 2,
        name: 'Ujang',
        profile: firiendProTwo,
        notification: 'commented your post',
        comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
        time: '25 mins ago',
      },
      {
        id: 3,
        name: 'Asep',
        profile: firiendProOne,
        notification: 'liked your post',
        comment: 'Hebat',
        time: '45 mins ago',
      },
    ]

    return(
     <Container style={styles.main}>
       <StatusBar barStyle="light-content" />
       <Content>
        {
          renderHeader &&
          <View>
            <ImageBackground source={{uri:headerBG}} style={styles.headerImageBG}>
              <Header style={styles.header}>
                  <Left style={styles.left}>
                    <TouchableOpacity style={styles.backArrow}  onPress={()=>Actions.pop()}>
                      <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
                    </TouchableOpacity>
                  </Left>
                  <Body style={styles.body}>
                    {/* <Text style={styles.textTitle}>Johnie Cornwall</Text> */}
                  </Body>
                  <Right style={styles.right}>

                  </Right>
              </Header>
            </ImageBackground>
            <View style={styles.profileContent}>
              <Text style={styles.levelNo}><FontAwesome name={"phone"} size={32} color='white'/></Text>
            </View>

            <View style={styles.levelDescView}>
              <Text style={styles.titleText}>Gunung Papandayan</Text>
              <Text style={styles.descText}>Garut, Jawa Barat</Text>
              <View style={styles.starView}>
                <Stars
                    half={true}
                    rating={4.0}
                    spacing={4}
                    starSize={20}
                    count={5}
                    disabled={true}
                    fullStar={Images.starFilled1}
                    emptyStar={Images.starEmpty1}
                    halfStar={Images.starHalf1} />
                <Text style={styles.descText}>
                  238 Reviews
                </Text>
              </View>
              <View style={styles.openView}>
                <Text style={styles.openSeparatorText}>Open In</Text>
                <Text style={styles.openText}>05:00 - 20:00</Text>
              </View>
            </View>
          </View>
        }
        
        {
          renderHeader && renderList &&
          <View>
            
            <View style={styles.listMainView}>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.separatorText}>Photos(25)</Text>
                <Right>
                  <Text style={[styles.separatorText, styles.mgRight]}>Lihat selengkapnya</Text>
                </Right>
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollViewPhotos}>
                {
                  data.map((item,index)=>{

                    return(
                      <View key={index}>
                        <TouchableOpacity key={item} onPress={() => this.showImage(index)}>
                          <View key={index} style={styles.friendListView}>
                            <Image source={{uri:item.image}} style={styles.imgView}/>
                          </View>
                        </TouchableOpacity>
                        
                        <Modal animationType="slide" visible={this.state.modalVisible} onRequestClose={() => this.modalClose()} style={{backgroundColor: 'white'}}>
                            <ImageViewer imageUrls={images} saveToLocalByLongPress={false}/>
                        </Modal>
                      </View>
                    )
                  })
                }
              </ScrollView>
            </View>

            <View style={styles.listMainView}>
              <Text style={styles.separatorText}>Deskripsi</Text>
              <Text style={styles.descText}>Ini Deskripsi</Text>
            </View>

            <View style={styles.listMainView}>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.separatorText}>Jalur Pendakian</Text>
                <Right>
                  <Text style={[styles.separatorText, styles.mgRight]}>Lihat selengkapnya</Text>
                </Right>
              </View>
              <View style={{height: 200}}>
                <MapboxGL.MapView
                ref={(c) => this._map = c}
                style={{flex: 1}}
                zoomLevel={80}
                showUserLocation={true}
                userTrackingMode={1}
                centerCoordinate={this.state.coordinates[0]}>
                  {this.renderAnnotations()}
                </MapboxGL.MapView>
              </View>
            </View>

            <View style={styles.listMainView}>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.separatorText}>Kuota Bulan Ini</Text>
                <Right>
                  <Text style={[styles.separatorText, styles.mgRight]}>Lihat selengkapnya</Text>
                </Right>
              </View>
              <Text style={styles.descText}>Ini Kuota</Text>
            </View>


          </View>
        }

        {	
					renderHeader && renderList && renderFooter &&
            <View>
              <View style={styles.listMainView}>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.separatorText}>Reviews Terbaik</Text>
                  <Right>
                    <Text style={[styles.separatorText, styles.mgRight]}>Lihat selengkapnya</Text>
                  </Right>
                </View>
                
                {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollViewPhotos}> */}
                {
                  dataFriends.map((item, index) => {
                    return (
                      <View style={styles.rowBg} key={index}>
                        <View style={styles.slide}>

                          <Image source={{uri:item.profile}} style={styles.imageStyle}/>

                          <View style={styles.notificationContent}>
                            <View style={styles.titleBar}>
                              <Text style={styles.name}>{item.name}</Text>
                              
                              <View style={styles.notification}>
                                <Stars
                                    half={true}
                                    rating={4.0}
                                    spacing={4}
                                    starSize={12}
                                    count={5}
                                    disabled={true}
                                    fullStar={Images.starFilled1}
                                    emptyStar={Images.starEmpty1}
                                    halfStar={Images.starHalf1} />
                              </View>
                            </View>
                            {
                              (item.comment == '') ? null :
                              <Text style={styles.comments}>{item.comment}</Text>
                            }
                            <View style={styles.bottombar}>
                              <Ionicons name="md-time" size={12} color="#d4d4d4" />
                              <Text style={styles.time}>{item.time}</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.separatoeStyle}></View>
                      </View>
                    )
                  })
                }
                {/* </ScrollView> */}
              </View>
            </View>
        }

       </Content>
      </Container>

    );
  }
}