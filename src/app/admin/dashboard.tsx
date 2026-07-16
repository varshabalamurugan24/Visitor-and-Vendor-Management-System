import { 
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import DashboardCard from "../../components/DashboardCard";


export default function AdminDashboard(){

return(

<ScrollView style={styles.container}>


<Text style={styles.heading}>
Admin Dashboard
</Text>


<Text style={styles.welcome}>
Welcome Admin 👋
</Text>



<DashboardCard
title="Total Visitors"
value="120"
/>


<DashboardCard
title="Total Vendors"
value="45"
/>



<Text style={styles.section}>
Management
</Text>



<DashboardCard
title="Manage Visitors"
/>


<DashboardCard
title="Manage Vendors"
/>


<DashboardCard
title="Visit History"
/>


<DashboardCard
title="Notifications"
/>


</ScrollView>

);

}



const styles=StyleSheet.create({

container:{
padding:20,
backgroundColor:"#f5f5f5"
},

heading:{
fontSize:28,
fontWeight:"bold",
marginTop:30
},

welcome:{
fontSize:18,
marginVertical:20
},

section:{
fontSize:22,
fontWeight:"bold",
marginTop:20
}

});