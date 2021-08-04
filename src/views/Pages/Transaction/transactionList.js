import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {getToken} from '../../../Auth/common'
import {BASE_URL} from '../../../Auth/Actions'
import Moment from 'moment';
import 'moment/locale/id' 

class viewProducts extends Component {
    
    constructor(){
        super();
        this.state = { data: [] };
    };    

    componentDidMount() {           
        this.mounted = true; 
        const URL = `${BASE_URL}/sales/list`; 
        fetch(URL, { 
            method: 'POST', 
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
                  <td>{data.SALES_DOC_NO}</td>
                    <td>{data.BRANCH_NAME}</td>  
                    <td>{data.SHIFT_NO}</td>                  
                    <td>{data.CUSTOMER_NAME}</td>                  
                    <td>{data.PAYMENT_TYPE}</td>
                    <td>{data.AMOUNT}</td>
                    <td>{data.SALES_DATE.replace("T"," ").replace(".000Z","")}</td>
                    {/* <td>{Moment(data.).format('DD/MM/YYYY HH:mm:ss')}</td> */}
                </tr>  
    })

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> List Sales
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>Sales No</th>
                    <th>Branch Name</th>
                    <th>Shift No</th>
                    <th>Customer Name</th>    
                    <th>Payment Type</th>
                    <th>Amount</th>
                    <th>Sales Date</th>
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
