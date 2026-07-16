import React from "react";

import {
View,
Text,
StyleSheet,
TouchableOpacity
} from "react-native";

import {router} from "expo-router";



export default function VendorHome(){


return(

<View style={styles.container}>


<Text style={styles.title}>
Vendor Dashboard
</Text>


<Text style={styles.welcome}>
Welcome Vendor 👋
</Text>



<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/vendor/appointment")}
>

<Text style={styles.text}>
📅 Request Appointment
</Text>

</TouchableOpacity>



<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/vendor/approval")}
>

<Text style={styles.text}>
✅ Approval Status
</Text>

</TouchableOpacity>



<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/vendor/qr")}
>

<Text style={styles.text}>
🔳 QR Pass
</Text>

</TouchableOpacity>




<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/vendor/history")}
>

<Text style={styles.text}>
📜 Appointment History
</Text>

</TouchableOpacity>



<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/vendor/profile")}
>

<Text style={styles.text}>
🏢 Company Profile
</Text>

</TouchableOpacity>



</View>

)

}



const styles=StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor:"#F5F7FA"
},


title:{
fontSize:30,
fontWeight:"bold",
color:"#1565C0",
marginTop:40
},


welcome:{
fontSize:18,
marginVertical:20
},


card:{
backgroundColor:"white",
padding:20,
marginVertical:10,
borderRadius:15,
elevation:5
},


text:{
fontSize:18,
fontWeight:"bold"
}


});