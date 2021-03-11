import React from 'react';

import {
    ContentContact,
    Wrapper,
    Title,
    TitleSection,
    SectionContacts,
    Contact,
    NameDepartment,
    NumberPhone,

    ScheduleWork,
    TitleItem,
    ItemScheduleWork,
    DaysWeek,
    WorkTime,
} from './styled-components-contact-page';

const ContactPage: React.FC = () => {
    return (
        <ContentContact>
            <Wrapper>
                <Title>
                    Контакти
                </Title>
                <TitleSection>Консультації та замовлення за телефонами</TitleSection>
                    <SectionContacts>
                        <Contact>
                            <NameDepartment>
                                MyStore
                            </NameDepartment>
                            <NumberPhone>
                                044 537 02 22
                            </NumberPhone>
                            <NumberPhone>
                                044 503 80 80
                            </NumberPhone>
                        </Contact>
                        <ScheduleWork>
                            <TitleItem>Графік роботи</TitleItem>
                            <ItemScheduleWork>
                                <DaysWeek>
                                    У будні
                                </DaysWeek>
                                <WorkTime>
                                    з 8:00 до 21:00
                                </WorkTime>
                            </ItemScheduleWork>
                            <ItemScheduleWork>
                                <DaysWeek>
                                    Субота
                                </DaysWeek>
                                <WorkTime>
                                    з 9:00 до 20:00
                                </WorkTime>
                            </ItemScheduleWork>
                            <ItemScheduleWork>
                                <DaysWeek>
                                    Неділя
                                </DaysWeek>
                                <WorkTime>
                                    з 10:00 до 19:00
                                </WorkTime>
                            </ItemScheduleWork>
                        </ScheduleWork>
                    </SectionContacts>
                    <SectionContacts>
                        <Contact>
                            <NameDepartment>
                                Інші продавці
                            </NameDepartment>
                            <NumberPhone>
                                044 537 02 22
                            </NumberPhone>
                        </Contact>
                        <ScheduleWork>
                            <TitleItem>Графік роботи</TitleItem>
                            <ItemScheduleWork>
                                <DaysWeek>
                                    У будні
                                </DaysWeek>
                                <WorkTime>
                                    з 08:00 до 19:00
                                </WorkTime>
                            </ItemScheduleWork>
                            <ItemScheduleWork>
                                <DaysWeek>
                                    Субота
                                </DaysWeek>
                                <WorkTime>
                                    з 09:00 до 18:00
                                </WorkTime>
                            </ItemScheduleWork>
                            <ItemScheduleWork>
                                <DaysWeek>
                                    Неділя
                                </DaysWeek>
                                <WorkTime>
                                    з 09:00 до 18:00
                                </WorkTime>
                            </ItemScheduleWork>
                        </ScheduleWork>
                    </SectionContacts>
                </Wrapper>
        </ContentContact>
    )
}

export default ContactPage;