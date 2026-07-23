import React from "react";
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet
} from "react-native";


export default function LoadingSpinner({
  visible,
  message
}:{
  visible:boolean;
  message:string;
}){


  if(!visible){
    return null;
  }


  return(

    <View style={styles.overlay}>

      <ActivityIndicator
        size="large"
        color="#2563eb"
      />

      <Text style={styles.text}>
        {message}
      </Text>

    </View>

  );

}


const styles=StyleSheet.create({

overlay:{
 position:"absolute",
 top:0,
 left:0,
 right:0,
 bottom:0,
 backgroundColor:"rgba(0,0,0,0.3)",
 justifyContent:"center",
 alignItems:"center",
 zIndex:100
},

text:{
 marginTop:15,
 color:"#fff",
 fontSize:16,
 fontWeight:"600"
}

});