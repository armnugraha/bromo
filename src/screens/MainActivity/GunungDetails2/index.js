import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, ScrollView, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, FooterTab, Left, Body, Title, Content, Form, Label} from 'native-base';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
// Screen Styles
import styles from './styles';
import Tablist from './Tablist.js'
import Navigation from '../maps/index'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Images, Colors, Fonts, Metrics } from '../../../resources/Themes';
import Stars from 'react-native-stars';

const ProfileImage = 'https://antiqueruby.aliansoftware.net//Images/profile/ic_profile_fifteen.png';
const headerBG = 'https://antiqueruby.aliansoftware.net//Images/profile/ic_cover_ptwentytwo.png';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const NavigateRoute = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><Navigation/></View>;

export default class GunungDetails extends Component {
  
  InfoRoute = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><Tablist data={this.props.navigation.state.params.data.id}/></View>;

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Home')
      return true;
    });

  }

  constructor(props) {
 		super(props);

 		this.state = {
      isFollow: true,
      index: 0,
      routes: [
        {id:0, key: 'musics', title: 'Info'},
        {id:1, key: 'photos', title: 'Navigasi'},
      ]
    };
 	}

  _renderLabel = ({route}) => {
    return(
      <View>
        <Text style={(route.id == this.state.index)?styles.activeLabel:styles.normalLabel}>{route.title}</Text>
      </View>
    )
  }

  _getLabelText = ({ route }) => route.title;

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar
                            {...props}
                            renderLabel={this._renderLabel}
                            indicatorStyle={{backgroundColor: "transparent"}}
                            style={styles.tabBarView} />;

  _renderScene = SceneMap({
    musics: this.InfoRoute,
    photos: NavigateRoute,
  });

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

    var that = this;
    
    const {state} = this.props.navigation;

    let numberRate = parseFloat(state.params.data.rank)

    return(

     <Container>
       
       <StatusBar barStyle="light-content" backgroundColor="transparent"/>
       
       <ScrollView>
         
         <View>
           <ImageBackground source={{uri : state.params.data.img}} style={styles.headerImageBG}>
             <Header androidStatusBarColor={"#F4F4F4"} style={styles.header}>
                 <Left style={styles.left}>
                   <TouchableOpacity style={styles.backArrow} onPress={()=>that.props.navigation.navigate('Home')}>
                     <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
                   </TouchableOpacity>
                 </Left>
                 <Body style={styles.body}>
                 </Body>
                 <Right style={styles.right}>
                 </Right>
             </Header>
           </ImageBackground>
           <View style={styles.profileContent} >
             <View style={{flexDirection:'row'}}>
               <View style={styles.profileInfo}>
                 <Text style={styles.name}>{state.params.data.name}</Text>
               </View>
             </View>
           </View>

           <View style={styles.aboutProfile}>
             <View style={{flexDirection: "row"}}>
                <Stars
                  half={true}
                  rating={numberRate}
                  spacing={4}
                  starSize={20}
                  count={5}
                  disabled={true}
                  fullStar={Images.starFilled1}
                  emptyStar={Images.starEmpty1}
                  halfStar={Images.starHalf1} />
             </View>
             <View style={{flexDirection: 'row', marginTop:8}}>
               <Entypo name="location-pin" size={18} color='#0691ce'/>
               <Text style={styles.aboutText}>{state.params.data.address}</Text>
             </View>
             <View style={styles.separatorStyle} />
             <View>
               <Text style={styles.status}>{state.params.data.desc}</Text>
             </View>
           </View>

           <View style={styles.profileDetailMain}>
             <View style={styles.followContainer}>
               <View style={styles.followSec}>
                 <Text style={styles.followCount}>Rp. {state.params.data.price}</Text>
                 <Text style={styles.followText}>Tiket Masuk</Text>
               </View>
               <View style={styles.verticalSeparator} />
               <View style={styles.followSec}>
                 <Text style={styles.followCount}>{state.params.data.type}</Text>
                 <Text style={styles.followText}>Tingkat Kesulitan</Text>
               </View>
               <View style={styles.verticalSeparator} />
               <View style={styles.followSec}>
                 <Text style={styles.followCount}>{state.params.data.altitude} Mdpl</Text>
                 <Text style={styles.followText}>Ketinggian</Text>
               </View>
             </View>
           </View>
         </View>

        <View style={[ styles.container, { backgroundColor: 'transparent'} ]}>
          <View style={styles.mapViewCard}>
            <Navigation/>
          </View>
        </View>

        <View style={styles.imageViewList}></View>

        <View style={[ styles.container, { backgroundColor: 'transparent'} ]}>
          <Tablist data={this.props.navigation.state.params.data.id}/>
        </View>

      </ScrollView>
    </Container>

    );
  }
}
