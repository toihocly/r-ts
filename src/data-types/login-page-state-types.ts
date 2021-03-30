import { ErrorType } from './index'

export type LoginPageStateType = {
    email: string
    password: string
    isRememberMe: boolean
    loading: boolean
    error: ErrorType | null
}
export type PersistedLoginPageStateType = {
    email: string
    isRememberMe: boolean
}
