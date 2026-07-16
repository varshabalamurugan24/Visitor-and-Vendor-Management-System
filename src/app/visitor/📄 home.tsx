import React from "react";

import {
View,
Text,
StyleSheet,
TouchableOpacity
} from "react-native";

import {router} from "expo-router";


export default function VisitorHome(){


return(

<View style={styles.container}>


<Text style={styles.title}>
Visitor Dashboard
</Text>


<Text style={styles.welcome}>
Welcome Visitor 👋
</Text>



<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/visitor/registerVisit")}
>

<Text style={styles.cardText}>
📝 Register Visit
</Text>

</TouchableOpacity>



<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/visitor/approval")}
>

<Text style={styles.cardText}>
✅ Approval Status
</Text>

</TouchableOpacity>




<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/visitor/qr")}
>

<Text style={styles.cardText}>
🔳 QR Pass
</Text>

</TouchableOpacity>




<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/visitor/history")}
>

<Text style={styles.cardText}>
📜 Visit History
</Text>

</TouchableOpacity>




<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/visitor/profile")}
>

<Text style={styles.cardText}>
👤 Profile
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
borderRadius:15,
marginVertical:10,
elevation:5
},


cardText:{
fontSize:18,
fontWeight:"bold"
}


});