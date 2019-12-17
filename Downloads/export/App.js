import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
<<<<<<< HEAD
import { fb, fs } from './config.js';
=======
import firebase from './config.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
>>>>>>> 0ab3d2870745bfeae7a8f71fb6df9037c721fd00
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

<<<<<<< HEAD
const testQuery = fs.collection("users").doc("test");
testQuery.set({
  a: "B",
  c: "D"
});

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Change code in the editor and watch it change on your phone! Save to get a shareable url.
          </Text>
          <Card>
            <AssetExample />
          </Card>
        </View>
=======

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
>>>>>>> 0ab3d2870745bfeae7a8f71fb6df9037c721fd00
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
<<<<<<< HEAD
});
=======
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.paragraph}>
//           Change code in the editor and watch it change on your phone! Save to get a shareable url.
//         </Text>
//         <Card>
//           <AssetExample />
//         </Card>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
>>>>>>> 0ab3d2870745bfeae7a8f71fb6df9037c721fd00
