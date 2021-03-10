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
    cursor: pointer;
`;

export {
    AppBar,
    AppBarLogo,
    Title,
    MenuNavigation,
    ItemMenu,
    IconButton,
}