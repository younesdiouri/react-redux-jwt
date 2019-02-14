import React from "react";
import {Switch, Route} from "react-router-dom";
import LoginForm from '../containers/LoginForm'
import { login } from "../redux/actions/security";
import {connect} from "react-redux";

class SecurityContainer extends React.Component {

    handleSubmit = (data) => {
        this.props.login(data.username, data.password, this.props.dispatch);
    }

    render() { 
        return ( 
            <Switch>
                <Route path="/security/login" render={() => <LoginForm onSubmit={this.handleSubmit}/>}/>
            </Switch>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(login(username, password, dispatch))
    }
}
export default connect(undefined, mapDispatchToProps)(SecurityContainer);