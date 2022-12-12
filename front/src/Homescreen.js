import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Homescreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to IOT Application</Text>
      <View style={styles.fixed} >
        <View style={styles.col}>
          <TouchableOpacity style={styles.box} onPress={()=>navigation.navigate('Temp')}>
            <Image style={styles.image} source={require("../assets/temperature.png")} />
          </TouchableOpacity>
          <Text>Temperature</Text>
          <TouchableOpacity style={styles.box}>
            <Image style={styles.image} source={require("../assets/footstep.png")} />
          </TouchableOpacity>
          <Text>Walking</Text>
        </View>
        <View style={styles.col}>
          <TouchableOpacity style={styles.box}>
            <Image style={styles.image} source={require("../assets/oxygen-tank.png")} />
          </TouchableOpacity>
          <Text>Oxygen</Text>
          <TouchableOpacity style={styles.box}>
            <Image style={styles.image} source={require("../assets/hypertension.png")} />
          </TouchableOpacity>
          <Text>Hypertension</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    marginTop: 60,
    color: "cornflowerblue",
    fontSize: 24,
    fontWeight: "bold",
    alignItems: "flex-start",
  },
  box: {
    alignContent: "flex-start",
    alignItems: 'flex-start',
    borderColor: 'blue',
    padding: 10,
    margin: 5,
    borderWidth: 2,
  },
  fixed: {
    flexDirection: "row",

    justifyContent: "space-between",
    padding: 5,
    margin: 5,

  },
  col: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    margin: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 40 / 2,
  },
});

export default Homescreen