import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button } from 'react-native';
import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


function ExploreScreen ({navigation}) { 
  // console.log("Explore")
  const [text, setText] = React.useState(null); 
  return (
    <View style={styles}>
      <Text>Explore</Text>
      <TextInput 
        onChangeText={(text) => setText(text)}
      />
      <Button
          style = {button}
          onPress={() => navigation.navigate('Home', {title: text})}
        />
  </View>
  );
}

function HomeScreen ({navigation, route}) {
  console.log("Home",route)
  const txt = route.params.title
  return (
    <View style={styles}>
      <Text style={text}>{txt == null ? "Home Page" : txt}</Text>
      <Button 
          style = {button}
          onPress={() => navigation.navigate('Profile')}
        />
  </View>
  );
}

function ProfileScreen () {
  return (
    <View>
      <Text style={text}>This is the Profile Page</Text>
  </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Explore">
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

const styles = {
  marginTop : "5%",
  // justifyContent: "center",
  // alignItem : "center"
}
const text ={
  fontSize: "25px",
  textAlign: "center",
  marginBottom: "20%"
}
const input = {
  width: "70%",
  margin: "5% 0 20%",
  alignItems: "center",
  padding: "10px 20px"
}

const button = {
  width:"100px",
  height: "40px",
  padding: "10px 20px" 
}
