import React from 'react';
import { Link } from 'react-router-dom';

// Styled components 
import {
    AppBar,
    AppBarLogo,
    Title,
    MenuNavigation,
    ItemMenu,
    IconButton,
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
            <IconButton>
                <AccountCircle />
            </IconButton>
        </AppBar>
    )
}

export default AppHeader;