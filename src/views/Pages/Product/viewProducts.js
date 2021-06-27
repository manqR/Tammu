import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {getToken} from '../../../Auth/common'
import {BASE_URL} from '../../../Auth/Actions'

class viewProducts extends Component {
    
    constructor(){
        super();
        this.state = { data: [] };
    };    

    componentDidMount() {           
        this.mounted = true; 
        const URL = `${BASE_URL}/listProduct`; 
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
                    <td>{data.ITEM_NAME}</td>
                    <td>{data.price}</td>
                    <td>{data.fee}</td>
                    <td>{data.qty}</td>
                    <td>{data.status}</td>
                    <td><Badge color="success">Active</Badge></td>
                </tr>  
    })

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Product List
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Fee</th>
                    <th>Qty</th>
                    <th>Status</th>
                    <th>Action</th>
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

export default viewProducts;
