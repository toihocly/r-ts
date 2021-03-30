import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Dimens from '../themes/dimens'
import Copyright from '../components/Copyright'
import { useIsAuthenticated, useLogin } from '../hooks/auth-hooks'
import { Redirect, Route } from 'react-router-dom'
import {
    useChangeLoginPageEmail,
    useChangeLoginPagePassword,
    useLoginPageEmail,
    useLoginPageError,
    useLoginPageIsRememberMe,
    useLoginPageLoading,
    useLoginPagePassword,
    useSetLoginPageRememberMe,
} from '../hooks/login-page-hooks'
import LoadingDialog from '../components/LoadingDialog'
import ErrorDialog from '../components/ErrorDialog'
import { setLoginPageErrorAction } from '../actions/login-page-actions'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(Dimens.MARGIN_V),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(Dimens.MARGIN_V, 0, Dimens.MARGIN_V),
    },
}))

type LoginPageProps = {
    path: string
}
const LoginPage = React.memo((props: LoginPageProps) => {
    const classes = useStyles()
    const {
        path,
    } = props
    const dispatch = useDispatch()
    const login = useLogin()
    const isAuthenticated = useIsAuthenticated()
    const isLoading = useLoginPageLoading()
    const error = useLoginPageError()
    const email = useLoginPageEmail()
    const password = useLoginPagePassword()
    const isRememberMe = useLoginPageIsRememberMe()
    const changeEmail = useChangeLoginPageEmail()
    const changePassword = useChangeLoginPagePassword()
    const setRememberMe = useSetLoginPageRememberMe()
    const onChangeEmail = React.useCallback((event) => {
        changeEmail(event.target.value)
    }, [changeEmail])
    const onChangePassword = React.useCallback((event) => {
        changePassword(event.target.value)
    }, [changePassword])
    const onSetRememberMe = React.useCallback((event) => {
        setRememberMe(event.target.checked)
    }, [setRememberMe])
    const onCloseErrorDialog = React.useCallback(() => {
        dispatch(setLoginPageErrorAction(null))
    }, [])
    const onLoginButtonPress = React.useCallback(() => {
        login(email, password)
    }, [login, email, password])
    return (<Route
        path={path}
        render={({ location }) =>
            isAuthenticated ? (<Redirect
                to={{
                    pathname: '/',
                    state: { from: location },
                }}
            />) : (<Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={onChangeEmail}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={onChangePassword}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                            checked={isRememberMe}
                            onChange={onSetRememberMe}
                        />
                        <Button
                            type={'button'}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={onLoginButtonPress}
                        >
                            Login In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {'Don\'t have an account? Sign Up'}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright/>
                </Box>
                <LoadingDialog
                    visible={isLoading}
                />
                <ErrorDialog
                    error={error}
                    onClose={onCloseErrorDialog}
                />
            </Container>)
        }
    />)
})
export default LoginPage
