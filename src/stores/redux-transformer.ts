/**
 */
import { createTransform } from 'redux-persist'
import { fromJS as authStateFromJS, toJS as authStateToJS } from '../reducers/auth-reducer'
import { fromJS as loginPageStateFromJS, toJS as loginPageStateToJS } from '../reducers/login-page-reducer'

const appTransformer = createTransform(
    (stateInReducer: any, key) => {
        let result = stateInReducer
        switch (key) {
            case 'authState':
                result = authStateToJS(stateInReducer)
                break
            case 'loginPageState':
                result = loginPageStateToJS(stateInReducer)
                break
        }
        return result
    },
    // Đọc Js từ lưu trữ và chuyển về Immutable cho reducer
    (stateInStorage, key) => {
        let result = stateInStorage
        switch (key) {
            case 'authState':
                result = authStateFromJS(stateInStorage)
                break
            case 'loginPageState':
                result = loginPageStateFromJS(stateInStorage)
                break
        }
        return result
    },
)
export default appTransformer
