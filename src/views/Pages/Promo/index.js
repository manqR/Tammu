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
  Pagination, PaginationItem, PaginationLink, Table
} from 'reactstrap';

import axios from 'axios';
import {getToken} from '../../../Auth/common'
import {BASE_URL} from '../../../Auth/Actions'
import Moment from 'moment';

class index extends Component {
  constructor(props) {
    super(props);

    

    this.state = {
        promo_code: "",
        promo_description: "",
        eff_start: null,
        eff_end: null,
        amount: 0,
        percent: 0,
        quota: 0,
        errorMsg: false,
        isSave : false,
        data: [],
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.handlePromoCode = this.handlePromoCode.bind(this);
    this.handlePromoDescription = this.handlePromoDescription.bind(this);
    this.handleEffStart = this.handleEffStart.bind(this);    
    this.handleeffEnd = this.handleeffEnd.bind(this);    
    this.handleAmount = this.handleAmount.bind(this);    
    this.handlePercent = this.handlePercent.bind(this);    
    this.handleQuota = this.handleQuota.bind(this);    

  }


  
  componentDidMount() {           
        this.mounted = true; 
        const URL = `${BASE_URL}/promo/list`; 
        fetch(URL, { 
            method: 'post', 
            headers: new Headers({
            "x-access-token":getToken(),
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"    
            })       
        })
        .then(response => response.json())
        .then(json => {
            this.setState({ data: json.results });       
            console.log(this.state.data)
        });          
    
    }

    componentWillUnmount() {
        this.mounted = false;
    }


  handlePromoCode = event => {
    this.setState({
        promo_code: event.target.value
    });
  }

  handlePromoDescription = event => {
    this.setState({
        promo_description: event.target.value
    });
  }

  handleEffStart = event => {
    this.setState({
        eff_start: event.target.value
    });
  }
  handleeffEnd = event => {
    this.setState({
        eff_end: event.target.value
    });
  }
  handleAmount = event => {
    this.setState({
        amount: event.target.value
    });
  }
  handlePercent = event => {
    this.setState({
        percent: event.target.value
    });
  }
  handleQuota = event => {
    this.setState({
        quota: event.target.value
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
    axios(`${BASE_URL}/promo/create`, {
        method: "POST",
        proxyHeaders: false,
        credentials: true,        
        headers: {              
                  "x-access-token":getToken(),
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Accept": "application/json"                  
        },
        data: this.serialize({    
            promo_code: this.state.promo_code,
            promo_description: this.state.promo_description,
            eff_start: this.state.eff_start,
            eff_end: this.state.eff_end,
            amount: this.state.amount,
            percent: this.state.percent,
            quota: this.state.quota                 
        })
    }).then(response => {
        // console.log(response)
        this.setState({isSave:true})
        this.reset()
        this.componentDidMount()
                 
    }).catch(error => {                         
        this.setState({
            errorMsg:true
        })
    });
                
                
}

reset(){
    this.setState({          
        promo_code: "",
        promo_description: "",
        eff_start: "",
        eff_end: "",
        amount: 0,
        percent: 0,
        quota: 0,
    });
}

  render() {

    Moment.locale('id');
    let listproducts = this.state.data.map((data,i) => {
    
        return <tr key = {i}>
                    <td>{data.company_code}</td>
                    <td>{data.promo_code}</td>
                    <td>{data.promo_description}</td>
                    <td>{data.eff_start}</td>
                    <td>{data.eff_end}</td>
                    <td>{data.amount}</td>
                    <td>{data.percent}</td>
                    <td>{data.quota}</td>                    
                </tr>  
    })
    return (
        <div className="animated fadeIn">
            { this.state.errorMsg && <Alert color="danger">Promo failed to saving!</Alert>}            
            { this.state.isSave && <Alert color="success">Promo successfully Created!</Alert>}                
            <Row>
                <Col xs="12" md="12">
                    <Card>
                    <CardHeader>
                        <strong>Create</strong> Promo
                    </CardHeader>
                    <CardBody>
                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                               
                        <FormGroup row>
                            <Col md="2">
                            <Label htmlFor="text-input">Promo Code</Label>
                            </Col>
                            <Col xs="4" md="4">
                            <Input type="text" id="text-input" name="text-input"  value={this.state.promo_code}                        
                                onChange={this.handlePromoCode}  required/>
                            </Col>

                            <Col md="2">
                            <Label htmlFor="text-input">Amount</Label>
                            </Col>
                            <Col xs="4" md="4">
                            <Input type="text" id="text-input" name="text-input"  value={this.state.amount}                        
                                onChange={this.handleAmount}  required/>
                            </Col>

                        </FormGroup>

                        <FormGroup row>
                            <Col md="2">
                            <Label htmlFor="text-input">Promo Description</Label>
                            </Col>
                            <Col xs="4" md="4">
                            <Input type="text" id="text-input" name="text-input"  value={this.state.promo_description}                        
                                onChange={this.handlePromoDescription}  required/>
                            </Col>

                            <Col md="2">
                            <Label htmlFor="text-input">Percent</Label>
                            </Col>
                            <Col xs="4" md="4">
                            <Input type="text" id="text-input" name="text-input"  value={this.state.percent}                        
                                onChange={this.handlePercent}  required/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md="2">
                            <Label htmlFor="text-input">Start Promo</Label>
                            </Col>
                            <Col xs="4" md="4">
                            <Input type="text" id="text-input" name="text-input"  value={this.state.eff_start}                        
                                onChange={this.handleEffStart}  required/>
                            </Col>

                            <Col md="2">
                            <Label htmlFor="text-input">Quota</Label>
                            </Col>
                            <Col xs="4" md="4">
                            <Input type="text" id="text-input" name="text-input"  value={this.state.quota}                        
                                onChange={this.handleQuota}  required/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md="2">
                            <Label htmlFor="text-input">End Promo</Label>
                            </Col>
                            <Col xs="4" md="4">
                            <Input type="text" id="text-input" name="text-input"  value={this.state.eff_end}                        
                                onChange={this.handleeffEnd}  required/>
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

            <Row>
            <Col xs="12" lg="12">
                <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"></i> List Promo
                </CardHeader>
                <CardBody>
                    <Table responsive>
                    <thead>
                    <tr>
                        <th>Company Code</th>
                        <th>Promo Code</th>
                        <th>Description</th>
                        <th>Start Promo</th>
                        <th>End Promo</th>
                        <th>Amount</th>
                        <th>Percent</th>
                        <th>Quota</th>
                    </tr>
                    </thead>
                    <tbody>                    
                        {listproducts}       
                    </tbody>
                    </Table>
                    <Pagination>
                    <PaginationItem>
                        <PaginationLink previous tag="button"></PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next tag="button"></PaginationLink>
                    </PaginationItem>
                </Pagination>
                </CardBody>
                </Card>
            </Col>
            </Row>
       
        </div>
    );
  }
}

export default index;
