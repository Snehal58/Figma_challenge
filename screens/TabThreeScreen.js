import React from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';

const TabThreeScreen = () => {
  const styles = {
    flexA: {
      flex: 1,
      backgroundColor: '#FFF', // You can customize the background color or add other styles
    },
    base: {
      flexGrow: 1,
    },
    userProfile: {
      flex: 1,
    },
    userProfileTop: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 30,
      minHeight: 380,
    },
    userProfileTopBg: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: null,
      height: null,
    },
    userProfileTopOverlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: null,
      height: null,
      opacity: 0.2,
    },
    avatar: {
      flexShrink: 0,
      width: 128,
      height: 128,
    },
    icons:{
      flexDirection :"row",
      justifyContent: "space-between",
      alignItems: "center",
  
    },
    icons1:{
      flexDirection :"row",
      alignItems: "center",
      marginLeft: 150
  
    },
    back:{
      width: '29.801px',
      height: '30.1px',
      flexShrink: 0,
      paddingLeft: 40
  
    },
    setting:{
      width: '24px',
      height: '24px',
      flexShrink: 0,
      paddingRight: 40

    },
    avatarContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: '#ffffff',
      borderRadius: 64,
      backgroundColor: '#a8bac1',
      overflow: 'hidden',
    },
    avatarImg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },

    avatarImg1: {
      position: 'absolute',
      top: 7,
      left: 5,
      width: '22%',
      height: '80%',
    },
    avatarStatus: {
      position: 'absolute',
      right: 10.1,
      bottom: 10.1,
      width: 20,
      height: 20,
      borderWidth: 3,

      borderStyle: 'solid',
      borderColor: '#ffffff',
      borderRadius: 10,
    },
    userProfileInfo: {
      paddingHorizontal: 24,
    },
    userProfileInfoName: {
      marginTop: 16,
      color: '#000',
      fontSize: 22,
      textAlign: 'center',
    },
    userProfileInfoJobTitle: {
      marginTop: 4,
      color: '#000',
      fontSize: 16,
      textAlign: 'center',
      opacity: 0.7,
    },
    userProfileWidget: {
      alignSelf: 'stretch',
      margin: 24,
      marginTop: 24,
      marginBottom: 24,
    },
    widget: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      borderRadius: 8,
      paddingVertical: 8,
      minHeight: 60,
    },
    widgetItem: {
      flex: 1,
      justifyContent: 'center',
      minWidth: 0,
      paddingVertical: 4,
      borderRightWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    widgetItemLast: {
      borderRightWidth: 0,
    },
    widgetItemLabel: {
      color: 'black',
      fontSize: 14,
      textAlign: 'center',
      opacity: 0.5,
    },
    widgetItemValue: {
      marginTop: 4,
      color: 'black',
      fontSize: 16,
      textAlign: 'center',
    },
    userProfileBody: {
      flexGrow: 1,
      paddingTop: 24,
      paddingBottom: 100,
    },
    flexB: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      paddingHorizontal: 24,
    },
    btnA: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 46,
      minWidth: 130,
      maxWidth: '100%',
      paddingHorizontal: 24,
      borderRadius: 8,
      borderWidth: 1,
      borderStyle: 'solid',
      overflow: 'hidden',
      borderColor: 'white'

    },
    btnTextA: {
      fontSize: 20,
    },
    btnB: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 46,
      minWidth: 130,
      maxWidth: '100%',
      paddingHorizontal: 24,
      borderWidth: 1,
      borderStyle: 'solid',
      overflow: 'hidden',
      borderColor: 'white'
    },
    btnTextB: {
      fontSize: 20,
      color: 'purple'
    },
    typography: {
      fontSize: 16,
    },
    section: {},
    sectionHeading: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 30,
      paddingHorizontal: 24,
    },
    sectionHeadingMain: {
      flexShrink: 1,
    },
    sectionHeadingText: {
      fontSize: 26,
      color: '#1c1c1c',
    },
    sectionContent: {
      paddingHorizontal: 24,
      paddingVertical: 8,
    },
    hStack: {
      overflow: 'hidden',
    },
    hStackContent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: -4,
      marginHorizontal: -4,
    },
    hStackItemWrap: {
      paddingVertical: 4,
      paddingHorizontal: 4,
      minWidth: 0,
      flexShrink: 0,
    },
    tag: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 28,
      maxWidth: 140,
      paddingLeft: 8,
      paddingRight: 8,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#a8bac1',
      borderRadius: 14,
      overflow: 'hidden',
    },
    tagText: {
      fontSize: 16,
      color: '#1c1c1c',
      flexShrink: 1,
    },
    grid: {
      overflow: 'hidden',
      flexShrink: 0,
    },
    gridContent: {
      flexShrink: 0,
      flexWrap: 'nowrap',
      marginVertical: -8,
    },
    gridItem: {
      paddingVertical: 8,
      minWidth: 0,
      minHeight: 0,
      flexShrink: 0,
    },
    card: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      margin: 16,
      backgroundColor: '#fff',
      elevation: 3,
    },
    card1: {
      borderWidth: 1,
      height:100,
      borderColor: '#ccc',
      borderRadius: 8,
      margin: 8,
      backgroundColor: '#fff',
      elevation: 3,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      padding: 15,
    },
    headerText: {
      fontSize: 16,
      color: 'purple'
    },
    disabled: {
      color: '#999',
    },
    body: {
      padding: 16,
    },
    title: {
      fontSize: 17,
      fontWeight: 'bold',
      marginBottom: 8,
      marginLeft:100,
    },
    text: {
      fontSize: 14,
      marginBottom: 16,
      marginLeft:100
    },
    button: {
      backgroundColor: '#007bff',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  
  };


  return (
    <View style={styles.flexA}>
      <ScrollView contentContainerStyle={styles.base}>
      <View style={styles.icons}>
      <TouchableOpacity style= {styles.back}>
        <Image source={require('figma-challenge/assets/images/i1.png')}/>
      </TouchableOpacity>
      <Text>Profile</Text>
      <TouchableOpacity style= {styles.setting}>
        <Image source={require('figma-challenge/assets/images/comment-alt.png')}/>
      </TouchableOpacity>
    </View>
        <View style={styles.userProfile}>
          <View style={styles.userProfileTop}>
            <View style={styles.userProfileTopOverlay} />
            <View style={styles.avatar}>
              <View style={styles.avatarContainer}>
                <Image
                  style={styles.avatarImg}
                  source={require('figma-challenge/assets/images/profile.png')}
                />
              </View>
              <View style={styles.avatarStatus}>
              <Image source={require('figma-challenge/assets/images/edit.png')}/>
              </View>
            </View>
            <View style={styles.userProfileInfo}>
              <Text style={styles.userProfileInfoName}>Jina Simons</Text>
              <Text style={styles.userProfileInfoJobTitle}>6000 Pts</Text>
              <Text style={styles.typography}>I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!</Text>
              
              <View style={styles.icons1}>
              <Image source={require('figma-challenge/assets/images/signout1.png')}/>
              <Text>Logout</Text>
              </View>
            </View>
            <View
              style={[
                styles.userProfileWidget,
                styles.widget,
              ]}
            >
              <View style={styles.widgetItem}>
                <Text style={styles.widgetItemLabel}>Under or Over</Text>
                <Text style={styles.widgetItemValue}>81%</Text>
              </View>
              <View style={styles.widgetItem}>
                <Text style={styles.widgetItemLabel}>Top 5</Text>
                <Text style={styles.widgetItemValue}>-51%</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={[styles.headerText, styles.disabled]}>Games Played</Text>
              <Text style={styles.headerText}>Badge</Text>
            </View>

      <View style={styles.body}>
        <View style= {styles.card1}>
        <Image
            style={styles.avatarImg1}
            source={require('figma-challenge/assets/images/icon1.png')}
        />
        <Text style={styles.title}>First Stripe Earned</Text>
        <Text style={styles.text}>
        Top 10% of highest spending players in a month        
        </Text>
        </View>

        <View style= {styles.card1}>
        <Image
            style={styles.avatarImg1}
            source={require('figma-challenge/assets/images/icon1.png')}
        />
        <Text style={styles.title}>Born Winner</Text>
        <Text style={styles.text}>
        Top 10% of highest spending players in a month        
        </Text>
        </View>

        <View style= {styles.card1}>
        <Image
            style={styles.avatarImg1}
            source={require('figma-challenge/assets/images/icon1.png')}
        />
        <Text style={styles.title}>Trader of the Month</Text>
        <Text style={styles.text}>
        Won 7 under-over games in a row
        </Text>
        </View>

        <View style= {styles.card1}>
        <Image
            style={styles.avatarImg1}
            source={require('figma-challenge/assets/images/icon1.png')}
        />
        <Text style={styles.title}>Rising Star</Text>
        <Text style={styles.text}>
        Top 10% of highest spending players in a month        
        </Text>
        </View>

        <View style= {styles.card1}>
        <Image
            style={styles.avatarImg1}
            source={require('figma-challenge/assets/images/icon1.png')}
        />
        <Text style={styles.title}>Jackpot</Text>
        <Text style={styles.text}>
        Top 10% of highest spending players in a month        
        </Text>
        </View>
      </View>
    </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TabThreeScreen;