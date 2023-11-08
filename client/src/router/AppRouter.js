import React from 'react'
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
import Invitacion from '../pages/Invitacion';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter} />
                    <Route path="/documents/:id" component={TextEditor} />
                    <Route exact path="/welcome" component={Welcome} />
                    <Route exact path="/abrir-doc" component={AbrirDoc} />
                    <Route exact path="/crear-doc" component={CrearDoc} />
                    <Route exact path="/invitacion" component={Invitacion} />
                    <Route path="/nuevo-doc" exact>
                        <Redirect to={`/documents/${uuidV4()}`} />
                    </Route>
                    <Redirect to="/auth" />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
