import React from 'react';

import GalleryGrid from '../components/Gallery';

const img_nature = [
    {
        src: require('../assets/images/nature/nature1.jpg'),
    },
    {
        src: require('../assets/images/nature/nature2.jpg'),
    },
    {
        src: require('../assets/images/nature/nature3.jpg'),
    },
    {
        src: require('../assets/images/nature/nature4.jpg'),
    },

    {
        src: require('../assets/images/nature/nature5.jpg'),

    },
];


const img_party = [
    {
        src: require('../assets/images/party/party2.jpg'),
    },
     {
        src: require('../assets/images/party/party1.jpg'),
    },
   
];

const NatureGallery = () => (
    <GalleryGrid images={img_nature} />
);
const PartyGallery = () => (
    <GalleryGrid images={img_party} />
);

export {NatureGallery,PartyGallery };

