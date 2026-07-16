import {
View,
Text,
TextInput,
Button,
StyleSheet
} from "react-native";


export default function Appointment(){


return(

<View style={styles.container}>


<Text style={styles.title}>
Vendor Appointment
</Text>



<TextInput
placeholder="Company Name"
style={styles.input}
/>



<TextInput
placeholder="Contact Person"
style={styles.input}
/>



<TextInput
placeholder="Purpose"
style={styles.input}
/>



<Button
title="Request Appointment"
onPress={()=>{
alert("Appointment Requested")
}}
/>


</View>

)

}



const styles=StyleSheet.create({

container:{
padding:20
},

title:{
fontSize:25,
fontWeight:"bold"
},


input:{
borderWidth:1,
padding:12,
marginTop:15,
borderRadius:8
}

});