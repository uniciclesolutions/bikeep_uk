import React from "react";
import MapView from "react-native-maps";
import Header from "./header";
import Footer from "./footer";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <MapView style={{ flex: 1 }} />
        <Footer />
      </>
    );
  }
}
