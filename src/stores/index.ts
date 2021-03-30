import { combineReducers } from 'redux'
import authState from '../reducers/auth-reducer'
import signUpPageState from '../reducers/sign-up-page-reducer'
import loginPageState from '../reducers/login-page-reducer'
import itemEditorState from '../reducers/item-editor-reducer'
import itemState from '../reducers/item-reducer'
import { AuthStateType } from '../data-types/auth-state-types'
import { SignUpPageStateType } from '../data-types/sign-up-page-state-types'
import { connectRouter } from 'connected-react-router'
import history from './history'
import { LoginPageStateType } from '../data-types/login-page-state-types'
import { ItemEditorStateType } from '../data-types/item-editor-state-types'
import { ItemStateType } from '../data-types/item-state-types'


export type RootStateType = {
    authState: AuthStateType
    loginPageState: LoginPageStateType
    signUpPageState: SignUpPageStateType
    itemEditorState: ItemEditorStateType
    itemState: ItemStateType
    router: any
}
export const reducers = combineReducers<RootStateType>({
    authState,
    signUpPageState,
    loginPageState,
    itemEditorState,
    itemState,
    router: connectRouter(history),
})
