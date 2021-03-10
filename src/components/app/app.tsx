import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Customer components
import AppHeader from '../app-header';
import SideBar from '../pages/side-bar';
import HomePage from '../pages/home-page';
import AboutPage from '../pages/about-page';
import ContactPage from '../pages/contact-page';
import AppFooter from '../app-footer';

// Styled components 
import {
  ContentApp,
  Wrapper,
} from './styled-components-app';

import {
  PAGE_PATH
} from '../../constants';
 
const App = () => {

  const Auth: boolean = true;

  return (
    <div>
      { Auth ? (
        <>
          <AppHeader />

          <ContentApp>
            <Wrapper>
              <SideBar />

              <Switch>
                <Route path={PAGE_PATH.HOME_PAGE} component={HomePage} exact />

                <Route path={PAGE_PATH.ABOUT_PAGE} component={AboutPage} />
                
                <Route path={PAGE_PATH.CONTACT_PAGE} component={ContactPage} />
              </Switch>
            </Wrapper>
          </ContentApp>
          
          <AppFooter />
        </>
      ) : (
        <div>Not Authorization</div>
      ) }
      
    </div>
  )
}

export default App;
