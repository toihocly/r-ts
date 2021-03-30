import { applyMiddleware, compose, createStore, Middleware } from 'redux'
import storage from 'redux-persist/lib/storage'
import { createMigrate, persistReducer, persistStore } from 'redux-persist'
import logger from 'redux-logger'
import reduxTransformer from './redux-transformer'
import { reducers } from './index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga'
import { routerMiddleware } from 'connected-react-router'
import history from './history'

const sagaMiddleware = createSagaMiddleware()
const migrations = {
    0: (state: any) =>
        // migration clear out device state
        ({
            ...state,
        }),
}
const config = {
    storage,
    key: 'primary',
    version: 0,
    transforms: [reduxTransformer],
    whitelist: ['authState', 'loginPageState'],
    migrate: createMigrate(migrations, { debug: false }),
    throttle: 3000,
}
const _combinedReducers = persistReducer(config, reducers)

const __LOG_REDUX_ = true


function initStore() {
    const middleWares: Middleware[] = [routerMiddleware(history), sagaMiddleware]
    if (__LOG_REDUX_) {
        middleWares.push(logger)
    }
    return createStore(
        _combinedReducers,
        undefined,
        compose(applyMiddleware(...middleWares)),
    )
}

const reduxStore = initStore()
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(reduxStore)
export default reduxStore
