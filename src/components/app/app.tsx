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

// Added folder actions with file index.ts where in functions actions and file request-auth.ts with actions requestRegister and requestLogin. Modified file app-header.tsx with component AppHeader. To component AppHeader added types and connected for store. Modified file auth-page.tsx where in component SingIn

export default App;
