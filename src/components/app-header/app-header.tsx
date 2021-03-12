import React, { useState, useRef, useEffect, } from 'react';
import { Link } from 'react-router-dom';

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

// icons svg
import {
    MenuIcon,
    AccountCircle,
} from '../../svg';

import {
    PAGE_PATH,
} from '../../constants';

const AppHeader: React.FC = () => {

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
                <Link to={PAGE_PATH.SING_IN} >
                    <ItemMenu>Sing in</ItemMenu>
                </Link>
                <Link to={PAGE_PATH.SING_UP} >
                    <ItemMenu>Sing up</ItemMenu>
                </Link>
                <IconButton onClick={openNavigationAccount} >
                    <AccountCircle />
                        {
                            openNavigation && (
                                <NavigationAccount ref={refContainer} >
                                    <NavigationPanel>
                                        <ItemNavigationPanel>
                                            Profile
                                        </ItemNavigationPanel>
                                        <ItemNavigationPanel>
                                            Your orders
                                        </ItemNavigationPanel>
                                        <ItemNavigationPanel>
                                            Sing out
                                        </ItemNavigationPanel>
                                    </NavigationPanel>
                                </NavigationAccount>
                            ) 
                        }
                </IconButton>
            </RightNavigationMenu>
        </AppBar>
    )
}

export default AppHeader;