import { FormRegisterI, FormVerificationI, FormLoginI, FormProfileI } from '../types/constants/initial-local-state'

export const INITIAL_FORM_REGISTER: FormRegisterI = {
    name: '',
    surname: '',
    telphone: '',
    email: '',
    password: '',
    repeatPassword: '',
}

export const INITIAL_FORM_VERIFICATION: FormVerificationI = {
    email: '',
    verificationCode: '',
}

export const INITIAL_FORM_LOGIN: FormLoginI = {
    email: '',
    password: '',
}

export const INITIAL_FORM_PROFILE: FormProfileI = {
    name: '',
    surname: '',
    telphone: 0,
    email: '',
    password: '',
    repeatPassword: '',
    verificationCode: '',
}