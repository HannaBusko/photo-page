import React, { Fragment } from 'react';

import SimpleSlider from '../components/Slider';
import AboutBlock from '../components/About';
import ContactBlock from '../components/Contact';

const HomePage = () => (
    <Fragment>
        <SimpleSlider />
        <AboutBlock />
    </Fragment>
);

const ContactPage = () => (
    <Fragment>
        <ContactBlock />
    </Fragment>
);

export { HomePage, ContactPage };