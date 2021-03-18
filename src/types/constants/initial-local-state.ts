export interface FormRegisterI {
    name: string,
    surname: string,
    telphone: string,
    email: string,
    password: string,
    repeatPassword: string,
}

export interface FormVerificationI {
    email: string,
    verificationCode: string,
}

export interface FormLoginI {
    email: string,
    password: string,
}