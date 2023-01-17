import pahoMqtt from "paho-mqtt";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const client = new pahoMqtt.Client(
  "broker.hivemq.com",
  Number(8000),
  `mqtt-random-${parseInt(Math.random() * 100)}`
);


const Temp = () => {

  const [subscribe, setSubscribe] = useState([
    { name: "hc/temp", messages: [] },

  ]);
  const onMessage = (value) => {
    console.log(subscribe);
    const foundIndex = subscribe.findIndex(
      (x) => x.name == value.destinationName
    );
    console.log(foundIndex);
    if (foundIndex != -1) {
      const cpy = [...subscribe];
      cpy[foundIndex].messages.push({
        value: value.payloadString,
        date: new Date(),
      });
      console.log(cpy);
      setSubscribe(cpy);

    }


  };

  client.onMessageArrived = onMessage;
  useEffect(() => {
    client.connect({
      onSuccess: () => {
        console.log("connected succefully");
        subscribe.forEach((el) => client.subscribe(el.name));

      },
      onFailure: () => {
        console.log("Connection failed");
      },
    });
  }, []);



  const gettemps = async () => {
    try {
      const response = await fetch(`http://192.168.1.15:8080/datatemp`);
      const json = await response.json();
      console.log(json.templist)
      setSubscribe(json.templist);

    } catch (error) {
      console.error(error);

    }
  }
  useEffect(() => {
    gettemps();
  }, []);

  return (
    <ScrollView style={styles.container} >
      <Text style={{ fontSize: 40, textAlign: 'center', color: "darkturquoise", marginBottom: 50 }}>Real Time Values  </Text>
      {subscribe.map((el, i) => (
        <View key={i}>
          {el.messages.map((value, index) => (
            <View key={index}>

              <Image style={{ width: 120, height: 120, }} source={require("../assets/temperature.png")} />
              <Text style={{ fontSize: 15 }}> {value.value}</Text>
              <Text style={{ flexDirection: "row", marginLeft: 50 }}> Date:
                {new Date(value.date).toLocaleDateString() +
                  " " +
                  new Date(value.date).toLocaleTimeString()}
              </Text>

            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    padding: '2%',
  },
  Liste1: {
    flexDirection: "row",
    marginTop: 50,

  }

});


export default Temp

