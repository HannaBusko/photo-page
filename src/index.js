import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.css';

import Layout from './components/Layout';
import { HomePage, ContactPage } from '../src/pages/index';
import { NatureGallery, PartyGallery } from '../src/pages/gallery';
import HeaderDividing from './components/Header';
import Social from './components/Social';
import ScrollToTopBtn from "./components/ScrollToTop";


const pageTransitionsDuration = {
  enter: 500,
  exit: 300
};

const RoutesWrapper = ({ location }) => (
  <Switch location={location}>
    <Route exact path='/' render={() => <HomePage />} />
    <Route path='/party' render={() => <PartyGallery />} />
    <Route path='/nature' render={() => <NatureGallery />} />
    <Route path='/contact' render={() => <ContactPage />} />
    <Redirect to='/' />
  </Switch>
);

class App extends React.Component {

  render() {
    const { location } = this.props;

    const splitPathname = location.pathname.split("/");
    const currentKey = splitPathname[splitPathname.length - 1] || "/";

    return (
      <div>
        <TransitionGroup component="main">
          <CSSTransition
            key={currentKey}
            timeout={pageTransitionsDuration}
            classNames="example"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <RoutesWrapper
              location={location}
            />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <HashRouter>
    <Layout>
      <HeaderDividing />
      <AppWithRouter />
      <Social />
      <ScrollToTopBtn />
    </Layout>

  </HashRouter>,
  document.getElementById("root")
);

