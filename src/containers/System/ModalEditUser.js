import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup,Form, Row, Col, Label, Input} from 'reactstrap';
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : '',
            email: '',
            password: '',
            lastName: '',
            firstName : '',
            address: '',
            phoneNumber: '',
        };
    };
    
    componentDidMount() {
        console.log('render props :', this.props.currentUser)
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'hai ke',
                lastName: user.lastName,
                firstName: user.firstName,
                address: user.firstName,
                phoneNumber: user.phoneNumber,
            });
        }
    }

    tonggle = () => {
        this.props.tonggle();
    }
    
    handleOnchangeInput = (e, name) => {
        let copyState = {...this.state};
        copyState[name] = e.target.value;
        this.setState({
            ...copyState
        });
    }

    checkValideInput = () => {
        let isValid = true;
        let ArrInput = ['firstName', 'lastName','address', 'email', 'password', 'phoneNumber'];
        for(let i = 0; i < ArrInput.length; i++) {
            if(!this.state[ArrInput[i]]) {
                isValid = false;
                alert('misssing parameter :' + ArrInput[i]);
                break;
            }
        }
        return isValid;
    }

    editUser = () => {
        let isValid =  this.checkValideInput(); 
        if (isValid) {
            this.props.editUser(this.state)
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Modal
                toggle={() => {this.tonggle()}}
                isOpen={this.props.isOpen} 
                className={this.props.className}
                size = "lg"
                >
                    <ModalHeader className="modal-title" toggle={() => {this.tonggle()}}>Edit User</ModalHeader>
                    <ModalBody>
                    <Form>
                        <Row>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="firstName">
                                firstName
                                </Label>
                                <Input
                                id="firstName"
                                name="firstName"
                                placeholder="firstName"
                                type="text"
                                onChange={(e)=> {this.handleOnchangeInput(e, "firstName")}}
                                value={this.state.firstName}
                                />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="lastName">
                                lastName
                                </Label>
                                <Input
                                id="lastName"
                                name="lastName"
                                placeholder="lastName"
                                type="text"
                                onChange={(e)=> {this.handleOnchangeInput(e, "lastName")}}
                                value={this.state.lastName}
                                />
                            </FormGroup>
                            </Col>
                        </Row>
                       <Row>
                            <Col md={12}>
                            <FormGroup>
                            <Label for="exampleAddress">
                            Address
                            </Label>
                            <Input
                            id="exampleAddress"
                            name="address"
                            placeholder="1234 Main St"
                            onChange={(e)=> {this.handleOnchangeInput(e, "address")}}
                            value={this.state.address}
                            />
                        </FormGroup>
                            </Col>
                       </Row>
                        <Row>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                Email
                                </Label>
                                <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                                onChange={(e)=> {this.handleOnchangeInput(e, "email")}}
                                value={this.state.email}
                                disabled
                                />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">
                                Password
                                </Label>
                                <Input
                                id="examplePassword"
                                name="password"
                                placeholder="password placeholder"
                                type="password"
                                onChange={(e)=> {this.handleOnchangeInput(e, "password")}}
                                value={this.state.password}
                                disabled
                                />
                            </FormGroup>
                            </Col>
                        </Row>
                       <Row>
                            <Col md={12}>
                            <FormGroup>
                            <Label for="phoneNumber">
                            phoneNumber
                            </Label>
                            <Input
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="phoneNumber"
                            onChange={(e)=> {this.handleOnchangeInput(e, "phoneNumber")}}
                            value={this.state.phoneNumber}
                            />
                        </FormGroup>
                            </Col>
                       </Row>
                    </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='modal-btn' size='lg' onClick={() => {this.editUser()}}>Save User</Button>
                        <Button color="danger" className='modal-btn' onClick={() => {this.tonggle()}}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
