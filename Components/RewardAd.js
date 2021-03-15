import React, { Component } from "react";
import { AdMobRewarded } from "expo-ads-admob";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Button } from "native-base";

export default class AdMobRewardedComponent extends Component {
  state = {
    loadedAd: false,
  };
  async componentDidMount() {
    }
  componentWillUnmount() {
    AdMobRewarded.removeAllListeners();
  }
  _handlePress = async () => {
    AdMobRewarded.setTestDeviceID("EMULATOR");
    AdMobRewarded.setAdUnitID("ca-app-pub-3940256099942544/5224354917"); // Test ID, Replace with your-admob-unit-id
    AdMobRewarded.addEventListener("rewardedVideoDidRewardUser", () => console.log("Rewarded"));
    AdMobRewarded.addEventListener("rewardedVideoDidLoad", () => {
      console.log("VideoLoaded");
      this.setState({ loadedAd: true });
    });
    AdMobRewarded.addEventListener("rewardedVideoDidFailToLoad", () => console.log("FailedToLoad"));
    AdMobRewarded.addEventListener("rewardedVideoDidOpen", () => console.log("Opened"));
    AdMobRewarded.addEventListener("rewardedVideoDidClose", () => {
      console.log("Closed");
      this.setState({ loadedAd: false });
    });
    AdMobRewarded.addEventListener("rewardedVideoWillLeaveApplication", () =>
      console.log("LeaveApp")
    );
    AdMobRewarded.addEventListener("rewardedVideoDidStart", () => console.log("Started"));
    await AdMobRewarded.requestAdAsync();
  
    await AdMobRewarded.showAdAsync();
  };
  render() {
    const { loadedAd } = this.state;
    return (
      <Button onPress={this._handlePress} transparent>
        <FontAwesomeIcon style={[{ color: "white" }]} icon={faCoffee} disabled={!loadedAd} />
      </Button>
    );
  }
}
