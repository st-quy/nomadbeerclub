import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">14 An Thượng 18, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng.</p>
        <p className="p__opensans">+84 935-244-082</p>
        <p className="p__opensans">+84 905-182-013</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="app__footer-headtext">Social</h1>
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Sunday:</p>
        <p className="p__opensans">18:00 pm - 23:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Nomad. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
