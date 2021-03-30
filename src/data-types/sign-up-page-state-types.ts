import { ErrorType, GenderEnum } from './index'

export type SignUpPageStateType = {
    firstName: string | null
    lastName: string | null
    password: string | null
    email: string | null
    gender: GenderEnum | null
    phoneNumber: string | null
    loading: boolean
    error: ErrorType | null
}
