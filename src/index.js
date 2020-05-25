import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.css';

import Layout from './components/Layout';
import HomePage from '../src/pages/index';
import {NatureGallery,PartyGallery } from '../src/pages/gallery';
import HeaderDividing from './components/Header';
import Social from './components/Social';

ReactDOM.render(
  <HashRouter>
    <Layout>
      <HeaderDividing />
      <TransitionGroup>
        <CSSTransition
          appear={true}
          classNames="example"
          timeout={{
            enter: 500,
            exit: 300,
          }}
        >
          <Switch>
            <Route exact path='/' render={() => <HomePage />} />
            <Route path='/party' render={() => <PartyGallery />} />
            <Route path='/nature' render={() => <NatureGallery />} />
            <Redirect to='/' />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Social />
    </Layout>
  </HashRouter>
  , document.getElementById('root')
);
// <Route path='/gallery' component={Gallery} />
 //       <Route exact path='/' component={HomePage} />