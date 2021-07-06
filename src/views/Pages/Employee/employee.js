import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  Label,
  Row,
  Alert,
} from 'reactstrap';

import axios from 'axios';
import {getToken} from '../../../Auth/common'
import {BASE_URL} from '../../../Auth/Actions'

class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
        recordStatus: "A",
        employeeName: "",
        password: "",
        errorMsg: false,
        isSave : false
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.handleRecordStatus = this.handleRecordStatus.bind(this);
    this.handleChangeEmployeeName = this.handleChangeEmployeeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);    

  }

  handleRecordStatus = event => {
    this.setState({
        recordStatus: event.target.value
    });
  }

  handleChangeEmployeeName = event => {
    this.setState({
        employeeName: event.target.value
    });
  }

  handleChangePassword = event => {
    this.setState({
        password: event.target.value
    });
  }

  serialize = obj => {
    let str = [];
    for (let p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  };


  submitHandler(e) { 
    // let token = this.getToken()            
    e.preventDefault();      
    axios(`${BASE_URL}employee`, {
        method: "POST",
        proxyHeaders: false,
        credentials: true,        
        headers: {              
                  "x-access-token":getToken(),
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Accept": "application/json"                  
        },
        data: this.serialize({    
            recordStatus: this.state.recordStatus,
            employeeName: this.state.employeeName,
            password: this.state.password                      
        })
    }).then(response => {
        // console.log(response)
        this.setState({isSave:true})
        this.reset()
                 
    }).catch(error => {                         
        this.setState({
            errorMsg:true
        })
    });
                
                
}

reset(){
    this.setState({          
        recordStatus: "A",
        employeeName: "",
        password: ""   
    });
}

  render() {
    return (
        <div className="animated fadeIn">
            { this.state.errorMsg && <Alert color="danger">Employee failed to saving!</Alert>}            
            { this.state.isSave && <Alert color="success">Employee successfully Add!</Alert>}                
            <Row>
                <Col xs="12" md="12">
                    <Card>
                    <CardHeader>
                        <strong>Add</strong> Employee
                    </CardHeader>
                    <CardBody>
                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                        
                        <FormGroup row>
                            <Col md="3">
                            <Label htmlFor="select">Record Status</Label>
                            </Col>
                            <Col xs="12" md="9">
                            <Input type="select" name="select" id="select" value={this.state.productStatus}                        
                                onChange={this.handleRecordStatus} required>                        
                                <option value="A">Active</option>
                                <option value="N">Non-Active</option>                        
                            </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                            <Label htmlFor="text-input">Employee Name</Label>
                            </Col>
                            <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input"  value={this.state.employeeName}                        
                                onChange={this.handleChangeEmployeeName}  required/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                            <Label htmlFor="text-input">Password</Label>
                            </Col>
                            <Col xs="12" md="9">
                            <Input type="password" id="text-input" name="text-input"  value={this.state.password}                        
                                onChange={this.handleChangePassword}  required/>
                            </Col>
                        </FormGroup>

                        

                        </Form>
                    </CardBody>
                    <CardFooter>
                        <Button type="submit" size="sm" color="primary" onClick={this.submitHandler}><i className="fa fa-dot-circle-o"></i> Submit</Button>                                        
                    </CardFooter>
                    </Card>
                
                </Col>
            </Row>
       
        </div>
    );
  }
}

export default Employee;
