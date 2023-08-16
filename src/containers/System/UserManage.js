import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux"

import {userService} from "../../services"
import "./UserManage.scss";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        arrUsers: [],
    };
  }

  async componentDidMount() {
    let getUserAll = await userService.getAllUser('all');
    if (getUserAll  && getUserAll.errcode === 0) {
        this.setState({
            arrUsers: getUserAll.users
        })
    }
  }

  render() {  
    let userData = this.state.arrUsers; 
    return (
      <div className="user-container">
        <div className="title">manage User</div>
        <div className="user-table">
          <table class="styled-table mx-2">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>  
                <th>Address</th>  
                <th>Phone Number</th>  
                <th>Gender</th>  
                <th>Role</th>  
                <th>Action</th>  
              </tr> 
            </thead>
            <tbody>
                {userData.map((user) => {
                    return (
                        <tr className="user-table-row">
                            <th>{user.id}</th>
                            <th >{user.firstName}</th>
                            <th>{user.lastName}</th>
                            <th>{user.email}</th>
                            <th>{user.address}</th>
                            <th>{user.phoneNumber}</th>
                            <th>{user.gender}</th>
                            <th>{user.roleId}</th>
                            <th>
                                <button><i className="btn btn-edit fa-solid fa-pencil"></i></button>
                                <button><i className="btn btn-delete fa-solid fa-trash"></i></button>
                            </th>
                            
                        </tr>
                    )
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
