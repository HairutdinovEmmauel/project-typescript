import React from 'react';

import {
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
} from './styled-components-auth-page';

const AuthorizationPage: React.FC = () => {
    return (
        <ContentAuthorization>
            <FormAuthorization>
                <TitleForm>Authorization</TitleForm>
                <Form>
                    <FormLabel>Please enter email</FormLabel>
                    <FormEmail placeholder="email" />

                    <FormLabel>Please enter password</FormLabel>
                    <FormPassword placeholder="password" />

                    <SelectOther>
                        <div>
                            <RememberMe type="checkbox" />
                            <FormLabel>Remember me</FormLabel>
                        </div>
                        <RemindPassword>Ramind password</RemindPassword>
                    </SelectOther>
                    <FormActions>
                        <ButtonLogin>Login</ButtonLogin>
                        <ButtonRegister>Register</ButtonRegister>
                    </FormActions>
                </Form>
                <SelectUserAccount>

                </SelectUserAccount>    
            </FormAuthorization>
        </ContentAuthorization>
    );
}

export default AuthorizationPage;