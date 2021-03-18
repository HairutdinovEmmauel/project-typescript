import styled from 'styled-components';

import {
    IMAGES_LOGOTYPE,
} from '../../constants'

const ContentFooter = styled.footer`
    width: 100%;
    margin-top: 60px;
    border-top: 3px solid #065da7;
    border-bottom: 3px solid #065da7;
`;

const TopSection = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
`;

const Logotype = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    background-image: url('${IMAGES_LOGOTYPE.LOGOTYPE_BOX}');
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 72px;
`;

const SocialMessager = styled.div`
    max-width: 200px;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    flex: 1 1 200px;
`;

const TitleSocialMessager = styled.h2`
    color: #065da7;
    margin: 0;
    margin-top: 10px;
`;

const Messager = styled.img`
    display: block;
    width: 30px;
    height: 30px;
`;

const Contact = styled.div`
    max-width: 200px; 
    flex: 1 1 250px;
`;

const TitleContact = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #065da7;
`;

const PhoneNumber = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #065da7;
`;

const ContentSection = styled.div`
    width: 100%;
`;

const HelperSection = styled.div`

`;

const TitleHelper = styled.div`

`;

const ItemHelper = styled.div`

`;

const BottomSection = styled.div`
    width: 100%;
`;

const Typography = styled.p`

`;

export {
    ContentFooter,

    TopSection,
    Logotype,
    SocialMessager,
    TitleSocialMessager,
    Messager,
    Contact,
    TitleContact,
    PhoneNumber,

    ContentSection,
    HelperSection,
    TitleHelper,
    ItemHelper,

    BottomSection,
    Typography,
}