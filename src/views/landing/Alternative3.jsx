import React from "react";

// shared page components
import PowerfulFeatures from "../shared/PowerfulFeatures.jsx";
import MultipleDesignBlocks from "../shared/MultipleDesignBlocks.jsx";
import FeaturesCantMiss from "../shared/FeaturesCantMiss.jsx";
import Pricing from "../shared/Pricing.jsx";
import Integration from "../shared/Integration.jsx";
import WhyUs from "../shared/WhyUs.jsx";
import Faqs from "../shared/Faqs.jsx";
import StartFree from "../shared/StartFree.jsx";
import Subscribe from "../shared/Subscribe.jsx";

// core components
import DefaultNavbar from "components/Navbars/DefaultNavbar.jsx";
import DefaultFooter from "components/Footers/DefaultFooter.jsx";

// alternative 3 page components
import Heading from "../alter3/Heading.jsx";
import IsometricMockups from "../alter3/IsometricMockups.jsx";
import Partners from "../alter3/Partners.jsx";

class Alternative3 extends React.Component {
  render() {
    return (
      <>
        <DefaultNavbar />
        <main ref="main">
          {/* Alternative 3 specific components */}
          <Heading />
          <IsometricMockups />
          <Partners />

          {/* Shared Components */}
          <PowerfulFeatures />
          <MultipleDesignBlocks />
          <FeaturesCantMiss />
          <Pricing />
          <Integration />
          <WhyUs />
          <Faqs />
          <StartFree />
          <Subscribe />
        </main>
        <DefaultFooter />
      </>
    );
  }
}

export default Alternative3;
