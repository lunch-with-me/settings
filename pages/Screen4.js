
import React, { Component } from 'react';

import { StyleSheet, View,Image,ImageBackground, Text ,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import {  ScrollView, TextInput,Picker, TouchableHighlight, } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-material-dropdown';
//import {ImagePicker} from 'react-native-image-picker';
//var ImagePicker = require('react-native-image-picker');
export default class Screen4 extends Component {
  constructor(props){
    super(props)
    //set value in state for initial date
    this.state = {date:"15-05-2018"}

  }
  state={
      occupation:'student'
  }

  pickImage(){
    
  }
  render() {
    let data = [{
      value: 'Student',
    }, {
      value: 'Doctor',
    }, {
      value: 'Engineer',
    }];
    return (
      <View style={styles.MainContainer}>
      
      <View style={styles.ovalBack}>
      <ImageBackground source={require('../image/profiles1.jpg')} style={{width: '100%', height:'100%',borderBottomEndRadius:0,borderBottomStartRadius:0}}>
        <View  style={styles.ovalBack2}>
        <View style={{flexDirection:'row',position:'relative',alignItems:'center',marginTop:'12%'}}>
        <TouchableOpacity style={styles.ovalEdit1}>
          <Image  source={require('../image/unlock2.png')} style={{alignSelf:'center',marginTop:13}}/>
         
        </TouchableOpacity>
        <View><View style={styles.ovalPro}><Image source={require('../image/profiles1.jpg')} style={{width: '100%', height:'100%',borderRadius:900,overflow:'hidden',}}/></View></View>
        <TouchableOpacity style={styles.ovalEdit2 } onPress={this.onPress}><Image source={require('../image/cam2.png')} style={{alignSelf:'center',marginTop:13}}/></TouchableOpacity>
        </View>
        
        </View>
        </ImageBackground>
       
        
      </View>
      {/* <TouchableHighlight style={styles.ovalEdit2}></TouchableHighlight> */}
      
       
        
      
      <View style={styles.heading}>
      <Text style={styles.headingText}>Nethme Sellahewa</Text>
      <Text style={styles.bio}>"bla bla bla"</Text>
      
      </View>
      
      <ScrollView>
      <View style={styles.body}>
          <View style={styles.cardP}>
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <Text styles={styles.bio}>Personal Details</Text>
            <View>
              <Text>Full Name:</Text>
              <TextInput/>
              <Text>Date of Birth:</Text>
              

                <DatePicker
          style={{width: 200}}
         date= "01-01-2016"//initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
             <Text>Address:</Text> 
             <TextInput/>
             <Text>Telephone number:</Text> 
             <TextInput/>
             <Text>Email:</Text> 
             <TextInput/>
             <Text>Occupation:</Text> 
             <Dropdown
      
                data={data}
              />
              <Text>Description about the job:</Text>
              <TextInput
                multiline={true}
                numberOfLines={3}
                style={{}}
              />

             
             
            </View>
            </KeyboardAvoidingView>
          </View>

      </View>
      </ScrollView>
      <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text> Touch Here </Text>
       </TouchableOpacity>
   
      </View>

    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    //paddingTop: 20,
   // alignItems: 'center',
    //marginTop: 50,
    //justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  card1:{
    elevation:8,
    width:'100%',
    height:'50%'

  },
  cardP:{
    width:'100%',
    backgroundColor:'#ffffff',
    borderColor:'#efdcd5',
    borderStyle:'solid',
    marginTop:'5%',
    height:500,

  },
  body:{
    width:'100%',
    backgroundColor:'#ffffe4',
    alignItems:'center',
   // justifyContent:'center',
  },
  bio:{
      fontSize:15,
      fontWeight:'700',
  },
  heading:{
    alignItems:'center',
    justifyContent:'center',
    fontSize:20,
    color:'#000',
    marginTop:90,
    width:'100%',
    //height:'20%',
    borderBottomColor:'rgba(100,100,100,0.4)',
    borderBottomWidth:1,
    paddingBottom:20,
    //backgroundColor:'#efdcd5',
  },
  headingText:{
    color:"#111111",
    fontSize:20,
    fontWeight:'bold'
  },
  ovalBack:{
      width:'100%',
      height:'25%',
      backgroundColor:'#222222',
      //borderBottomStartRadius:200,
      //borderBottomEndRadius:200,
      marginTop:0,
      //justifyContent:'center',  
      //alignItems:'center',
      elevation:4,

  },
  ovalBack2:{
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(0,0,0,0.7)',
    //borderBottomStartRadius:170,
    //borderBottomEndRadius:170,
    marginTop:0,
    justifyContent:'center',
    alignItems:'center',
    elevation:3,
    overflow:'visible',

},
  ovalPro:{
    width:170,
    height:170,
    borderRadius:200,
    backgroundColor:'#FF355E',
    marginTop:70,
    overflow:'visible',
    elevation:7,
  },
  ovalEdit1:{
    width:60,
    height:60,
    borderRadius:200,
    backgroundColor:'#FF355E',
    marginTop:70,
   // overflow:'visible',
    elevation:5,
    marginLeft:25,
    marginRight:25,

  },
  ovalEdit2:{
    width:60,
    height:60,
    borderRadius:200,
    backgroundColor:'#FF355E',
    marginTop:70,
    //overflow:'visible',
    elevation:10,
    marginRight:0,
    marginLeft:25,

  },
});