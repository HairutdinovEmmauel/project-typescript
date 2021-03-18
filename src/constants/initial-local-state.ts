import { FormRegisterI, FormVerificationI, FormLoginI } from '../types/constants/initial-local-state'

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