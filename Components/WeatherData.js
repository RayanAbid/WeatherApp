import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import { StyleSheet, Image, Text, View } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faSmog,
  faTachometerAlt,
  faThermometerQuarter,
  faTint,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

import { Card, CardItem, Body } from "native-base";

export default function WeatherData(props) {
  return (
    <>
      {/* section 1 */}
      <CardItem style={props.time ? styles.cardMor : styles.cardNight}>
        <Body style={styles.container}>
          <Image
            source={{
              uri: `http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`,
            }}
            style={{ width: 100, height: 100, resizeMode: "stretch" }}
          />
          {/* <H1 style={styles.text}>{props.weather.name}</H1> */}
          <Text style={styles.textHeading}>{props.weather.weather[0].main}</Text>
          <Text style={styles.text}>{props.weather.weather[0].description}</Text>

          <Text style={[styles.textData, { marginTop: 10, padding: 0 }]}>
            {Math.round(props.weather.main.feels_like)}
            <Text style={styles.sup}> °C</Text>
          </Text>
        </Body>
      </CardItem>
      {/* Section 2 */}
      <View style={styles.centerCon}>
        <View style={styles.item}>
          <CardItem style={props.time ? styles.cardMor : styles.cardNight}>
            <Body>
              <FontAwesomeIcon
                size={50}
                style={[styles.icon, { paddingLeft: 100 }]}
                icon={faThermometerQuarter}
              />
              <Text style={[styles.textHeading, { paddingLeft: 10 }]}>Feels Like</Text>
              <Text style={[styles.textDataPress, { paddingLeft: 20 }]}>
                {props.weather.main.feels_like}
              </Text>
            </Body>
          </CardItem>
        </View>
        <View style={styles.item}>
          <CardItem style={props.time ? styles.cardMor : styles.cardNight}>
            <Body>
              <FontAwesomeIcon
                size={50}
                style={[styles.icon, { paddingLeft: 100 }]}
                icon={faSmog}
              />

              <Text style={styles.textHeadingPress}>Humidity</Text>
              <Text style={styles.textDataPress}>{props.weather.main.humidity} %</Text>
            </Body>
          </CardItem>
        </View>
      </View>
      {/* section 3 */}
      <View style={styles.centerCon}>
        <View style={styles.item}>
          <CardItem style={props.time ? styles.cardMor : styles.cardNight}>
            <Body>
              <FontAwesomeIcon
                size={50}
                style={[styles.icon, { paddingLeft: 100 }]}
                icon={faTachometerAlt}
              />
              <Text style={styles.textHeadingPress}>Pressure</Text>
              <Text style={styles.textDataPress}>{props.weather.main.pressure}</Text>
            </Body>
          </CardItem>
        </View>
        <View style={styles.item}>
          <CardItem style={props.time ? styles.cardMor : styles.cardNight}>
            <Body>
              <FontAwesomeIcon
                size={50}
                style={[styles.icon, { paddingLeft: 100 }]}
                icon={faWind}
              />
              <Text style={styles.textHeading}>Wind Speed</Text>
              <Text style={styles.textData}>{props.weather.wind.speed}</Text>
            </Body>
          </CardItem>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  cardMor: {
    margin: 20,
    padding: 20,
    borderColor: "orange",
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: "rgba(255,165,0,0.5)",
  },
  cardNight: {
    margin: 20,
    padding: 20,
    borderColor: "orange",
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: "rgba(39,0,139,0.5)",
  },
  centerCon: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },
  item: {
    width: "50%", // is 50% of container width
  },
  icon: { color: "white" },
  text: { color: "white", margin: 10 },
  textHeading: { color: "white", margin: 5, fontSize: 17 },
  textData: { color: "white", paddingLeft: 20, paddingTop: 10, fontSize: 30 },
  textHeadingPress: { color: "white", margin: 0, paddingLeft: 20, paddingTop: 5, fontSize: 17 },
  textDataPress: { color: "white", paddingLeft: 20, fontSize: 30 },
  sup: { fontSize: 15, lineHeight: 20, color: "white", margin: 10 },
});
