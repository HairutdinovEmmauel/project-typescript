import React from 'react';

export function editForm<FormType> (form: FormType, event: React.SyntheticEvent<HTMLInputElement>): FormType {
    return {
        ...form,
        [event.currentTarget.name]: event.currentTarget.value,
    };
}