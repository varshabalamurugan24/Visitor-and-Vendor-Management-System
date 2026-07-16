import {
View,
Text,
TextInput,
Button,
StyleSheet
} from "react-native";


export default function RegisterVisit(){


return(

<View style={styles.container}>


<Text style={styles.title}>
Register Visit
</Text>


<TextInput
placeholder="Visitor Name"
style={styles.input}
/>


<TextInput
placeholder="Phone Number"
style={styles.input}
/>


<TextInput
placeholder="Purpose"
style={styles.input}
/>


<TextInput
placeholder="Host Person"
style={styles.input}
/>



<Button
title="Submit Request"
onPress={()=>{
alert("Visit Request Submitted")
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
fontWeight:"bold",
marginBottom:20
},


input:{
borderWidth:1,
padding:12,
marginBottom:15,
borderRadius:8
}

});