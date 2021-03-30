export enum GenderEnum {
    FEMALE = 'FEMALE',
    MALE = 'MALE'
}

export enum ErrorCode {
    UNAUTHORIZED = 403,
    EMAIL_OR_PASSWORD_EMPTY = 'EMAIL_OR_PASSWORD_EMPTY'
}

export type ErrorType = {
    code?: string | null
    message?: string | null
}
