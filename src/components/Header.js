import React, { Component } from 'react';
import { Image, Menu } from 'semantic-ui-react';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

export default class HeaderDividing extends Component {
  state = { activeItem: window.location.hash.substr(1)} 

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (<header id="header">
      <Image centered size='large' src={logo} alt="Alfredo Ramírez " />
      <h1> Party photographer in Mexico</h1>
      <Menu className="main-menu" widths={5} secondary>
        <Menu.Item
          as={Link} to='/'
          name='home'
          active={activeItem === '/'|| activeItem === 'home' }
          onClick={this.handleItemClick} />
        <Menu.Item
          as={Link} to='/party'
          name='party'
          active={activeItem === '/party'||  activeItem === 'party'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link} to='/nature'
          name='nature'
          active={activeItem === '/nature'|| activeItem === 'nature'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        />
      </Menu>

    </header>

    )
  }
}


