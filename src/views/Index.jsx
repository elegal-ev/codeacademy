import React from "react";

// index page sections
import Header from "./index/Header.jsx";
import Palette from "./index/Palette.jsx";
import Selection from "./index/Selection.jsx";
import Themeable from "./index/Themeable.jsx";
import Nwyneed from "./index/Nwyneed.jsx";
import GetStarted from "./index/GetStarted.jsx";
import Footer from "./index/Footer.jsx";

//import "assets/sass/laapp.scss";
import "assets/sass/demo.scss";

class Index extends React.Component {
  render() {
    return (
      <>
        <main ref="main">
          <Header />
          <Palette />
          <Selection />
          <Themeable />
          <Nwyneed />
          <GetStarted />
        </main>

        <Footer />
      </>
    );
  }
}

export default Index;
