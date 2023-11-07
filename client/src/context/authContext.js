import React, { Children, createContext, useCallback, useState } from "react";
import { fetchSinToken } from "../helpers/fetch";

export const AuthContext = createContext()

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    username: null,
    email: null
}

export const AuthProvider = ({ children }) => {
  
    const [ auth, setAuth ] = useState(initialState)
    
    const login = async ( email, password ) => {

        const resp = await fetchSinToken('login', { email, password }, 'POST')
        console.log( resp ) 
        
        if ( resp.ok ) {
            localStorage.setItem( 'token', resp.token )

            setAuth({
                uid: resp.user.uid,
                checking: false,
                logged: true,
                username: resp.user.username,
                email: resp.user.email
            })
        }

        return resp.ok
    }

    const register = async ( username, email, password ) => {
        
        const resp = await fetchSinToken('register', { email, password, username }, 'POST')
        console.log(resp)

        if ( resp.ok ) {
            localStorage.setItem( 'token', resp.token )

            setAuth({
                uid: resp.user.uid,
                checking: false,
                logged: true,
                username: resp.user.username,
                email: resp.user.email
            })
        }

        return resp.ok
    }

    const verificarToken = useCallback( () => {

    }, [])

    const logout = () => {

    }

    return (
        <AuthContext.Provider value={{ 
            auth,
            login,
            register,
            verificarToken,
            logout
        }}>
            { children }
        </AuthContext.Provider>
    )
}
