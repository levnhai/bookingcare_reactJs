import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderHome from './HeaderHome';

import * as actions from "../../store/actions";

class Home extends Component {

    render() {

        return (
          <div className='Home-page'>
            <HeaderHome />
          </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        // isLoggedIn: state.admin.isLoggedIn
        isLoggedIn: state.user.isLoggedIn

    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
