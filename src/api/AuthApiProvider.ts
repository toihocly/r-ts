import BaseApiProvider from './BaseApiProvider'
import { GenderEnum } from '../data-types'

export type SignUpRequestType = {
    userName?: string | null
    email?: string | null
    appleID?: string | null
    facebookID?: string | null
    passWord?: string | null
    firstName?: string | null
    lastName?: string | null
    gender?: GenderEnum | null
    phone?: string | null
    type?: 'CUSTOMER' | 'ADMIN' | 'BOUTIQUE'
}
export type SignUpResponseType = {
    errCode: number
    data: any
}
export type LoginRequestType = {
    uuid: string,
    user: string
    passWord: string
}
export default class AuthApiProvider extends BaseApiProvider {
    signUp = (params: SignUpRequestType) => {
        return this.post<SignUpResponseType>('api/user/register', null, {
            type: 'EMAIL',
            user: params,
        })
    }
    login = (params: LoginRequestType) => {
        return this.post<SignUpResponseType>('api/user/login', null, params)
    }
}
