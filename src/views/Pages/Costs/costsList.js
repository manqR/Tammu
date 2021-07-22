import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {getToken} from '../../../Auth/common'
import {BASE_URL} from '../../../Auth/Actions'
import Moment from 'moment';

class viewProducts extends Component {
    
    constructor(){
        super();
        this.state = { data: [] };
    };    

    componentDidMount() {           
        this.mounted = true; 
        const URL = `${BASE_URL}/auth/costsList`; 
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
    Moment.locale('id');
    let listproducts = this.state.data.map((data,i) => {
    
        return <tr key = {i}>
                    <td>{data.BRANCH_NAME}</td>
                    <td>{data.OPEX_DOC_NO}</td>
                    <td>{data.EMPLOYEE_NAME}</td>
                    <td>{data.OPEX_CATEGORY}</td>
                    <td>{data.REMARKS}</td>
                    <td>{data.OPEX_AMOUNT}</td>        
                    <td>{Moment(data.OPEX_DATE).format('DD/MM/YYYY HH:mm:ss')}</td>               
                </tr>  
    })

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> List Operational Cost
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>Branch Name</th>
                    <th>Opex Doc No</th>
                    <th>Operator Name</th>
                    <th>Category</th>
                    <th>Remarks</th>
                    <th>Costs Amount</th>
                    <th>Opex Date</th>
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
