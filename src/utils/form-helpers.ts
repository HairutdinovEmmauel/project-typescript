import React from 'react';
import { FormRegisterI } from '../types/constants/initial-local-state'

export const editForm = (form: FormRegisterI, event: React.SyntheticEvent<HTMLInputElement>): FormRegisterI => {
    return {
        ...form,
        [event.currentTarget.name]: event.currentTarget.value,
    };
}