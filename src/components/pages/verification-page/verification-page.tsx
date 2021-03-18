import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

// Styled component
import {
    ContentVerificationPage,
    FormVerificationPage,
    TitleForm,
    Section,
    Form,
    RenderError,
    FormLabel,
    FormInput,
    FormActions,
    ButtonRegister,
} from './styled-components-varification-page';

// Types
import { 
    AuthStateI,
    UserI, 
    VerificationActionTypes, 
} from '../../../types/reducers/auth';
import { 
    FormVerificationI 
} from '../../../types/constants/initial-local-state';
import { RootStateType } from '../../../reducer';
import { ThunkDispatch } from 'redux-thunk';

// Constants
import { 
    INITIAL_LOCAL_STATE,
    FORM_NAME_KEYS,
    PAGE_PATH,
} from '../../../constants';

// Utils
import {
    editForm,
} from '../../../utils/'; 

// Actions
import {
    requestVerification
} from '../../../actions'

type MapStatePropsType = Pick<UserI, 'email'> & Pick<AuthStateI, 'loading' | 'error' >

interface MapDispatchPropsI {
    requestVerification: (formVerification: FormVerificationI) => void,
}

type VerificationPropsType = MapStatePropsType & MapDispatchPropsI;

const VerificationPage: React.FC<VerificationPropsType> = ({ loading, email = '', error, requestVerification }) => {

    const [ formVerification, setFormVerification ] = useState({ ...INITIAL_LOCAL_STATE.INITIAL_FORM_VERIFICATION });

    const history = useHistory();

    useEffect(() => {

        const getEmail = history.location.pathname.slice(20);

        if(email === getEmail) {
            setFormVerification({ ...formVerification, email });
        }

        if(!getEmail) {
            history.push(PAGE_PATH.HOME_PAGE);
        }

        setFormVerification({ ...formVerification, email: getEmail }); 

    }, [])

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

                        <RenderError>{error}</RenderError>

                        <FormLabel>Please enter your name</FormLabel>
                        <FormInput 
                            disabled 
                            value={formVerification.email} />

                        <FormLabel>Please enter code verification</FormLabel>
                        <FormInput 
                            type="number"
                            placeholder="123456"
                            value={formVerification.verificationCode}
                            name={FORM_NAME_KEYS.FORM_KEYS.verificationCode}
                            onChange={onChangeForm} />

                        <FormActions>
                            <ButtonRegister type="submit" disabled={loading} >Verification</ButtonRegister>
                        </FormActions>
                    </Form>
                </Section>
            </FormVerificationPage>
        </ContentVerificationPage>
    )
}

const mapStateToProps = ({ auth }: RootStateType) => {
    return {
        loading: auth.loading,
        email: auth.user.email,
        error: auth.error,
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