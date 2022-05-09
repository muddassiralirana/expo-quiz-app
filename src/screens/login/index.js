import React from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native"

const Login =()=>{
    return(
        <View>
            <View>
                <Text style={styles.title}>
                    Login
                </Text>
                <Text style={styles.subtitle}>
                    Add your  details to Login
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput keyboardType="email-address" maxLength={30} autoFocus={true} placeholder="your Email" style={styles.input} />
                <TextInput secureTextEntry={true} maxLength={14} autoFocus={true} placeholder="your Password" style={styles.input} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={styles.button}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    title:{
        width:"100%",
        color:"green",
        fontSize:45,
        padding:10,
        textAlign:"center"
    },
    subtitle:{
        width:"100%",
        color:"red",
        fontSize:16,
        padding:5,
        textAlign:"center"
    },
    inputContainer: {
        width: "80%",
        marginHorizontal: "auto",
        marginTop: 20
      },
      input: {
        height: 60,
        backgroundColor: "#e7e7e7",
        borderRadius: 25,
        marginBottom: 25,
        paddingHorizontal: 20
      },
      buttonContainer: {
        width: "100%",
        marginHorizontal: 40,
        marginTop: 10,
        marginBottom: 20
        
      },
      button: {
        width: "100%",
        height: 70,
        width:80,
        textAlign: "center",
        color: "#fff",
        backgroundColor: "#000",
        paddingVertical: 25,
        borderRadius: 40,
        fontSize: 16,
        backgroundColor: "#39eb9a"
      },
  });
  


export default Login;