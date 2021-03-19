export interface FormRegisterI {
    name: string,
    surname: string,
    telphone: string,
    email: string,
    password: string,
    repeatPassword: string,
}

export interface FormProfileI {
    name?: string,
    surname?: string,
    telphone?: number,
    email?: string,
    password?: string,
    repeatPassword?: string,
    verificationCode: string,
}

export interface FormVerificationI {
    email: string,
    verificationCode: string,
}

export interface FormLoginI {
    email: string,
    password: string,
}