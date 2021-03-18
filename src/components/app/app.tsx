import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

// Customer components
import AppHeader from '../app-header';
import SideBar from '../pages/side-bar';
import HomePage from '../pages/home-page';
import AboutPage from '../pages/about-page';
import ContactPage from '../pages/contact-page';
import AppFooter from '../app-footer';
import SingIn from '../pages/sing-in';
import SingUp from '../pages/sing-up';
import VerificationPage from '../pages/verification-page';

// Styled components 
import {
  ContentApp,
  Wrapper,
} from './styled-components-app';

// Types 
import { RootStateType } from '../../reducer';
import { AuthStateI } from '../../types/reducers/auth';

import {
  PAGE_PATH
} from '../../constants';

type MapStatePropsType = Pick<AuthStateI, 'linkVerification' >

type AppPropsType = MapStatePropsType;
 
const App: React.FC<AppPropsType> = ({ linkVerification }) => {

  const history = useHistory();

  const PATH_VERIFICATION  = history.location.pathname.slice(0, 20) === linkVerification.slice(21) ? history.location.pathname : linkVerification;

  return (
    <div>
      { true && (
        <>
          <AppHeader />

          <ContentApp>
            <Wrapper>
              <SideBar />

              <Switch>
                <Route path={PAGE_PATH.HOME_PAGE} component={HomePage} exact />

                <Route path={PAGE_PATH.ABOUT_PAGE} component={AboutPage} />
                
                <Route path={PAGE_PATH.CONTACT_PAGE} component={ContactPage} />

                <Route path={PAGE_PATH.SING_IN} component={SingIn} />

                <Route path={PAGE_PATH.SING_UP} component={SingUp} />

                <Route path={PATH_VERIFICATION} component={VerificationPage} />

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

const mapStateToProps = ({ auth }: RootStateType) => {
  return {
    linkVerification: auth.linkVerification,
  }
}

export default connect(mapStateToProps, {})(App);
