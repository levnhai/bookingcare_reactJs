import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux"
import ModalUser from "./ModalUser";

import {userService} from "../../services"
import "./UserManage.scss";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        arrUsers: [],
        isOpenModalUser: false
    }
  }

  async componentDidMount() {
    await this.handleGetAllUser();
  }

  handleGetAllUser = async () => {
    let getUserAll = await userService.getAllUser('all');
    if (getUserAll  && getUserAll.errcode === 0) {
        this.setState({
            arrUsers: getUserAll.users
        })
    }
  }

  handleBtnAddNewUser = (() => {
    this.setState({
      isOpenModalUser : true
    })
  })

  tonggleModalUser = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser
    });
  }

  createNewUser = async (data) => {
    try {
      let user = await userService.createNewUser(data);
      if(user && user.errCode !== 0) {
        alert(user.errMessage)
      }
      else {
        await this.handleGetAllUser();
        this.tonggleModalUser();
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {  
    let userData = this.state.arrUsers; 
    return (
      <div className="user-container">
        <div className="title">Manage User</div>
        <div
         className="btn btn-primary px-3 btn-newuser" 
         onClick={() => {this.handleBtnAddNewUser()}}>
          <i className="fa-solid fa-plus px-1"></i> Add new user
        </div>
        <div className="user-table">
          <table className="styled-table mx-2">
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
                                <button className="btn-icon"><i className="icon-btn-edit fa-solid fa-pencil"></i></button>
                                <button className="btn-icon"><i className="icon-btn-delete fa-solid fa-trash"></i></button>
                            </th>
                            
                        </tr>
                    )
                })}
            </tbody>
          </table>
        </div>
        <ModalUser 
        isOpen={this.state.isOpenModalUser} 
        tonggle= {this.tonggleModalUser} 
        className={"modal-user"} 
        createNewUser = {this.createNewUser}
        />
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
