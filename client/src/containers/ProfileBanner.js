import React from 'react';
import Banner from '../components/Banner';
import {connect} from 'react-redux';

class ProfileBanner extends React.Component {
    render() {
        const {user, isLogged} = this.props;
        return <Banner content={isLogged ? user.token : 'Not Connected'} />
    }
}

const mapStateToProps = function(state, ownProps) {
    const {security: {user, isLogged}} = state;
    return {
        user,
        isLogged
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        //logUser: (username, password) => dispatch(logUser(username,password))
    }
}

const connectGenerator = connect(mapStateToProps, mapDispatchToProps);
const ConnectedProfileBanner = connectGenerator(ProfileBanner);

export default ConnectedProfileBanner;