import React from 'react';

import {
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
} from './styled-components-side-bar'

import {
    ARRAY_URL_SOCIAL_MESSAGER
} from '../../../constants'

const SideBar: React.FC = () => {
    return (
        <ContentSideBar>
            <Container>
                <NavigationCatalog>
                    <TitleSideBar>
                        Catalog
                    </TitleSideBar>
                    <ItemCatalog>Laptop and Computers</ItemCatalog>
                    <ItemCatalog>Phone and TV Electronics</ItemCatalog>
                    <ItemCatalog>Product for Game</ItemCatalog>
                    <ItemCatalog>House Electronics </ItemCatalog>
                </NavigationCatalog>
                <FooterSideBar>
                    <Message>
                        <TitleMessage>
                            Welcome to Store
                        </TitleMessage>
                        <TypographyMessage>
                            Sing in, so that geted recommend, personal bonus and discount
                        </TypographyMessage>
                        <ActionMessage>
                            <Button>
                                Sing in personal cabinet
                            </Button>
                        </ActionMessage>
                    </Message>
                    <SocialMessager>
                        <TypographyImageIcon>We in social messager</TypographyImageIcon>
                        <div>
                            { ARRAY_URL_SOCIAL_MESSAGER.MESSAGERS.map(({ id, url }) => {
                                return (
                                    <ImageIcon key={id} src={url} />
                                )
                            }) }
                        </div>
                    </SocialMessager>
                    <Wrapper>
                        <SectionsHelpers>
                            <TitleSectionsHelpers>Допомога</TitleSectionsHelpers>
                            <ContentSectionsHelpers>
                                <ItemSectionsHelpers>Доставка та оплата</ItemSectionsHelpers>
                                <ItemSectionsHelpers>Гарантія</ItemSectionsHelpers>
                                <ItemSectionsHelpers>Сервісні центри</ItemSectionsHelpers>
                            </ContentSectionsHelpers>
                        </SectionsHelpers>
                        <SectionsHelpers>
                            <TitleSectionsHelpers>Інформація про компанію</TitleSectionsHelpers>
                            <ContentSectionsHelpers>
                                <ItemSectionsHelpers>Про нас</ItemSectionsHelpers>
                                <ItemSectionsHelpers>Умови використання сайту</ItemSectionsHelpers>
                                <ItemSectionsHelpers>Контакти</ItemSectionsHelpers>
                            </ContentSectionsHelpers>
                        </SectionsHelpers>
                    </Wrapper>
                </FooterSideBar>
            </Container>
        </ContentSideBar>
    )
};

export default SideBar;