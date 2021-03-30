import React from 'react'
import './App.css'
import { Switch } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './routes/PrivateRoute'
import MainRoute from './routes/MainRoute'
import SignUpPage from './pages/SignUpPage'
import { Provider } from 'react-redux'
import reduxStore, { persistor } from './stores/redux-store'
import { PersistGate } from 'redux-persist/integration/react'
import { ConnectedRouter } from 'connected-react-router'
import history from './stores/history'

function App() {
    return (<Provider
        store={reduxStore}
    >
        <PersistGate persistor={persistor}>
            <ConnectedRouter history={history}>
                <Switch>
                    <LoginPage
                        path={'/login'}
                    />
                    <SignUpPage
                        path={'/signup'}
                    />
                    <PrivateRoute
                        path={'/*'}
                    >
                        <MainRoute/>
                    </PrivateRoute>
                </Switch>
            </ConnectedRouter>
        </PersistGate>
    </Provider>)
}

export default App
