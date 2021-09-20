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
  Pagination, PaginationItem, PaginationLink,  Table
} from 'reactstrap';
import axios from 'axios';
import {getToken} from '../../../Auth/common'
import {BASE_URL} from '../../../Auth/Actions'

class Products extends Component {
  constructor(props) {
    super(props);



    // "RECORD_STATUS": req.body.record_status,
  
    // "ITEM_CODE": req.body.item_code,      
    // "ITEM_NAME": req.body.item_name,               
    // "ITEM_PHOTO": req.body.item_photo,            
    // "ITEM_GROUP": req.body.item_group,                        
              
    // "PURCHASE_PRICE": req.body.,                        
         
        this.state = {
        record_status: "A",
        item_code: "",
        item_name: "",
        item_photo: "",
        item_group: "",
        purchase: 0,
        errorMsg: false,
        isSave : false,
        data: [] 
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.handleChangeProductCode = this.handleChangeProductCode.bind(this);
    this.handleChangeproductName = this.handleChangeproductName.bind(this);
    this.handleChangeproductPrice = this.handleChangeproductPrice.bind(this);
    this.handleChangeproductPhoto = this.handleChangeproductPhoto.bind(this);
    this.handleChangeproductGroup = this.handleChangeproductGroup.bind(this);

  }

  
  handleChangeProductCode = event => {
    this.setState({
        item_code: event.target.value
    });
  }

  handleChangeproductName = event => {
    this.setState({
        item_name: event.target.value
    });
  }

  handleChangeproductPrice = event => {
    this.setState({
        purchase: event.target.value
    });
  }

  handleChangeproductPhoto = event => {
    this.setState({
        item_photo: event.target.value
    });
  }


  handleChangeproductGroup = event => {
    this.setState({
        item_group: event.target.value
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
    axios(`${BASE_URL}/auth/product`, {
        method: "POST",
        proxyHeaders: false,
        credentials: true,        
        headers: {              
                  "x-access-token":getToken(),
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Accept": "application/json"                  
        },
        data: this.serialize({    
           
            record_status: this.state.record_status,
            item_code: this.state.item_code,
            item_name: this.state.item_name,
            item_photo: this.state.item_photo,
            item_group: this.state.item_group,
            purchase: this.state.purchase                              
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
        item_code: "",
        item_name: "",
        item_photo: "",
        item_group: "",
        purchase: 0

    });
}


componentDidMount() {           
    this.mounted = true; 
    const URL = `${BASE_URL}/auth/listProduct`; 
    fetch(URL, { 
        method: 'get', 
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

  render() {

    let listproducts = this.state.data.map((data,i) => {
    
        return <tr key = {i}>
                    <td>{data.COMPANY_CODE}</td>
                    <td>{data.BRANCH_CODE}</td>
                    <td>{data.ITEM_CODE}</td>
                    <td>{data.ITEM_NAME}</td>
                    <td>{data.ITEM_GROUP}</td>
                    <td>{data.PURCHASE_PRICE}</td>
                </tr>  
    })

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

                {/* LIST PRODUCT */}
                <Col xs="12" lg="12">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Product List
                        </CardHeader>
                        <CardBody>
                            <Table responsive>
                            <thead>
                            <tr>                    
                                <th>COMPANY CODE</th>
                                <th>BRANCH CODE</th>
                                <th>ITEM CODE</th>
                                <th>ITEM NAME</th>
                                <th>CATEGORY</th>
                                <th>PURCHASE PRICE</th>
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

export default Products;
