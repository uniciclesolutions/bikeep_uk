import React from "react";
import MapView from "react-native-maps";
import Header from "./src/components/header_component/header";
import Footer from "./src/components/footer_component/footer";

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
