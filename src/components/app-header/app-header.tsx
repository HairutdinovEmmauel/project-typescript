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
                <Link to={'/'} >
                    <ItemMenu>Home</ItemMenu>
                </Link>
                <Link to={'/'} >
                    <ItemMenu>About</ItemMenu>
                </Link>
                <Link to={'/'} >
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