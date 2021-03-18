import styled from 'styled-components';

const AppBar = styled.header`
    position: fixed;
    width: 100%;
    display: flex;
    background: #065da7;
    z-index: 5;
`;

const AppBarLogo = styled.div`
    padding: 18px;
    text-align: center;
`;

const IconButton = styled.div`
    padding: 18px;
    text-align: center;
    cursor: pointer;
`;

const Title = styled.h3`
    color: #ffffff;
    padding: 5px;
`;

const MenuNavigation = styled.ul`
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    flex-grow: 1;
`;

const ItemMenu = styled.li`
    display: block;
    padding: 15px;
    padding-top: 25px;
    font-size: 18px;
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
`;

const RightNavigationMenu = styled.div`
    display: flex;
`;

const NavigationAccount = styled.div`
    position: absolute;
    max-width: 200px;
    background: #b7d4ec;
    color: #2f396b;
    border-radius: 5px;
    top: 55px;
    right: 5px;
    z-index: 5;
`;

const NavigationPanel = styled.ul`
    width: 100%;
    list-style-type: none;
    margin: 5px 0;
    padding: 0;
    cursor: pointer;
`;

const ItemNavigationPanel = styled.li`
    padding: 2px 10px;   
    text-align: start;

    &:hover {
        background: #ea4949;
    } 
`;

export {
    AppBar,
    AppBarLogo,
    Title,
    MenuNavigation,
    ItemMenu,
    RightNavigationMenu,
    IconButton,

    NavigationPanel,
    NavigationAccount,
    ItemNavigationPanel,
}