import React from 'react';
import ReactDOM from 'react-dom';
//import "semantic-ui-css/semantic.css";
import './index.css';
//import './assets/sass/main.css';
import Layout from './components/Layout';
import SimpleSlider from './components/Slider';
//import * as serviceWorker from './serviceWorker';
import HeaderDividing from './components/Header';
import AboutBlock from './components/About';
import GalleryGrid from './components/Gallery';
//import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";


ReactDOM.render(
  <Layout>
    <HeaderDividing />
    <SimpleSlider />
    <AboutBlock />
    <GalleryGrid />
  </Layout>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
