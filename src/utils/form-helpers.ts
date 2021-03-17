import React from 'react';
import { FormRegisterI, FormVerificationI } from '../types/constants/initial-local-state'

export const editFormRegister = (form: FormRegisterI, event: React.SyntheticEvent<HTMLInputElement>): FormRegisterI => {
    return {
        ...form,
        [event.currentTarget.name]: event.currentTarget.value,
    };
}

export const editFormVerification = (form: FormVerificationI, event: React.SyntheticEvent<HTMLInputElement>): FormVerificationI => {
    return {
        ...form,
        [event.currentTarget.name]: event.currentTarget.value,
    };
}

export function editForm<FormType> (form: FormType, event: React.SyntheticEvent<HTMLInputElement>): FormType {
    return {
        ...form,
        [event.currentTarget.name]: event.currentTarget.value,
    };
}