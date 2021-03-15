import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import { StyleSheet, Image, Text, View } from "react-native";

// import { Text, Container, Card, CardItem, Content, Body, View } from "native-base";

import * as Location from "expo-location";

import opencage from "opencage-api-client";

import WeatherData from "./WeatherData";

import axios from "axios";

import AnimatedLoader from "react-native-animated-loader";

export default function Main(props) {
  const myApiKey = "AIzaSyCuIVfHtfHgZp4JFduRkx0YmZ5EBruZL7E";
  const [weather, setWeather] = useState({});
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const GetWeather = async (loc) => {
    const options = {
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather`,
      params: {
        q: loc.components.state + "," + loc.components.country,
        lat: loc.geometry.lat,
        lon: loc.geometry.lng,
        lang: "urdu",
        units: "metric",
        mode: "json",
        APPID: "71ee27d81f315f5f977bd6a0ac6194cc",
      },
      headers: {
        // "x-rapidapi-key": "aaaba026a5msh9d9e0d9bfa8d38ep1134d8jsn9388688a73b4",
        // "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data, "test");
        setVisible(false);
        setWeather(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getLocation = async (cord) => {
    setLongitude(cord.longitude);
    setLatitude(cord.latitude);
    const key = "2598c5a6742942dcb2bf8866b2d6835a";
    opencage.geocode({ key, q: `${cord.latitude},${cord.longitude}` }).then((response) => {
      const result = response.results[0];
      GetWeather(result);

      // this.setState({ address: result.formatted });
    });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      getLocation(location.coords);
    })();
  }, []);

  return (
    <View>
      <AnimatedLoader
        source={props.time ? require("./loader.json") : require("./loaderNight.json")}
        visible={visible}
        overlayColor={props.time ? "rgba(255,165,0,0.7)" : "rgba(39,0,139,0.7)"}
        animationStyle={styles.lottie}
        speed={1}
      />
      {weather.main && <WeatherData weather={weather} time={props.time} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  lottie: {
    width: 200,
    height: 200,
  },
});
