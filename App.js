import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

  
import { StyleSheet, ImageBackground, Modal, Text, View, ScrollView } from "react-native";


import { Ionicons } from "@expo/vector-icons";
import {
  Container,
  Header,
  Left,
  Body,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Right,
} from "native-base";

import Main from "./Components/Main";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faInfo, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

import RewardAd from "./Components/RewardAd";

export default function App() {
  var imgUrl = "./assets/day.png";

  const [modalVisible, setModalVisible] = useState(false);

  // useEffect(() => {
  //   (async () =>
  //     await Font.loadAsync({
  //       Roboto: require("native-base/Fonts/Roboto.ttf"),
  //       Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //     }))();
  // }, []);

  const isDay = () => {
    const hours = new Date().getHours();
    return hours >= 6 && hours < 18;
    // return false;
  };

  // Android Banner : ca-app-pub-4253456160707581/4609115659
  // Android Reward : ca-app-pub-4253456160707581/3354731972
  // Android Advanced : ca-app-pub-4253456160707581/4228829945

  return (
    <Container>
      {/* <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Room Temprature App by Rayan Abid</Text>

            <Button
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => setModalVisible(false)}
              transparent>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Button>
          </View>
        </View>
      </Modal>
     */}
      <ImageBackground
        source={isDay() ? require("./assets/day.png") : require("./assets/night.png")}
        style={styles.image}>
        <Header style={isDay() ? styles.Morning : styles.Night}>
          <Left>
            <Button onPress={() => setModalVisible(true)} transparent>
              <FontAwesomeIcon
                // size={50}
                style={[{ color: "white" }]}
                icon={faInfo}
              />
            </Button>
          </Left>

          <Body>
            <Text style={{ width: 200 }}>Room Temprature</Text>
          </Body>
          <Right>
            <RewardAd />
          </Right>
        </Header>

        <Content>
          <Main time={isDay()} />
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <AdMobBanner
                bannerSize='fullBanner'
                adUnitID='ca-app-pub-3940256099942544/6300978111' // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds={true} // true or false
                // onDidFailToReceiveAdWithError={this.bannerError}
              />
            </Button>
          </FooterTab>
        </Footer>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  Morning: {
    backgroundColor: "rgba(255,165,0,0.5)",
  },
  Night: {
    backgroundColor: "rgba(39,0,139,0.5)",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    marginLeft: 40,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
