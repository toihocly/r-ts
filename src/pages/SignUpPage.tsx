import React from 'react'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Dimens from '../themes/dimens'
import {
    useChangeSignUpPageEmailCallback,
    useChangeSignUpPageFirstNameCallback,
    useChangeSignUpPageGenderCallback,
    useChangeSignUpPageLastNameCallback,
    useChangeSignUpPagePasswordCallback,
    useChangeSignUpPagePhoneNumberCallback,
    useSignUpPageEmail,
    useSignUpPageError,
    useSignUpPageFirstName,
    useSignUpPageGender,
    useSignUpPageIsLoading,
    useSignUpPageLastName,
    useSignUpPagePassword,
    useSignUpPagePhoneNumber,
} from '../hooks/sign-up-page-hooks'
import { GenderEnum } from '../data-types'
import Copyright from '../components/Copyright'
import { useIsAuthenticated, useSignUp } from '../hooks/auth-hooks'
import { Redirect, Route } from 'react-router-dom'
import LoadingDialog from '../components/LoadingDialog'
import ErrorDialog from '../components/ErrorDialog'
import { useDispatch } from 'react-redux'
import { setSignUpPageErrorAction } from '../actions/sign-up-page-actions'


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
        marginTop: theme.spacing(Dimens.MARGIN_V),
    },
    submit: {
        margin: theme.spacing(Dimens.MARGIN_V, 0, Dimens.MARGIN_V),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}))

type SignUpPageProps = {
    path: string
}
const SignUpPage = React.memo((props: SignUpPageProps) => {
    const {
        path,
    } = props
    const dispatch = useDispatch()
    const isLoading = useSignUpPageIsLoading()
    const isAuthenticated = useIsAuthenticated()
    const classes = useStyles()
    const firstName = useSignUpPageFirstName()
    const lastName = useSignUpPageLastName()
    const email = useSignUpPageEmail()
    const password = useSignUpPagePassword()
    const gender = useSignUpPageGender()
    const phoneNumber = useSignUpPagePhoneNumber()
    const error = useSignUpPageError()
    const changeFirstNameCallback = useChangeSignUpPageFirstNameCallback()
    const changeLastNameCallback = useChangeSignUpPageLastNameCallback()
    const changeEmailCallback = useChangeSignUpPageEmailCallback()
    const changePasswordCallback = useChangeSignUpPagePasswordCallback()
    const changeGenderCallback = useChangeSignUpPageGenderCallback()
    const changePhoneNumberCallback = useChangeSignUpPagePhoneNumberCallback()
    const signUpCallback = useSignUp()
    const onFirstNameChange = React.useCallback((event) => {
        changeFirstNameCallback(event.target.value)
    }, [changeFirstNameCallback])
    const onLastNameChange = React.useCallback((event) => {
        changeLastNameCallback(event.target.value)
    }, [changeLastNameCallback])
    const onEmailChange = React.useCallback((event) => {
        changeEmailCallback(event.target.value)
    }, [changeEmailCallback])
    const onPasswordChange = React.useCallback((event) => {
        changePasswordCallback(event.target.value)
    }, [changePasswordCallback])
    const onGenderChange = React.useCallback((event) => {
        changeGenderCallback(event.target.value)
    }, [changeGenderCallback])
    const onPhoneNumberChange = React.useCallback((event) => {
        changePhoneNumberCallback(event.target.value)
    }, [changePhoneNumberCallback])
    const onSubmitButtonPress = React.useCallback(() => {
        signUpCallback({
            email,
            firstName,
            lastName,
            password,
            gender,
            phone: phoneNumber,
            username: email,
        })
    }, [signUpCallback, email, firstName, lastName, password, gender, phoneNumber])
    const onCloseErrorDialog = React.useCallback(() => {
        dispatch(setSignUpPageErrorAction(null))
    }, [])
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
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email || ''}
                                    onChange={onEmailChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={password || ''}
                                    onChange={onPasswordChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value={firstName || ''}
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={onFirstNameChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    value={lastName || ''}
                                    onChange={onLastNameChange}
                                />
                            </Grid>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={gender}
                                    onChange={onGenderChange}
                                    label="Gender"
                                >
                                    <MenuItem value={GenderEnum.FEMALE}>Female</MenuItem>
                                    <MenuItem value={GenderEnum.MALE}>Male</MenuItem>
                                </Select>
                            </FormControl>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    autoComplete="fname"
                                    name="phoneNumber"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value={phoneNumber || ''}
                                    id="phoneNumber"
                                    label="Phone Number"
                                    autoFocus
                                    onChange={onPhoneNumberChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type={'button'}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={onSubmitButtonPress}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
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
export default SignUpPage
