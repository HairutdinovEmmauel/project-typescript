import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// Styled component
import {
    ContentVerificationPage,
    FormVerificationPage,
    TitleForm,
    Section,
    Form,
    FormLabel,
    FormInput,
    FormActions,
    ButtonRegister,
} from './styled-components-varification-page';

// Types
import { 
    UserI, 
    VerificationActionTypes, 
} from '../../../types/reducers/auth';
import { RootStateType } from '../../../reducer';
import { ThunkDispatch } from 'redux-thunk';

// Constants
import { 
    INITIAL_LOCAL_STATE,
    FORM_NAME_KEYS,
} from '../../../constants';

// Utils
import {
    editForm,
} from '../../../utils/'; 

// Actions
import {
    requestVerification
} from '../../../actions'
import { FormVerificationI } from '../../../types/constants/initial-local-state';

type MapStatePropsType = Pick<UserI, 'email'>

interface MapDispatchPropsI {
    requestVerification: (formVerification: FormVerificationI) => void,
}

type VerificationPropsType = MapStatePropsType & MapDispatchPropsI;

const VerificationPage: React.FC<VerificationPropsType> = ({ email, requestVerification }) => {

    const [ formVerification, setFormVerification ] = useState({ ...INITIAL_LOCAL_STATE.INITIAL_FORM_VERIFICATION });

    const sendFormVerification = (event: React.SyntheticEvent<EventTarget>): void => {
        event.preventDefault();

        requestVerification({ ...formVerification });
    }

    const onChangeForm = (event: React.SyntheticEvent<HTMLInputElement>): void => {
        const editedForm = editForm<FormVerificationI>(formVerification, event);
     
        setFormVerification({ ...editedForm });
    }
  
    return (
        <ContentVerificationPage>
            <FormVerificationPage>
                <TitleForm>Verification page</TitleForm>
                <Section>
                    <Form onSubmit={sendFormVerification} >
                        <FormLabel>Please enter your name</FormLabel>
                        <FormInput 
                            disabled 
                            value={email} />

                        <FormLabel>Please enter code verification</FormLabel>
                        <FormInput 
                            placeholder='123456'
                            value={formVerification.verificationCode}
                            name={FORM_NAME_KEYS.FORM_KEYS.verificationCode}
                            onChange={onChangeForm} />

                        <FormActions>
                            <ButtonRegister>Verification</ButtonRegister>
                        </FormActions>
                    </Form>
                </Section>
            </FormVerificationPage>
        </ContentVerificationPage>
    )
}

const mapStateToProps = ({ auth }: RootStateType) => {
    return {
        email: auth.user.email,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootStateType, unknown, VerificationActionTypes>) => {
    return {
        requestVerification: (formVerification: FormVerificationI) => dispatch( requestVerification(formVerification) ),
    }
}

export default connect<MapStatePropsType, MapDispatchPropsI, {}, RootStateType>(
    mapStateToProps, 
    mapDispatchToProps
)(VerificationPage);