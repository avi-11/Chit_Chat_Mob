import { ActivityIndicator, Keyboard, KeyboardAvoidingView, Linking, Platform, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaskInput from 'react-native-mask-input';

const Otp = () => {

    const [loading,setLoading]=useState(false);
    const [phoneNumber,setPhoneNumber]=useState('');
    const router=useRouter();
    const keyboardVerticalOffset=Platform.OS==='ios'?90:0;
    const {bottom}=useSafeAreaInsets();

    const openLink=()=>{
        Linking.openURL('https://github.com/avi-11');
    }

    const sendOTP=async ()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        },2000)
    };

    const trySignIn=async ()=>{
        
    }

  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            {loading && (
            <View style={[StyleSheet.absoluteFill,styles.loading]}>
                <ActivityIndicator size='large' color={Colors.primary}/>
                <Text style={{fontSize:18,padding:10}}>Sending Code ...</Text>
            </View>
            
            )}
            <Text style={styles.description}>
                Chit-Chat will need to verify your account.Carrier charges may apply.
            </Text>
            <View style={styles.list}>
                <View style={styles.listitem}>
                    <Text style={styles.listItemText}>India</Text>
                    <Ionicons name="chevron-forward" size={20} color={Colors.gray}/>
                </View>
                <View style={styles.separator}/>
                <MaskInput style={styles.input}
                keyboardType='numeric'
                autoFocus
      value={phoneNumber}
      onChangeText={(masked, unmasked) => {
        setPhoneNumber(masked); // you can use the unmasked value as well

        // assuming you typed "9" all the way:
        // console.log(masked); // (99) 99999-9999
        // console.log(unmasked); // 99999999999
      }}
      mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,/\d/]}
    />
            </View>
            <Text style={styles.description}>
                Read Our{" "}
                <Text style={styles.link} onPress={openLink}>
                    Privacy Policy
                </Text>
                . {'Tap "Agree & Continue" to accept the '}
                <Text style={styles.link} onPress={openLink}>Terms of Service</Text>
                .
            </Text>
            <View style={{flex:1}}/>
            <TouchableOpacity disabled={phoneNumber===''} style={[styles.button,phoneNumber!==""?styles.enabled:null,{marginBottom:bottom}]} onPress={sendOTP}>
                <Text style={[styles.buttontext,phoneNumber!==""?styles.enabled:null]}>Next</Text>
            </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        padding:20,
        backgroundColor:Colors.background,
        gap:20
    },
    description:{
        fontSize:14,
        textAlign:'center',
        
        color:Colors.gray
    },
    list:{
        backgroundColor:'#fff',
        width:'100%',
        borderRadius:10,
        padding:10
    },
    listitem:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:6,
        marginBottom:10
    },
    listItemText:{
        fontSize:18,
        color:Colors.primary
    },
    separator:{
        width:'100%',
        height:StyleSheet.hairlineWidth,
        backgroundColor:Colors.gray,
        opacity:0.3
    },
    legal:{
        fontSize:12,
        textAlign:'center',
        color:'#000'
    },
    link:{
        color:Colors.primary
    },
    button:{
        width:'100%',
        alignItems:'center',
        backgroundColor:Colors.lightGray,
        padding:10,
        borderRadius:10
    },
    enabled:{
        backgroundColor:Colors.primary,
        color:'#fff'
    },
    buttontext:{
        color:Colors.gray,
        fontSize:22,
        fontWeight:'500'
    },
    input:{
        backgroundColor:'#fff',
        width:'100%',
        padding:6,
        fontSize:16,
        marginTop:10
    },
    loading:{
        ...StyleSheet.absoluteFillObject,
        zIndex:10,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Otp;

