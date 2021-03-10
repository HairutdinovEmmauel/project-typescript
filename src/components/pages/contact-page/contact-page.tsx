import React from 'react';

import {
    ContentContact,
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
        </ContentContact>
    )
}

export default ContactPage;