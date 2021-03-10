import styled from 'styled-components';

const ContentAbout = styled.div`
    max-width: 1170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;

const Title = styled.h1`
    text-align: center;
    color: #065da7;
`;

const Typography = styled.p`
    font-size: 16px;
`;

const TitleTypography = styled.h3`
    color: #065da7;
`

const Logotype = styled.div`
    width: 300px;
    height: 300px;
    background-image: url('http://www.pt-mkp.com/images/product_icon.png?crc=107442653');
    background-repeat: no-repeat;
    background-size: cover;
`;

const Statistics = styled.ul`
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    flex: 1 1 200px;
`;

const ItemStatistic = styled.li`
    width: 50%;
    margin: 10px;
    flex: 1 1 300px;
`;

const NumberStatistic = styled.span`
    display: block;
    font-size: 40px;
    font-weight: 900;
    color: #065da7;
    flex-grow: 1;
`;

const NameStatistic = styled.span`
    display: block;
    font-size: 18px;
    font-weight: 600;
    color: #768a9c;
    flex-grow: 1;
`;

export {
    ContentAbout,
    Title,
    TitleTypography,
    Typography,
    Logotype,
    Statistics,
    ItemStatistic,
    NumberStatistic,
    NameStatistic,
};