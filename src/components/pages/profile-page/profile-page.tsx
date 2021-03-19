import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// Styled components
import {
    ContentProfilePage,
    TitleForm,
    Section,
    Form,
    RenderError,
    WarningMessage,
    FormLabel,
    FormInput,
    
    ButtonEditProfile,
} from './styled-components-profile-page';

// Types
import { 
    AuthStateI, 
    EditProfileActionType
} from '../../../types/reducers/auth';
import { FormProfileI } from '../../../types/constants/initial-local-state'
import { RootStateType } from '../../../reducer';
import { ThunkDispatch } from 'redux-thunk';

// Constants
import { 
    INITIAL_LOCAL_STATE,
    FORM_NAME_KEYS,
} from '../../../constants';

// Utils
import { editForm } from '../../../utils';

// Actions 
import {
    requestSendMessageMailCode,
    requestEditedProfile,
} from '../../../actions';

type MapStatePropsType = Pick<AuthStateI, 'user' | 'isSendCodeEditProfile'>;

interface MapDispatchPropsI {
    requestSendMessageMailCode: () => void,
    requestEditedProfile: (formProfile: FormProfileI) => void,
}
 
type ProfilePagePropsType = MapStatePropsType & MapDispatchPropsI;

const ProfilePage: React.FC<ProfilePagePropsType> = ({ user, isSendCodeEditProfile, requestSendMessageMailCode, requestEditedProfile }) => {

    const [ formProfile, setFormProfile ] = useState({ ...INITIAL_LOCAL_STATE.INITIAL_FORM_PROFILE });
    const [ isEditProfile, setIsEditProfile ] = useState(true);

    useEffect(() => {
        setFormProfile({ 
            ...user,
            password: formProfile.password,
            repeatPassword: formProfile.repeatPassword,
            verificationCode: formProfile.verificationCode,
        })
    }, []);

    const editFormProfile = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();

        if(!isEditProfile) {
            requestEditedProfile({ ...formProfile });
        }

        requestSendMessageMailCode();

        setIsEditProfile(false);
    }

    const onChangeFormProfile = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const editedForm = editForm<FormProfileI>(formProfile, event);

        setFormProfile({ ...editedForm });
    }

    return (
        <ContentProfilePage>
            <Section>
                <TitleForm>Profile</TitleForm>
                <Form onSubmit={editFormProfile}  >

                    <RenderError></RenderError>  
                    { isSendCodeEditProfile ? (
                        <WarningMessage>To edit your profile, enter the verification code that came to your email</WarningMessage>
                    ) : null }
                    

                    <FormLabel>Name</FormLabel>
                    <FormInput 
                        type='text'
                        placeholder="name"
                        name={FORM_NAME_KEYS.FORM_KEYS.name}
                        value={formProfile.name}
                        onChange={onChangeFormProfile}
                        disabled={isEditProfile}
                    />

                    <FormLabel>Surname</FormLabel>
                    <FormInput 
                        type="text"
                        placeholder="surname"
                        name={FORM_NAME_KEYS.FORM_KEYS.surname}
                        value={formProfile.surname}
                        onChange={onChangeFormProfile}
                        disabled={isEditProfile}
                    />

                    <FormLabel>Telphone</FormLabel>
                    <FormInput 
                        type="telphone"
                        placeholder="telphone" 
                        name={FORM_NAME_KEYS.FORM_KEYS.telphone}
                        value={formProfile.telphone} 
                        onChange={onChangeFormProfile}
                        disabled={isEditProfile}
                    />

                    <FormLabel>Email</FormLabel>
                    <FormInput 
                        type="email"
                        placeholder="email"
                        name={FORM_NAME_KEYS.FORM_KEYS.email}
                        value={formProfile.email}
                        onChange={onChangeFormProfile}
                        disabled={isEditProfile}
                    />

                    <FormLabel>New password</FormLabel>
                    <FormInput 
                        type="password"
                        min="6"
                        placeholder="password"
                        name={FORM_NAME_KEYS.FORM_KEYS.password}
                        value={formProfile.password}
                        onChange={onChangeFormProfile}
                        disabled={isEditProfile}
                    />

                    <FormLabel>Repeat new password</FormLabel>
                    <FormInput 
                        type="password"
                        min="6"
                        placeholder="password"
                        name={FORM_NAME_KEYS.FORM_KEYS.repeatPassword}
                        value={formProfile.repeatPassword}
                        onChange={onChangeFormProfile}
                        disabled={isEditProfile}
                    />

                    { !isEditProfile ? (
                        <>
                            <FormLabel>Verification Code</FormLabel>
                            <FormInput 
                                type="number"
                                min="6"
                                max='6'
                                placeholder="123456"
                                name={FORM_NAME_KEYS.FORM_KEYS.verificationCode}
                                value={formProfile.verificationCode}
                                onChange={onChangeFormProfile}
                                disabled={isEditProfile}
                            />
                        </>
                    ): null }                    
                
                    <div>
                        { !isEditProfile ? (
                            <ButtonEditProfile type="submit" >Send Edited Profile</ButtonEditProfile>
                        ) : (
                            <ButtonEditProfile type="submit" >Edit Profile</ButtonEditProfile>
                        ) }            
                    </div>
                </Form>
            </Section>
        </ContentProfilePage>
    )
}

const mapStateToProps = ({ auth }: RootStateType) => {
    return {
        user: auth.user,
        isSendCodeEditProfile: auth.isSendCodeEditProfile,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootStateType, unknown, EditProfileActionType>) => {
    return {
        requestSendMessageMailCode: () => dispatch( requestSendMessageMailCode() ),
        requestEditedProfile: (formProfile: FormProfileI) => dispatch( requestEditedProfile(formProfile) )
    }
}

export default connect<MapStatePropsType, MapDispatchPropsI, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(ProfilePage);