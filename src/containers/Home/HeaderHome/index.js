import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions'
import './HeaderHome.scss';

class HeaderHome extends Component {

    render() {

        return (
          <div className='home-header-container'>
            <div className='home-header-content'>
                <div className='left-content'>
                </div>
                <div className='center-content'>
                    <ul className='list-center'>
                        <li className='title-center'>
                           <a className='title-link' href='/'> 
                                Chuyên khoa
                                <span>Tìm bác sỹ theo chuyên khoa</span>
                           </a>
                        </li>
                        <li className='title-center'>
                            <a className='title-link' href='/'> 
                                Cơ sở y tế
                                <span>Chọn bệnh viện phòng khám</span>
                           </a>
                        </li>
                        <li className='title-center'>
                            <a className='title-link' href='/'>
                                Bác sĩ
                                <span>Chọn bác sĩ giỏi</span>
                            </a>
                        </li>
                        <li className='title-center'>
                            <a className='title-link' href='/'>
                                Gói khám
                                <span>Khám sức khỏe tổng quát</span>
                            </a>
                        </li>  
                    </ul>
                </div>
                <div className='right-content'>
                    <div className='help-icon'></div>
                    <div className='titleSupport'>
                        Hỗ trợ đặt lịch
                        <span>1900 8080</span>
                    </div>
                </div>

            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHome);
