import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

// Styled Components
import {
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
    ButtonRegister,
    SelectUserAccount,
} from './styled-components-sing-up';

// Typing
import { ThunkDispatch } from 'redux-thunk';
import { RootStateType } from '../../../reducer';
import { AuthActionTypes, AuthStateI } from '../../../types/reducers/auth';
import { FormRegisterI } from '../../../types/constants/initial-local-state';

// Constats 
import { 
    INITIAL_LOCAL_STATE,
    FORM_NAME_KEYS,
    PAGE_PATH,
} from '../../../constants';

// Utils
import {
    editForm,
} from '../../../utils';

// Actions
import { requestRegister } from '../../../actions';

type MapStatePropsType = Pick<AuthStateI, 'loading' | 'error'| 'user'>

interface MapDispatchPropsI {
    requestRegister: (formRegister: FormRegisterI) => void
}

type SingUpPropsType = MapStatePropsType & MapDispatchPropsI;

const SingUp: React.FC<SingUpPropsType> = ({ loading, user, error, requestRegister }) => {

    const [ formRegister, setFormRegister ] = useState({ ...INITIAL_LOCAL_STATE.INITIAL_FORM_REGISTER });

    const history = useHistory();

    if(user.email) {
        history.push(PAGE_PATH.VERIFICATION_PAGE);
    }
    
    const sendFormRegister = (event: React.SyntheticEvent<EventTarget>): void => {
        event.preventDefault();

        requestRegister({ ...formRegister });
    }

    const onChangeForm = (event:  React.SyntheticEvent<HTMLInputElement>): void => {
        const editedForm = editForm<FormRegisterI>(formRegister, event);

        setFormRegister({ ...editedForm });
    }

    return (
        <ContentSingUp>
            <FormSingUp>
                <TitleForm>Authorization</TitleForm>
                <Section>
                    <Form onSubmit={sendFormRegister} >
                        <FormLabel>Please enter your name</FormLabel>
                        <FormInput 
                            type="text" 
                            placeholder="name"
                            value={formRegister.name}
                            name={FORM_NAME_KEYS.FORM_KEYS.name}
                            onChange={onChangeForm} />

                        <FormLabel>Please enter your surname</FormLabel>
                        <FormInput 
                            type="text" 
                            placeholder="surname"
                            value={formRegister.surname}
                            name={FORM_NAME_KEYS.FORM_KEYS.surname}
                            onChange={onChangeForm} />

                        <FormLabel>Please enter your telphone</FormLabel>
                        <FormInput 
                            type="telphone" 
                            placeholder="telphone"
                            value={formRegister.telphone}
                            name={FORM_NAME_KEYS.FORM_KEYS.telphone}
                            onChange={onChangeForm} />

                        <FormLabel>Please enter email</FormLabel>
                        <FormInput 
                            type="email" 
                            placeholder="email"
                            value={formRegister.email}
                            name={FORM_NAME_KEYS.FORM_KEYS.email}
                            onChange={onChangeForm} />

                        <FormLabel>Please enter password</FormLabel>
                        <FormInput 
                            type="password" 
                            placeholder="password"
                            value={formRegister.password}
                            name={FORM_NAME_KEYS.FORM_KEYS.password}
                            onChange={onChangeForm} />

                        <FormLabel>Please repeat password</FormLabel>
                        <FormInput 
                            type="password" 
                            placeholder="repeat password"
                            value={formRegister.repeatPassword}
                            name={FORM_NAME_KEYS.FORM_KEYS.repeatPassword}
                            onChange={onChangeForm} />

                        <SelectOther>
                            <div>
                                <RememberMe type="checkbox" />
                                <FormLabel>Remember me</FormLabel>
                            </div>
                            <RemindPassword>Ramind password</RemindPassword>
                        </SelectOther>
                        <FormActions>
                            <ButtonRegister>Register</ButtonRegister>
                        </FormActions>
                    </Form>
                    <SelectUserAccount>

                    </SelectUserAccount>
                </Section>
            </FormSingUp>
        </ContentSingUp>
    );
}

const mapStateToProps = ({ auth }: RootStateType) => {
    return {
        loading: auth.loading,
        error: auth.error,
        user: auth.user,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootStateType, unknown, AuthActionTypes>) => {
    return {
        requestRegister: (formRegister: FormRegisterI) => dispatch( requestRegister(formRegister) ),
    }
}

export default connect<MapStatePropsType, MapDispatchPropsI, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(SingUp);