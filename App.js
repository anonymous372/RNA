import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


function ExploreScreen ({navigation}) { 
  const [text, setText] = React.useState(null); 
  return (
    <View>
      <TextInput
        onChangeText={(text) => setText(text)}
      />
      <Button
          title="Home"
          onPress={() => navigation.navigate('Home', {title: text})}
        />
  </View>
  );
}

function HomeScreen ({navigation, route}) {
  return (
    <View>
      <Text>{route.params.title}</Text>
      <Button
          title="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
  </View>
  );
}

function ProfileScreen () {
  return (
    <View>
      <Text>This is the Profile Page</Text>
  </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

