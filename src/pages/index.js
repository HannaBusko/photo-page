import React from 'react';

import SimpleSlider from '../components/Slider';
import AboutBlock from '../components/About';

class HomePage extends React.Component {
    
    render() {
        return (
            <div>
                <SimpleSlider />
                <AboutBlock />
            </div>
        );
    }
}

export default HomePage;