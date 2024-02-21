import { View,Text,StyleSheet,Image,TouchableOpacity, Linking } from "react-native";
import welcomeImg from "@/assets/images/welcome.png";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
const welcome_Image=Image.resolveAssetSource(welcomeImg).uri;

const Page=()=>{

    const openLink=()=>{
        Linking.openURL('https://github.com/avi-11');
    }

    return(
        <View style={styles.container}>
            <Image source={{uri:welcome_Image}} style={styles.welcome}/>
            <Text style={styles.headline}>Welcome to Chit-Chat</Text>
            <Text style={styles.description}>
                Read Our{" "}
                <Text style={styles.link} onPress={openLink}>
                    Privacy Policy
                </Text>
                . {'Tap "Agree & Continue" to accept the '}
                <Text style={styles.link} onPress={openLink}>Terms of Service</Text>
                .
            </Text>
            <Link href={"/otp"} asChild replace>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}>Agree & Continue</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    welcome:{
        width:'100%',
        height:300,
        marginBottom:80
    },
    headline:{
        fontSize:24,
        fontWeight:'bold',
        marginVertical:20
    },
    description:{
        fontSize:14,
        textAlign:'center',
        marginBottom:80,
        color:Colors.gray
    },
    link:{
        color:Colors.primary
    },
    button:{
        width:'100%',
        alignItems:'center'
    },
    buttontext:{
        fontSize:22,
        color:Colors.primary,
        fontWeight:'bold'
    }
})

export default Page;