import React, { Component, Fragment } from 'react';
import { Grid, Dimmer, Image, Loader } from 'semantic-ui-react';
import Carousel, { Modal, ModalGateway } from 'react-images';


class GalleryGrid extends Component {

    state = {
        selectedIndex: 0,
        lightboxIsOpen: false,
        active: true
    };

    handleImageLoaded() {
        this.setState({ active: false });
    }

    toggleLightbox = (selectedIndex) => {
        this.setState(state => ({
            lightboxIsOpen: !state.lightboxIsOpen,
            selectedIndex,
        }));
    };

    render() {
        const { images } = this.props;
        const { selectedIndex, lightboxIsOpen, active } = this.state;

        return (
            <Fragment>

                <div className="gallery-block">
                    <Grid container doubling centered>

                        {images.map((val, i) => (
                            <Grid.Column mobile={16} tablet={10} computer={5} key={i} >
                                <Dimmer.Dimmable dimmed={active}>
                                    <Dimmer active={active} inverted>
                                        <Loader>Loading</Loader>
                                    </Dimmer>
                                    <Image as='img' src={val.src} key={i} className="gallery-image" onLoad={this.handleImageLoaded.bind(this)}
                                        onClick={() => this.toggleLightbox(i)} />
                                </Dimmer.Dimmable>
                            </Grid.Column>
                        ))}
                    </Grid>
                </div>

                <ModalGateway >
                    {lightboxIsOpen ? (
                        <Modal onClose={this.toggleLightbox}>
                            <Carousel
                                currentIndex={selectedIndex}
                                views={images}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </Fragment>
        );
    }
}

export default GalleryGrid;
