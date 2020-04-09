import React from 'react';

// core components
// import DefaultNavbar from "../components/Navbars/DefaultNavbar.jsx";
import DefaultNavbar from '../../components/Navbars/DefaultNavbar';

// alternative 2 page components
import Heading from '../alter2/Heading.jsx';
import Partners from '../alter2/Partners.jsx';
import Features from '../alter2/Features.jsx';

class Alternative2 extends React.Component {
  render() {
    return (
      <>
        <DefaultNavbar useOnlyDarkLogo={true} />
        <main ref="main">
          {/* Alternative 2 specific components */}
          <Heading />
          <Partners />
          <Features />

          {/* Shared Components */}
        </main>
        {/* <DefaultFooter /> */}
      </>
    );
  }
}

export default Alternative2;
