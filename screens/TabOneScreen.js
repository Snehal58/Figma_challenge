import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, View } from "../components/Themed";


const NestedComponent = () => {
  return (
    <View style={styles.nestedComponent}>
      <View style={styles.widgetforTop}>
        <Text style={styles.headText}>
        Under or Over
        </Text>
        <Text style={styles.headText}>
        Starting in   03:23:12
        </Text>
        </View>
      <Text style={styles.topNestedText}>
        Bitcoin price will be under $24,524 at 7 a ET on 22nd Jan’21
      </Text>
    </View>
  );
};

const MidNestedComponent = () => {
  return (
    <View style={styles.midComponent}>
            <View
              style={[
                styles.userProfileWidget,
                styles.widget,
              ]}
            >
              <View style={styles.widgetItem}>
                <Text style={styles.widgetItemLabel}>PRIZE POOL</Text>
                <Text style={styles.widgetItemValue}>$12,000</Text>
              </View>
              <View style={styles.widgetItem}>
                <Text style={styles.widgetItemLabel}>UNDER</Text>
                <Text style={styles.widgetItemValue}>3.25x</Text>
              </View>
              <View style={[styles.widgetItem, styles.widgetItemLast]}>
                <Text style={styles.widgetItemLabel}>OVER</Text>
                <Text style={styles.widgetItemValue}>12.5x</Text>
              </View>
              <View style={[styles.widgetItem, styles.widgetItemLast]}>
                <Text style={styles.widgetItemLabel}>ENTRY FEES</Text>
                <Text style={styles.widgetItemValue}>5</Text>
              </View>
            </View>
            <Text style= {styles.text}>What’s your prediction?</Text>

            <View style={styles.flexB}>
              <TouchableOpacity style={styles.btnA} activeOpacity={0.8}>
                <Text style={styles.btnTextA} numberOfLines={1}>
                  Under
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnB} activeOpacity={0.8}>
                <Text style={styles.btnTextB} numberOfLines={1}>
                  Over
                </Text>
              </TouchableOpacity>
            </View>
          </View>
  );
};

const EndNestedComponent = () => {
  return (
    <View style={styles.endComponent}>
      <View style={styles.widgetforTop1}>
        <Text style={styles.textleft}>355 Players</Text>
        <Text style={styles.textright}>View chart</Text>
        </View>
        <View style= {styles.scale}>
        <Image source={require('figma-challenge/assets/images/pink.png')}/>
        <Image source={require('figma-challenge/assets/images/green.png')}/>
        
        </View>
        <View style={styles.widgetforBottom}>
        <Text style={styles.textleft}>232 predicted under</Text>
        <Text style={styles.textright}>123 predicted over</Text>
        </View>
     </View>
  );
};


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.myComponent}>
        {/* Top Nested Component */}
        {/* <View style={styles.nestedComponent} /> */}
        <NestedComponent />


        {/* Middle Nested Component */}
        <MidNestedComponent />

        {/* Bottom Nested Component */}
        <EndNestedComponent />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom:300
  },
  title: {
    color: "#FE4190",
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    color: "#6231AD",
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  myComponent: {
    width: 343,
    height: 389,
    backgroundColor: '#FFF', // You can customize the background color or add other styles
  },
  nestedComponent: {
    width: 341,
    height: 104,
    flexShrink: 0,
    backgroundColor: 'purple', // You can customize the background color or add other styles

  },
  text: {
    fontSize: 14,
    marginBottom: 16,
    marginLeft:20
  },
  textright: {
    textAlign:'right',
    fontSize: 14,
    marginTop: 10,
    marginRight:10
  },
  textleft: {
    textAlign:'left',
    fontSize: 14,
    marginTop: 10,
    marginLeft:10
  },
  endComponent: {
    width: 341,
    height: 110,
    flexShrink: 0,
    backgroundColor: '#F6F3FA', // You can customize the background color or add other styles

  },
  midComponent: {
    width: 341,
    height: 175,
    flexShrink: 0,
    // borderRadius: '0 0 4px 4px',
  },
  headText: {
    color: '#D2BAF5',
    justifyContent:'space-between',
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    textTransform: 'uppercase',

  },
  headText1: {
    color: '#B296DC',
    textAlign: 'right',
    justifyContent:'space-between',
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',

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
    backgroundColor: '#452C55',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#452C55',
    overflow: 'hidden',
    marginBottom:100
  },
  btnTextA: {
    color: '#ffffff',
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
    backgroundColor: '#6231AD',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#6231AD',
    overflow: 'hidden',
    marginBottom:100

  },
  btnTextB: {
    color: '#fff',
    fontSize: 20,
  },

  userProfileWidget: {
    alignSelf: 'stretch',
    marginTop: 5,
    marginBottom: 5,
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
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.5,
  },
  widgetItemValue: {
    marginTop: 4,
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
  },
  scale:{
    flexDirection: 'row',
    backgroundColor:'#F6F3FA',
    marginTop: 20,
    marginLeft:15,
    flexShrink: 0,
  },
  topNestedText:{
    color: '#fff',
    position:'relative',
    marginTop: 25,
    marginLeft:15,
    fontSize:14,
    marginRight:100,
    fontWeight:500
  },
  widgetforTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    backgroundColor: 'purple'
  },
  widgetforTop1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#F6F3FA'
  },
  widgetforBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#F6F3FA',
    marginBottom:10
  },


});
