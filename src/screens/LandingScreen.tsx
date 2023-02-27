import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from '@rneui/themed';

import * as Location from 'expo-location'
import { useNavigation } from '@react-navigation/native';


const screenWidth =Dimensions.get('screen').width



const LandingScreen = () => {

    const [errorMsg, setErrorMsg] = useState("");
    const [address, setAddress] = useState<Location.Address>();
    
    const [displayAddress, setDisplayAddress] = useState("Waiting for Current Location");

    const { navigate } = useNavigation()

    useEffect(() => {
      (async () => {
        console.log("location request")
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log("Failed")
            setErrorMsg('Permission to access location was denied');
            return;
        }
        console.log('granted')
        let location:any = await Location.getCurrentPositionAsync({});
        const {coords} = location;
        console.log("hello")
        console.log(coords)

        if(coords){
            const {latitude, longitude} = coords;

            let addressResponse:any = await Location.reverseGeocodeAsync({latitude,longitude})

            for(let item of addressResponse){
                setAddress(item);
                let currentAddress = `${item.name},${item.street},${item.postalCode},${item.country}`
                setDisplayAddress(currentAddress)

                if(currentAddress.length > 0){
                    setTimeout(() => {
                        navigate("TabNavigation")
                    },1500)
                }

                return;
            }

        }else{
            //do nothing
        }

      })()
    }, []);

    
  return (
    <View style={styles.container} > 
        <View style={styles.navigation}>
            
        </View>
        <View style={styles.body}>
            <Icon
            raised
            name='location'
            type='entypo'
            color='#517fa4'
            size="60"
            />
            <View style={styles.addressContainer} >
                <Text style={styles.addressTitle}>Your Delivery Address</Text>
            </View>
            <Text style={styles.addressText}>{displayAddress} </Text>
        </View>
        <View style={styles.footer}>
            <Text>Footer</Text>
        </View>
    </View>
  )
}

export default LandingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(240,240,240,1)'
    },
    navigation:{
        flex:2,
        //backgroundColor: 'red'
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems:'center',
        //backgroundColor:'yellow'
    },
    addressContainer: {
        width: screenWidth - 100,
        borderBottomColor: 'red',
        borderBottomWidth: 0.5,
        padding: 5,
        marginBottom: 10,
        alignItems: 'center',
    },
    addressTitle:{
        fonsize: 22,
        fontWeight: '700',
        color: '#7d7d7d7d'
    },
    addressText: {
        fontSize: 20,
        fontWeight: '200',
        color: '#4f4f4f4f'
    },
    footer: {
        flex:1,
        //backgroundColor:'cyan'
    }
})