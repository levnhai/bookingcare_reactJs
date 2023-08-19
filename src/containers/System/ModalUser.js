import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup,Form, Row, Col, Label, Input, Alert} from 'reactstrap';

class ProductManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            lastName: '',
            firstName : '',
            address: '',
            phoneNumber: '',
            gender: '',

        };
    };
    
    componentDidMount() {
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
        let ArrInput = ['firstName', 'lastName','address', 'email', 'password', 'phoneNumber','gender'];
        for(let i = 0; i < ArrInput.length; i++) {
            if(!this.state[ArrInput[i]]) {
                isValid = false;
                alert('misssing parameter :' + ArrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleCreateUser = () => {
      let isValid =  this.checkValideInput(); 
      if (isValid) {
        this.props.createNewUser(this.state)
      }
    }
    render() {
        return (
            <div>
                <Modal
                toggle={() => {this.tonggle()}}
                isOpen={this.props.isOpen} 
                className={this.props.className}
                size = "lg"
                >
                    <ModalHeader className="modal-title" toggle={() => {this.tonggle()}}>ADD New User</ModalHeader>
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
                            />
                        </FormGroup>
                            </Col>
                       </Row>
                        <Row>
                            <Col md={3}>
                                <FormGroup>
                                <Label for="gender">
                                Gender
                                </Label>
                                <Input
                                id="gender"
                                name="gender"
                                type="select"
                            onChange={(e)=> {this.handleOnchangeInput(e, "gender")}}
                                >
                                <option value="Male">
                                    Male
                                </option>
                                <option value="Female">
                                    Female
                                </option>
                                </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='modal-btn' size='lg' onClick={() => {this.handleCreateUser()}}>Add User</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
