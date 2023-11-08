import React, { useContext, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"
import TextEditor from '../pages/TextEditor';
import AuthRouter from './AuthRouter';
import Welcome from '../pages/Welcome'
import AbrirDoc from '../pages/AbrirDoc';
import CrearDoc from '../pages/CrearDoc';
import { AuthContext } from '../context/authContext';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

const AppRouter = () => {
    
    const { auth, checkToken } = useContext(AuthContext)

    useEffect( () => {
        checkToken()
    }, [])
    
    if ( auth.checking ){
        return <h1>Espere por favor</h1>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        isAuthenticated={ auth.logged }
                        path="/auth"
                        component={ AuthRouter }
                    />
                    <PrivateRoute 
                        isAuthenticated={ auth.logged }
                        exact
                        path="/"
                        component={ Welcome }
                    />
                    <Route path="/documents/:id" component={TextEditor} />
                    <Route exact path="/abrir" component={AbrirDoc} />
                    <Route path="/" exact>
                        <Redirect to={`/documents/${uuidV4()}`} />
                    </Route>
                    <Redirect to="/auth" />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
