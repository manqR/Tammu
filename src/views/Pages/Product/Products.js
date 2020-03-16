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

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
        productName: "",
        productPrice: 0,
        productFee: 0,
        productQty: 0,
        productStatus: 1,
        errorMsg: false,
        isSave : false
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.handleChangeproductName = this.handleChangeproductName.bind(this);
    this.handleChangeproductPrice = this.handleChangeproductPrice.bind(this);
    this.handleChangeproductFee = this.handleChangeproductFee.bind(this);
    this.handleChangeproductQty = this.handleChangeproductQty.bind(this);
    this.handleChangeproductStatus = this.handleChangeproductStatus.bind(this);

  }

  handleChangeproductName = event => {
    this.setState({
        productName: event.target.value
    });
  }

  handleChangeproductPrice = event => {
    this.setState({
        productPrice: event.target.value
    });
  }

  handleChangeproductFee = event => {
    this.setState({
        productFee: event.target.value
    });
  }

  handleChangeproductQty = event => {
    this.setState({
        productQty: event.target.value
    });
  }

  handleChangeproductStatus = event => {
    this.setState({
        productStatus: event.target.value
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
    axios('http://localhost:3000/api/auth/product', {
        method: "POST",
        proxyHeaders: false,
        credentials: true,        
        headers: {              
                  "x-access-token":getToken(),
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Accept": "application/json"                  
        },
        data: this.serialize({            
            productName: this.state.productName,
            productPrice: this.state.productPrice,
            productFee: this.state.productFee,
            productQty: this.state.productQty,
            productStatus: this.state.productStatus,                               
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
        productName: "",
        productPrice: 0,
        productFee: 0,
        productQty: 0,
        productStatus: 1,        
    });
}

  render() {
    return (
        <div className="animated fadeIn">
            { this.state.errorMsg && <Alert color="danger">Product failed to saving!</Alert>}            
            { this.state.isSave && <Alert color="success">Product successfully saved!</Alert>}                
            <Row>
                <Col xs="12" md="12">
                    <Card>
                    <CardHeader>
                        <strong>Add</strong> Products
                    </CardHeader>
                    <CardBody>
                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                        
                        <FormGroup row>
                            <Col md="3">
                            <Label htmlFor="text-input">Product Name</Label>
                            </Col>
                            <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="..Arabica" value={this.state.productName}                        
                                onChange={this.handleChangeproductName}  required/>
                            <FormText color="muted">exp Arabica Toraja, Robusta Lampung</FormText>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                            <Label htmlFor="text-input">Purchase Price</Label>
                            </Col>
                            <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="0"  value={this.state.productPrice}                        
                                onChange={this.handleChangeproductPrice}  required/>
                            <FormText color="muted">exp 40000, 35000, ..</FormText>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md="3">
                            <Label htmlFor="text-input">Fee Purchase</Label>
                            </Col>
                            <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="0" value={this.state.productFee}                        
                                onChange={this.handleChangeproductFee} required/>
                            <FormText color="muted">exp 12500, 10000, 0 ...</FormText>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md="3">
                            <Label htmlFor="text-input">Qty</Label>
                            </Col>
                            <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="0" value={this.state.productQty}                        
                                onChange={this.handleChangeproductQty} required/>
                            <FormText color="muted">exp 0, 1 ..</FormText>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md="3">
                            <Label htmlFor="select">Status</Label>
                            </Col>
                            <Col xs="12" md="9">
                            <Input type="select" name="select" id="select" value={this.state.productStatus}                        
                                onChange={this.handleChangeproductStatus} required>                        
                                <option value="1">Enable</option>
                                <option value="0">Disable</option>                        
                            </Input>
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

export default Products;
