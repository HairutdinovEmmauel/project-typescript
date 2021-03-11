import styled from 'styled-components';

const ContentContact = styled.div`
    max-width: 1200px;
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    flex-grow: 1;
`;

const Wrapper = styled.div`
    max-width: 900px;
    flex-grow: 1;
`;

const Title = styled.h1`
    color: #065da7;
    text-align: center;
`;

const TitleSection = styled.h2`
    color: #065da7;
    text-align: center;
`;

const SectionContacts = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Contact = styled.div`
    max-width: 350px;
    flex: 1 1 200px;
`;

const NameDepartment = styled.p`
    margin: 30px 0;
    color: #065da7;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
`;

const NumberPhone = styled.p`
   margin: 30px 0;
   font-size: 18px;
   text-align: center;
`;

const ScheduleWork = styled.div`
    max-width: 400px;
    flex: 1 1 200px;
`;

const TitleItem = styled.h3`
    color: #065da7;
    text-align: center;
`;

const ItemScheduleWork = styled.p`
    display: flex;
    justify-content: space-around;
    margin: 0;
`;

const DaysWeek = styled.p`
   font-size: 18px;
   margin-right: 5px; 
`;

const WorkTime = styled.p`
   font-size: 18px;
`;

export {
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
}