import React, { Component } from 'react';
import { Image, Menu } from 'semantic-ui-react';
import logo from '../assets/images/logo.svg';

export default class HeaderDividing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (<header id="header">
      <Image centered size='large' src={logo} alt="Alfredo Ramírez " />
      <h1> Party photographer in Mexico</h1>
      <Menu className="main-menu"  widths={5} secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='party'
          active={activeItem === 'party'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='conference'
          active={activeItem === 'conference'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='interiors'
          active={activeItem === 'interiors'}
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='nature'
          active={activeItem === 'nature'}
          onClick={this.handleItemClick}
        />
      </Menu>

    </header>

    )
  }
}


