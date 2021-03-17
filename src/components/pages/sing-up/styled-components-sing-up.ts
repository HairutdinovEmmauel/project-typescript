import styled from 'styled-components';

const ContentSingUp = styled.div`
    max-width: 1000px;
    display: flex;
    justify-content: center;
    flex-grow: 1;
`;

const FormSingUp = styled.div`
    max-width: 700px;
    margin-top: 30px;
    border-radius: 10px;
    background: #ebf6ff;
    flex-grow: 1;
`;

const TitleForm = styled.h2`
    border-bottom: 2px solid #1f5da7; 
    margin: 0;
    padding: 10px;
`;

const Section = styled.section`
    display: flex;
    margin: 20px;
    border-radius: 10px;
    background: #ebf6ff;
    flex-grow: 1;
`;

const Form = styled.form`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const FormLabel = styled.label`
    padding: 5px;   
`;

const FormInput = styled.input`
    display: block;
    height: 28px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #065da7;
    padding: 0 5px;
    text-align: start;
    margin-bottom: 20px;
    flex-grow: 1;

    &:focus {
        border: 1px solid #065da7;
    }
`;

const SelectOther = styled.div`
    display: flex;
    justify-content: space-around;
`;

const RememberMe = styled.input`
    margin: 5px;
`;

const RemindPassword = styled.span`
    display: block;
    padding: 5px;
    color: #065da7;

    &:hover {
        color: #ea4949;
        text-decoration: underline;
    }
`;

const FormActions = styled.div`

`;

const ButtonLogin = styled.button`
    width: 100%;
    display: block;
    padding: 5px;
    margin-bottom: 20px; 
    border-radius: 5px;
    border: 1px solid #065da7;
    background: #065da7;
    font-size: 18px;
    text-align: center;
    color: #ffffff;
`;

const ButtonRegister = styled.button`
    width: 100%;
    display: block;
    padding: 5px;
    margin-bottom: 20px; 
    border-radius: 5px;
    border: 1px solid #065da7;
    background: #065da7;
    font-size: 18px;
    text-align: center;
    color: #ffffff;
`;

const SelectUserAccount = styled.div`
    max-width: 360px;
    flex-grow: 1;
`;

export {
    ContentSingUp,
    FormSingUp,

    TitleForm,
    Section,
    Form,
    FormLabel,
    FormInput,

    SelectOther,
    RememberMe,
    RemindPassword,

    FormActions,
    ButtonLogin,
    ButtonRegister,

    SelectUserAccount,
}