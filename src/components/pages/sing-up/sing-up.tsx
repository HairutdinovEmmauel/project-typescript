import React, { useState } from 'react';
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
} from '../../../constants';

// Utils
import {
    editForm,
} from '../../../utils/form-helpers'

// Actions
import { requestRegister } from '../../../actions';

type MapStatePropsType = Pick<AuthStateI, 'loading' | 'error'>

interface MapDispatchPropsI {
    requestRegister: (formRegister: FormRegisterI) => void
}

type SingUpPropsType = MapStatePropsType & MapDispatchPropsI;

const SingUp: React.FC<SingUpPropsType> = ({ loading, error, requestRegister }) => {

    const [ formRegister, setFormRegister ] = useState({ ...INITIAL_LOCAL_STATE.INITIAL_FORM_REGISTER });

    const sendForm = (event: React.SyntheticEvent<EventTarget>): void => {
        event.preventDefault();
    }
    
    const sendFormRegister = (): void => {
        requestRegister({ ...formRegister });
    }

    const onChangeForm = (event:  React.SyntheticEvent<HTMLInputElement>): void => {
        const editedForm = editForm(formRegister, event);

        setFormRegister({ ...editedForm });
    }

    return (
        <ContentSingUp>
            <FormSingUp>
                <TitleForm>Authorization</TitleForm>
                <Section>
                    <Form onSubmit={sendForm} >
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
                            <ButtonRegister onClick={sendFormRegister} >Register</ButtonRegister>
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
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootStateType, unknown, AuthActionTypes>) => {
    return {
        requestRegister: (formRegister: FormRegisterI) => dispatch( requestRegister(formRegister) ),
    }
}

export default connect<MapStatePropsType, MapDispatchPropsI, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(SingUp);