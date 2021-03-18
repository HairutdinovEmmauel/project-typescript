import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link }from 'react-router-dom';

// Styled components
import {
    ContentSingIn,
    FormSingIn,

    TitleForm,
    Section,
    Form,
    RenderError,
    FormLabel,
    FormInput,

    SelectOther,
    RememberMe,
    RemindPassword,

    FormActions,
    ButtonLogin,
    LinkRegister,

    SelectUserAccount,
} from './styled-components-sing-in';

// Types
import { FormLoginI } from '../../../types/constants/initial-local-state';
import { RootStateType } from '../../../reducer';
import { ThunkDispatch } from 'redux-thunk';
import { AuthStateI, LoginActionTypes } from '../../../types/reducers/auth';

// Utils
import {
    editForm,
} from '../../../utils';

// Constants
import { 
    INITIAL_LOCAL_STATE, 
    FORM_NAME_KEYS,
    PAGE_PATH,
} from '../../../constants';

// Actions
import { requestLogin } from '../../../actions';

type MapStatePropsType = Pick<AuthStateI, 'loading' | 'error'>;

interface MapDispatchPropsI {
    requestLogin: (formLogin: FormLoginI ) => void,
}

type SingInPropsType = MapStatePropsType & MapDispatchPropsI;

const SingIn: React.FC<SingInPropsType> = ({ loading, error, requestLogin }) => {

    const [ formLogin, setFormLogin ] = useState({ ...INITIAL_LOCAL_STATE.INITIAL_FORM_LOGIN });

    const sendFormLogin = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();

        requestLogin({ ...formLogin });
    }

    const onChangeFormLogin = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const editedForm = editForm<FormLoginI>(formLogin, event);

        setFormLogin({ ...editedForm });
    }

    return (
        <ContentSingIn>
            <FormSingIn>
                <TitleForm>Sing in</TitleForm>
                <Section>
                    <Form onSubmit={sendFormLogin} >

                        <RenderError>{error}</RenderError>

                        <FormLabel>Please enter your email</FormLabel>
                        <FormInput 
                            type="email" 
                            placeholder="email"
                            name={FORM_NAME_KEYS.FORM_KEYS.email} 
                            value={formLogin.email} 
                            onChange={onChangeFormLogin} />

                        <FormLabel>Please enter your password</FormLabel>
                        <FormInput 
                            type="password" 
                            placeholder="password" 
                            name={FORM_NAME_KEYS.FORM_KEYS.password}
                            value={formLogin.password} 
                            onChange={onChangeFormLogin} />

                        <SelectOther>
                            <div>
                                <RememberMe type="checkbox" />
                                <FormLabel>Remember me</FormLabel>
                            </div>
                            <RemindPassword>Ramind password</RemindPassword>
                        </SelectOther>
                        <FormActions>
                            <ButtonLogin type="submit" disabled={loading} >Login</ButtonLogin>
                            <Link to={PAGE_PATH.SING_UP} >
                                <LinkRegister>
                                    Register
                                </LinkRegister>
                            </Link>
                        </FormActions>
                    </Form>
                    <SelectUserAccount>

                    </SelectUserAccount>
                </Section>
                
                
            </FormSingIn>
        </ContentSingIn>
    )
}

const mapStateToProps = ({ auth }: RootStateType) => {
    return {
        loading: auth.loading,
        error: auth.error,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootStateType, unknown, LoginActionTypes>) => {
    return {
        requestLogin: (formLogin: FormLoginI) => dispatch( requestLogin(formLogin) ),
    }
}

export default connect<{}, MapDispatchPropsI, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(SingIn);