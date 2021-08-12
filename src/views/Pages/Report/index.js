import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,

  DropdownItem,
  DropdownMenu,
  DropdownToggle, 
  ButtonDropdown,
  Progress,
  ButtonGroup } from 'reactstrap';
import {getToken} from '../../../Auth/common'
import {BASE_URL} from '../../../Auth/Actions'
import Moment from 'moment';
import 'moment/locale/id' 

import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'



// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

class Report extends Component {
    
    constructor(){
        super();
        this.state = { data: [], dataReport:[] };
       
    };    

    componentDidMount() {           
       

        
        const URL_REPORT = `${BASE_URL}/report/list`; 
        fetch(URL_REPORT, { 
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
            
        }); 
        
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    
  render() {
    
    let listproducts = this.state.data.map((data,i) => {
    
        return <tr key = {i}>
            
                  <td>{data.DATE}</td>
                    <td>{data.SHIFT_NO}</td>                  
                    <td>{data.EMPLOYEE_NAME}</td>                  
                    <td>{data.PAYMENT_TYPE}</td>
                    <td>{new Number(data.AMOUNT).toLocaleString("us-Us")}</td>
                    <td>{new Number(data.OPEX_AMOUNT).toLocaleString("us-Us")}</td>
                    <td>{new Number(data.OWN_PAYMENT).toLocaleString("us-Us")}</td>
                    <td>{new Number(data.ACTUAL_AMOUNT).toLocaleString("us-Us")}</td>
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
                    <th>DATE</th>
                    <th>SHIFT NO</th>
                    <th>EMPLOYEE NAME</th>
                    <th>PAYMENT TYPE</th>    
                    <th>AMOUNT</th>
                    <th>OPEX AMOUNT</th>
                    <th>OWN PAYMENT</th>
                    <th>ACTUAL AMOUNT</th>
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

export default Report;
