import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Customer components
import AppHeader from '../app-header';
import SideBar from '../pages/side-bar';
import HomePage from '../pages/home-page';
import AboutPage from '../pages/about-page';
import ContactPage from '../pages/contact-page';
import AppFooter from '../app-footer';
import SingUp from '../pages/sing-up';
import VerificationPage from '../pages/verification-page';
// import SingUp from '../pages/sing-up';

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
      { Auth && (
        <>
          <AppHeader />

          <ContentApp>
            <Wrapper>
              <SideBar />

              <Switch>
                <Route path={PAGE_PATH.HOME_PAGE} component={HomePage} exact />

                <Route path={PAGE_PATH.ABOUT_PAGE} component={AboutPage} />
                
                <Route path={PAGE_PATH.CONTACT_PAGE} component={ContactPage} />

                <Route path={PAGE_PATH.SING_IN} component={SingUp} />

                <Route path={PAGE_PATH.VERIFICATION_PAGE} component={VerificationPage} />

                <Redirect to={PAGE_PATH.HOME_PAGE} />
              </Switch>
            </Wrapper>
          </ContentApp>
          
          <AppFooter />
        </>
      ) }
      
    </div>
  )
}

export default App;
