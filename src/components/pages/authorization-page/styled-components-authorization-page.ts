import styled from 'styled-components';

const ContentAuthorization = styled.div`
    max-width: 1000px;
    display: flex;
    justify-content: center;
    flex-grow: 1;
`;

const FormAuthorization = styled.div`
    max-width: 700px;
    margin-top: 20px;
    border-radius: 10px;
    background: #ebf6ff;
    flex-grow: 1;
`;

const TitleForm = styled.h2`
    border-bottom: 2px solid #1f5da7; 
    margin: 0;
    padding: 10px;
`;

const Form = styled.div`
    max-width: 300px;
    padding: 20px;
`;

const FormLabel = styled.div`
    padding: 5px;   
`;

const FormEmail = styled.input`
    width: 100%;
    height: 28px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #065da7;
    padding: 0 5px;
    margin-bottom: 20px;

    &:focus {
        border: 1px solid #065da7;
    }
`;

const FormPassword = styled.input`
    width: 100%;
    height: 28px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #065da7;
    padding: 0 5px;
    margin-bottom: 20px;

    &:focus {
        border: 1px solid #065da7;
    }
`;

const SelectOther = styled.div`

`;

const RememberMe = styled.input`

`;

const RemindPassword = styled.div`

`;

const FormActions = styled.div`

`;

const ButtonLogin = styled.div`

`;

const ButtonRegister = styled.div`

`;

const SelectUserAccount = styled.div`

`;

export {
    ContentAuthorization,

    FormAuthorization,
    Form,

    TitleForm,
    FormLabel,
    FormEmail,
    FormPassword,

    SelectOther,
    RememberMe,
    RemindPassword,

    FormActions,
    ButtonLogin,
    ButtonRegister,

    SelectUserAccount,
}