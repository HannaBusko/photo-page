import React, { Component,Fragment } from "react";
import { Form, TextArea, Button, Dimmer,Header,Icon } from 'semantic-ui-react';

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            showModal: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    };

    handleSubmit = event => {
        event.preventDefault();

        const templateId = 'template_bu0v392a';
        const service_id = "default_service";
        var template_params = {
            "from_name": this.state.name,
            "reply_to": this.state.email,
            "message_html": this.state.message
        }

        window.emailjs.send(
            service_id, templateId,
            template_params
        ).then(this.handleSuccess)
            .catch(error => alert(error));
    }


    handleSuccess = () => {
        this.setState({
            name: '',
            email: '',
            message: '',
            showModal: true,
        })
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }

    render() {
        return (
            <Fragment>
                <Form size="massive" className="contact-form" onSubmit={this.handleSubmit}>
                    <Form.Input
                        label='Name'
                        placeholder='Name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />
                    <Form.Input
                        label='Email'
                        placeholder='your_adress@gmail.com'
                        name='email'
                        required
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={TextArea}
                        label='Message'
                        placeholder='Tell me more...'
                        onChange={this.handleChange}
                        required
                        value={this.state.message}
                        name="message"
                    />
                    <Button type="submit" size='huge' className="contact-button" name="submit" >Send message</Button>
                </Form>

                <Dimmer active={this.state.showModal} onClickOutside={this.closeModal} page>
                    <Header as='h2' icon inverted>
                        <Icon name='heart' />
                        Your Message Has Been Sent!
                        <Header.Subheader>Click anywhere to close </Header.Subheader>
                </Header>
                </Dimmer>
            </Fragment>
        )
    }
}

const ContactBlock = () => (
    <section className="block">
        <div>
            <h2>Contact me...</h2>
            <p>For more information or booking details please contact me so we can discuss your project.</p>
            <ContactForm />
        </div>
        <div className="contact-portrait portrait"></div>
    </section>
);

export default ContactBlock;