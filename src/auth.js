import React from 'react'
import * as firebase from 'firebase'
import { Redirect } from 'react-router-dom'

const AuthContext = React.createContext()

const withAuthContext = Component => props => {
    const [authState, setAuthState] = React.useState({
        isLoading: true,
        user: null
    })
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setAuthState({
                isLoading: false,
                user
            })
        })
    }, [])
    return <AuthContext.Provider value={authState}>
        <Component {...props} />
    </AuthContext.Provider>
}

const useAuthContext = () => {
    return React.useContext(AuthContext)
}

const secureAuth = (Component, isAuth) => props => {
    const authState = useAuthContext()
    const isLogin = authState.user !== null
    if (isLogin === isAuth) {
        return <Component {...props} />
    }
    else {
        return <Redirect to={isLogin ? '/search' : '/'} />
    }
}

export { withAuthContext, useAuthContext, secureAuth }

