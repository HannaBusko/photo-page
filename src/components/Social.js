import React, { Component } from "react";
import { List, Icon } from "semantic-ui-react";

export default class Social extends Component {
    render() {
        return (
            <section className="social-block">
                <div>
                    <h2>Follow on social</h2>
                </div>
                <List horizontal className="social-list">
                    <List.Item>
                        <a href="https://www.facebook.com/profile.php?id=100010690507399" target="_blank" rel="noopener noreferrer">
                            <Icon name="facebook" size="huge" color="black" />
                        </a>
                    </List.Item>
                    <List.Item>
                        <a href="whatsapp://send?phone=+526121685469" target="_blank" title="whatsapp" rel="noopener noreferrer">
                            <Icon name="whatsapp" size="huge" color="black" />
                        </a>
                    </List.Item>
                    <List.Item>
                        <a href="https://www.instagram.com/glazvid/" target="_blank" rel="noopener noreferrer">
                            <Icon name="instagram" size="huge" color="black" />
                        </a>
                    </List.Item>
                    <List.Item>
                        <a href="https://vk.com/id333836844" target="_blank" rel="noopener noreferrer">
                            <Icon name="vk" size="huge" color="black" />
                        </a>
                    </List.Item>

                    <List.Item>
                        <a href="viber://chat?number=%2B526121685469" target="_blank" rel="noopener noreferrer">
                            <Icon name="viber" size="huge" color="black" />
                        </a>
                    </List.Item>
                    <List.Item>
                        <a href="tel:+526121685469" target="_blank" title="+526 121 685 469" rel="noopener noreferrer">
                            <Icon name="call" size="huge" color="black" />
                        </a>
                    </List.Item>
                </List>
            </section >
        );
    }
}