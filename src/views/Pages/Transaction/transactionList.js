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

class viewProducts extends Component {
    
    constructor(){
        super();
        this.state = { data: [], dataReport:[] };
       
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


        
        const URL_REPORT = `${BASE_URL}/sales/report`; 
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
            this.setState({ dataReport: json.results });       
            console.log(this.state.dataReport[0].AMOUNT)
            
        }); 
        
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    
  render() {
    let listAmount = this.state.dataReport.map((dt, i)=>{
      let percent = (parseInt(dt.AMOUNT) / parseInt(dt.LAST_AMOUNT)) * 100 ;
      return <Row>
          <Col xs="12" sm="6" lg="3">
              <Card className="text-white bg-success">
                <CardBody className="pb-0">               
                  <div className="text-value">{dt.AMOUNT}</div>
                  <div>Sales Today</div>
                  <strong>{dt.LAST_AMOUNT} From Yesterday ({percent.toFixed(2)+"%"})</strong>
                    
                    <Progress className="progress-xs mt-2" color="warning" value={percent} />
                </CardBody>
                <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                  <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
                </div>
              </Card>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <Card className="text-white bg-success">
                <CardBody className="pb-0">               
                  <div className="text-value">{dt.VOUCHER_AMOUNT}</div>
                  <div>Voucher Today</div>
                </CardBody>
                <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                  <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
                </div>
              </Card>
            </Col>
            <Col xs="12" sm="6" lg="3">
              <Card className="text-white bg-danger">
                <CardBody className="pb-0">               
                  <div className="text-value">{dt.LAST_AMOUNT}</div>
                  <div>Sales Yesterday</div>
                </CardBody>
                <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                  <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
                </div>
              </Card>
            </Col>
            
            <Col xs="12" sm="6" lg="3">
              <Card className="text-white bg-danger">
                <CardBody className="pb-0">               
                  <div className="text-value">{dt.LAST_VOUCHER_AMOUNT}</div>
                  <div>Voucher Yesterday</div>
                </CardBody>
                <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                  <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
                </div>
              </Card>
            </Col>
            </Row>
    })

    let listproducts = this.state.data.map((data,i) => {
        return <tr key = {i}>
                  <td>{data.SALES_DOC_NO}</td>
                    <td>{data.BRANCH_NAME}</td>  
                    <td>{data.SHIFT_NO}</td>                  
                    <td>{data.CUSTOMER_NAME}</td>                  
                    <td>{data.PAYMENT_TYPE}</td>
                    <td>{data.AMOUNT}</td>
                    <td>{data.SALES_DATE}</td>
                    {/* <td>{Moment(data.).format('DD/MM/YYYY HH:mm:ss')}</td> */}
                </tr>  
    })

    return (
      <div className="animated fadeIn">
        <Row>
        
          {listAmount}
          
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
