/*!
 * Title:   Laapp - HTML App Landing Page
 * Main Javascript file
 * Author:  http://themeforest.net/user/5studiosnet
 * Copyright © 2019 5Studios.net
 * https://5studios.net
 */

// FontAwesome used icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLongArrowAltRight,
  faDesktop,
  faDollarSign,
  faCashRegister,
  faExclamationCircle,
  faMoneyBillAlt as fasMoneyBillAlt,
  faPlug,
  faTag,
  faHeart,
  faHeadphones,
  faHandshake,
  faQuestion,
  faTrophy,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import {
  faLightbulb,
  faCreditCard,
  faMoneyBillAlt as farMoneyBillAlt
} from "@fortawesome/free-regular-svg-icons";

import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

// general js and styles
import "pe7-icon/dist/dist/pe-icon-7-stroke.css";
// import "assets/sass/laapp.scss";
import './assets/sass/laapp.scss'

// Configure here the font-awesome icons you'll be using across the website
library.add(
  faLongArrowAltRight,
  faDesktop,
  faDollarSign,
  faCashRegister,
  faExclamationCircle,
  farMoneyBillAlt,
  faPlug,
  faTag,
  faHeart,
  faHeadphones,
  faHandshake,
  faQuestion,
  faTrophy,
  faEnvelope,

  faCreditCard,
  faLightbulb,
  fasMoneyBillAlt,

  faFacebook,
  faTwitter,
  faInstagram
);
