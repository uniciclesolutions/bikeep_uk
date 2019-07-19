import React from "react";

import MapView from "react-native-maps";
import Header from "../../../components/header_component/header";
import Footer from "../../../components/footer_component/footer";

export default class HomeScreen extends React.Component {
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
