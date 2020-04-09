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

// alternative 1 page components
import Heading from "../alter1/Heading.jsx";
import FeaturesCard from "../alter1/FeaturesCard.jsx";
import Proposal from "../alter1/Proposal.jsx";

class Alternative1 extends React.Component {
  render() {
    return (
      <>
        <DefaultNavbar />
        <main ref="main">
          {/* Alternative 1 specific components */}
          <Heading />
          <FeaturesCard />
          <Proposal />

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

export default Alternative1;
