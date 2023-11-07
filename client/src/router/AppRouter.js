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

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter} />
                    <Route path="/documents/:id" component={TextEditor} />
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
