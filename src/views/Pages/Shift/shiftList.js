import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {getToken} from '../../../Auth/common'
import {BASE_URL} from '../../../Auth/Actions'
import Moment from 'moment';

class shiftList extends Component {
    
    constructor(){
        super();
        this.state = { data: [] };
    };    

    componentDidMount() {           
        this.mounted = true; 
        const URL = `${BASE_URL}shiftList`; 
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
        });          
        
    }
    componentWillUnmount() {
        this.mounted = false;
    }

  render() {
    Moment.locale('id');
    let listShifts = this.state.data.map((data,i) => {        
        return <tr key = {i}>
                    <td>{data.SHIFT_NO}</td>
                    <td>{data.BRANCH_NAME}</td>
                    <td>{data.EMPLOYEE_NAME}</td>
                    <td>{Moment(data.SHIFT_IN_DATE).format('DD/MM/YYYY HH:mm:ss')}</td>
                    <td>{Moment(data.SHIFT_OUT_DATE).format('DD/MM/YYYY HH:mm:ss')}</td>
                    <td>{data.AMOUNT_SALES}</td>
                    <td>{data.AMOUNT_CASH}</td>
                    <td>{data.AMOUNT_OPEX}</td>
                </tr>  
    })

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> List Shift
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>Shift No</th>
                    <th>Branch Name</th>
                    <th>Employee Name</th>
                    <th>Shift in</th>
                    <th>Shift Out</th>
                    <th>Amount Sales</th>
                    <th>Amount Cash</th>
                    <th>Amount Opx</th>
                  </tr>
                  </thead>
                  <tbody>                    
                       {listShifts}       
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

export default shiftList;
