import styled from 'styled-components';

const ContentSideBar = styled.aside`
    max-width: 350px;
    border-right: 1px solid #b7d4ec;
    flex: 1 1 200px;
`;

const Container = styled.div`
    min-width: 250px;
`;

const NavigationCatalog = styled.section`
    max-width: 250px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #b7d4ec;
    margin-left: auto;
`;

const TitleSideBar= styled.h4`
    width: 100%;
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
    max-width: 250px;
    margin-left: auto;
`;

const Message = styled.div`
    max-width: 250px;
    padding: 10px;
    border-bottom: 1px solid #b7d4ec;
    margin-left: auto;
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
    display: flex;
    justify-content: center;
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
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid #b7d4ec;
    align-items: center;
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
    Container,

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