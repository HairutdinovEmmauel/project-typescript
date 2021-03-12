import React from 'react';

import {
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
} from './styled-components-app-footer';

import {
    ARRAY_URL_SOCIAL_MESSAGER
} from '../../constants';

const AppFooter: React.FC = () => {
    return (
        <ContentFooter>
            <TopSection>
                <Logotype />
                
                <div>
                    <TitleSocialMessager>We in social messager</TitleSocialMessager>
                    <SocialMessager>
                        { ARRAY_URL_SOCIAL_MESSAGER.MESSAGERS.map(({ id, url }) => {
                            return (
                                <Messager key={id} src={url} />
                            )
                        }) }
                    </SocialMessager>
                </div>
                
                <Contact>
                    <TitleContact>Hot line</TitleContact>
                    <PhoneNumber>044 537 02 22</PhoneNumber>
                </Contact>
            </TopSection>
            <ContentSection>    
                <HelperSection>
                    <TitleHelper></TitleHelper>
                    <ItemHelper></ItemHelper>
                    <ItemHelper></ItemHelper>
                    <ItemHelper></ItemHelper>
                </HelperSection>
                <HelperSection>
                    <TitleHelper></TitleHelper>
                    <ItemHelper></ItemHelper>
                    <ItemHelper></ItemHelper>
                    <ItemHelper></ItemHelper>
                </HelperSection>
                <HelperSection>
                    <TitleHelper></TitleHelper>
                    <ItemHelper></ItemHelper>
                    <ItemHelper></ItemHelper>
                    <ItemHelper></ItemHelper>
                </HelperSection>
            </ContentSection>
            <BottomSection>
                <Typography></Typography>
            </BottomSection>
        </ContentFooter>
    )
}

export default AppFooter;