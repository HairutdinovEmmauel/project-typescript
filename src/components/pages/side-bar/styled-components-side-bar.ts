import styled from 'styled-components';

const ContentSideBar = styled.aside`
    max-width: 350px;
    padding-right: 10px;
    border-right: 1px solid #b7d4ec;
    flex: 1 1 200px;
`;

const NavigationCatalog = styled.section`
    min-width: 250px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #b7d4ec;
`;

const TitleSideBar= styled.h4`
    max-width: 200px;
    text-align: center;
    margin: 0;
    margin-top: 10px;
`;

const ItemCatalog = styled.p`
    max-width: 200px;
    padding: 10px;
    margin: 0;
    color: #065da7;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        font-weight: 900;
    }
`;

const FooterSideBar = styled.section`
    max-width: 200px;
    display: flex;
    flex-direction: column;
`;

const Message = styled.div`
    padding: 10px;
    border-bottom: 1px solid #b7d4ec;
`;

const TitleMessage = styled.h4`
    margin: 0;
    margin-top: 10px;
    text-align: center;
`;

const TypographyMessage = styled.p`
    font-size: 16px;
    color: #065da7;
    text-align: center;
`;

const ActionMessage = styled.div`
    margin: 0 auto;
`;

const Button = styled.button`
    background: #065da7;
    color: #fefefe;
    border: 1px solid #065da7;
    border-radius: 5px;
    padding: 5px;

    &:hover {
        background: #ea4949;
        border: 1px solid #ea4949;
    }
`;

const SocialMessager = styled.div`
    padding: 10px;
    border-bottom: 1px solid #b7d4ec;
`;

const TypographyImageIcon = styled.p`
    text-align: center;
    color: #065da7;
`;

const ImageIcon = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    margin: 2px;
`;

const Wrapper = styled.div`
    padding: 5px;
    border-bottom: 1px solid #b7d4ec;
`; 

const SectionsHelpers = styled.div`
    max-width: 200px; 
`;

const TitleSectionsHelpers = styled.h5`
    color: #065da7;
`;

const ContentSectionsHelpers = styled.div`
    
`;

const ItemSectionsHelpers = styled.p`
    font-size: 14px;
`;

export {
    ContentSideBar,

    TitleSideBar,
    NavigationCatalog,
    ItemCatalog,

    FooterSideBar,

    Message,
    TitleMessage,
    TypographyMessage,

    ActionMessage,
    Button,

    SocialMessager,
    TypographyImageIcon,
    ImageIcon,

    Wrapper,
    SectionsHelpers,
    TitleSectionsHelpers,
    ContentSectionsHelpers,
    ItemSectionsHelpers,
}