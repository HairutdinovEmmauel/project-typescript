import React from 'react';

// Styled components
import {
    ContentAbout,
    Title,
    TitleTypography,
    Typography,
    Logotype,
    Statistics,
    ItemStatistic,
    NumberStatistic,
    NameStatistic,
} from './styled-components-about-page'; 

const AboutPage: React.FC = () => {
    return (
        <ContentAbout>
            <Title>About us</Title>

            <TitleTypography>Маленькі мрії та грандіозні плани</TitleTypography>

            <Typography>
                MyStore − найбільший онлайн-ритейлер у країні. Уже протягом 14 років ми втілюємо маленькі мрії та грандіозні плани мільйонів людей. У нас можна знайти буквально все. 
                Ми продаємо за справедливою ціною та надаємо гарантію, бо вважаємо, що онлайн-шопінг має бути максимально зручним і безпечним. І щоразу, коли хтось натискає «Купити», 
                ми розуміємо, що робимо потрібну справу.
            </Typography>

            <Logotype />

            <TitleTypography>Наша мета − бути корисними</TitleTypography>

            <Typography>
                Ми віримо, що речі існують для того, щоб робити життя простішим, приємнішим і добрішим. Тому й пошук тієї самої речі повинен бути швидким, зручним і приємним. 
                Ми не просто продаємо побутову техніку, електроніку, прикраси або вино. Ми допомагаємо знайти саме те, що треба, в одному місці та без зайвих хвилювань, 
                щоб ви не витрачали життя на пошуки, а просто жили щасливо. Rozetka − це універсальна відповідь на будь-який запит, початок пошуку та його кінцева зупинка, 
                справжній помічник. Ми назавжди позбавляємо своїх покупців від неприємних компромісів, виконуємо бажання і даємо змогу мріяти сміливіше. 
                Завдяки розумному пошуку та чесному сервісу ми робимо життя наших клієнтів трішки кращим просто зараз.
            </Typography>

            <TitleTypography>Щастя починається з простих речей</TitleTypography>

            <Typography>
                І ми допомагаємо ці речі знайти: закоханим підказуємо, чим здивувати один одного; спортивних мотивуємо ніколи не здаватись і швидше прогресувати; хазяйновитим даємо 
                можливість створити справжній затишок. Ми хочемо, щоб ви знали, що шукаєте, і могли аргументувати свій вибір. Для цього ми знімаємо відеоогляди, пишемо статті та 
                відстежуємо новинки.
            </Typography>

            <TitleTypography>Щоб мрії здійснювалися легко</TitleTypography>

            <Typography>
                Ми відкриваємо величезні офлайн-магазини, щоб ви могли прийти, потримати в руках і протестувати вподобаний продукт. Ми хочемо, щоб у нас був найкращий у світі сервіс, 
                тому навчаємо співробітників не тільки технічній частині справи, а й роботі з клієнтом. А якщо вам, навпаки, хочеться якомога менше спілкуватися з людьми − для цього у 
                нас є поштомати: зробили замовлення, вибрали поштомат, забрали дорогою додому чи на роботу. Все.
            </Typography>

            <Statistics>
                <ItemStatistic>
                    <NumberStatistic>
                        3.9 млн
                    </NumberStatistic>
                    <NameStatistic>
                        доступних до покупки товарів
                    </NameStatistic>
                </ItemStatistic>
                <ItemStatistic>
                    <NumberStatistic>
                        789 млн
                    </NumberStatistic>
                    <NameStatistic>
                        користувачів відвідали MyStore в 2018 році
                    </NameStatistic>
                </ItemStatistic>
                <ItemStatistic>
                    <NumberStatistic>
                        81%
                    </NumberStatistic>
                    <NameStatistic>
                        наших покупців повертаються
                    </NameStatistic>
                </ItemStatistic>
                <ItemStatistic>
                    <NumberStatistic>
                        2.5 млн
                    </NumberStatistic>
                    <NameStatistic>
                        відвідувачів в день
                    </NameStatistic>
                </ItemStatistic>
            </Statistics>

        </ContentAbout>
    )
}

export default AboutPage;