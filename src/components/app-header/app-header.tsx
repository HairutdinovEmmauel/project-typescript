import React, { useState, useRef, useEffect, } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Typing
import { ThunkDispatch } from 'redux-thunk';
import { RootStateType } from '../../reducer';
import { 
    AuthActionTypes,
    AuthStateI as MapStatePropsI 
} from '../../types/reducers/auth';

// Styled components 
import {
    AppBar,
    AppBarLogo,
    Title,
    MenuNavigation,
    ItemMenu,
    RightNavigationMenu,
    IconButton,

    NavigationAccount,
    NavigationPanel,
    ItemNavigationPanel,
} from './styled-components-app-header';

// Icons svg
import {
    MenuIcon,
    AccountCircle,
} from '../../svg';

// Utils 


// Constats
import {
    PAGE_PATH,
} from '../../constants';

interface MapDispatchPropsI {

}

type AuthPropsType = MapStatePropsI & MapDispatchPropsI;

const AppHeader: React.FC<AuthPropsType> = ({ loading, user, isAdmin, isAuth, linkVerification, isSendCodeEditProfile, error }) => {

    const [ openNavigation, setopenNavigation ] = useState(false);
    const refContainer = useRef(null);

    const openNavigationAccount = (): void => {
        setopenNavigation(true)
    }

    const useOutsideAlerter = (ref: any): void => {
        useEffect(() => {
            const handleClickOutside = (event: Event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setopenNavigation(false);
                }
            }

            document.addEventListener("mousedown", handleClickOutside);

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideAlerter(refContainer);

    return (
        <AppBar>
            <AppBarLogo>
                <MenuIcon />
            </AppBarLogo>
            <Title>
                MyStore
            </Title>
            <MenuNavigation>
                <Link to={PAGE_PATH.HOME_PAGE} >
                    <ItemMenu>Home</ItemMenu>
                </Link>
                <Link to={PAGE_PATH.ABOUT_PAGE} >
                    <ItemMenu>About</ItemMenu>
                </Link>
                <Link to={PAGE_PATH.CONTACT_PAGE} >
                    <ItemMenu>Contact</ItemMenu>
                </Link>
            </MenuNavigation>
            <RightNavigationMenu>
                {
                    isAuth ? (
                        <IconButton onClick={openNavigationAccount} >
                            <AccountCircle />
                                {
                                    openNavigation && (
                                        <NavigationAccount ref={refContainer} >
                                            <NavigationPanel>
                                                <Link to={PAGE_PATH.PROFILE_PAGE}>
                                                    <ItemNavigationPanel>
                                                        Profile
                                                    </ItemNavigationPanel>
                                                </Link>
                                                <Link to={PAGE_PATH.HOME_PAGE} >
                                                    <ItemNavigationPanel>
                                                        Your orders
                                                    </ItemNavigationPanel>
                                                </Link>
                                                <Link to={PAGE_PATH.HOME_PAGE} >
                                                    <ItemNavigationPanel>
                                                        Sing out
                                                    </ItemNavigationPanel>
                                                </Link>
                                            </NavigationPanel>
                                        </NavigationAccount>
                                    ) 
                                }
                        </IconButton>
                    ) : (
                        <Link to={PAGE_PATH.SING_IN} >
                            <IconButton>
                                <AccountCircle />
                            </IconButton>
                        </Link>
                    )
                }
               
            </RightNavigationMenu>
        </AppBar>
    )
}

const mapStateToProps = ({ auth }: RootStateType) => {
    return {
        loading: auth.loading,
        user: auth.user,
        isAdmin: auth.isAdmin,
        isAuth: auth.isAuth,
        linkVerification: auth.linkVerification,
        isSendCodeEditProfile: auth.isSendCodeEditProfile,
        error: auth.error,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootStateType, unknown, AuthActionTypes>) => {
    return {

    }
}

export default connect<MapStatePropsI, MapDispatchPropsI, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(AppHeader);