import styled from 'styled-components';

const ContentContact = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex: 1 1 200px;
`;

const Title = styled.h1`
    text-align: center;
    color: #065da7;
`;

const TitleSection = styled.h2`
    text-align: center;
    color: #065da7;
`;

const SectionContacts = styled.div`
    max-width: 1000px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Contact = styled.div`
    max-width: 400px;
    /* flex: 1 1 200; */
    flex-grow: 1;
`;

const NameDepartment = styled.p`
    margin: 0;
    padding: 15px;
    font-size: 20px;
    font-weight: 500px;
    color: #065da7;
`;

const NumberPhone = styled.p`
    font-size: 18px;
    margin: 0;
    padding: 15px;
`;

const ScheduleWork = styled.div`
    max-width: 400px;
    flex-grow: 1;
    /* flex: 1 1 200; */
`;

const TitleItem = styled.h3`
    margin: 10px;
    color: #065da7;
`;

const ItemScheduleWork = styled.div`
    display: flex;
`;

const DaysWeek = styled.p`
    max-width: 200px;
    margin: 0;
    padding: 10px;
    flex-grow: 1;
`;

const WorkTime = styled.p`
    max-width: 200px;
    margin: 0;
    padding: 10px;
    flex-grow: 1;
`;

export {
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
}