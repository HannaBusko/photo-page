import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import cover from '../assets/images/turtle.svg';

const GalleryGrid = () => (
    <div className="gallery">
        <Grid doubling columns={4}>
            <Grid.Column>
                <Image src={cover}
                    as='a'
                    size='medium'
                    href='http://google.com'
                    target='_blank' />
            </Grid.Column>
            <Grid.Column>
                <Image src={cover}
                    as='a'
                    size='medium'
                    href='http://google.com'
                    target='_blank' />
            </Grid.Column>
            <Grid.Column>
                <Image src={cover}
                    as='a'
                    size='medium'
                    href='http://google.com'
                    target='_blank' />
            </Grid.Column>
            <Grid.Column>
                <Image src={cover}
                    as='a'
                    size='medium'
                    href='http://google.com'
                    target='_blank' />
            </Grid.Column>
        </Grid>
    </div>
)

export default GalleryGrid;