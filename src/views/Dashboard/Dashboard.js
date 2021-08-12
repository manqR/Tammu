import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {  
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,  
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,  
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import {BASE_URL} from '../../Auth/Actions'
import {getToken} from '../../Auth/common'

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
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
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
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
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
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
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

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


//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];
var lbl = [];
var txt = "";

for (var i = 0; i <= elements; i++) {
  data2.push(random(80, 100));
  data3.push(65);
}


const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 1000000,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      datadash1: [], 
      datadash2:[],
      datadash3:[],
      lbldate:[],
      sumsls:[]
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }


  
  componentDidMount() {           
    this.mounted = true; 
    const URL = `${BASE_URL}/report/dash1`; 
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
        this.setState({ datadash1: json.results });       
        // console.log(this.state.data)
    });   


    
    const URL_REPORT = `${BASE_URL}/report/dash2`; 
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
        this.setState({ datadash2: json.results }); 
        data1 = [];        
        lbl = [];        
        for (let x in this.state.datadash2) {          
          data1.push(this.state.datadash2[x]["SUM_SALES"]);
          lbl.push(this.state.datadash2[x]["SHIFT_IN_DATE"].slice(0,-5));
         
        }
        console.log(lbl.length)
        txt = "Period "+lbl[0] + " - "+lbl[lbl.length-1] ;
        
    }); 


    const URL_REPORT2 = `${BASE_URL}/report/dash3`; 
    fetch(URL_REPORT2, { 
        method: 'POST', 
        headers: new Headers({
          "x-access-token":getToken(),
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json"    
        })       
    })
    .then(response => response.json())
    .then(json => {
        this.setState({ datadash3: json.results });         
       
    }); 
    
}

componentWillUnmount() {
    this.mounted = false;
}

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
      const mainChart = {
          // labels: [this.state.lbldate],
          labels: lbl,
          datasets: [
            {
              label: 'Sales Amount',
              backgroundColor: hexToRgba(brandInfo, 10),
              borderColor: brandInfo,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              data: data1,
            },
          
          ],
        };

    let dash1 = this.state.datadash1.map((data, i) =>{
      console.log("sales",data.TOTAL_SALES.replace(/,/g,""))
      let netSales = parseInt(data.TOTAL_SALES.replace(/,/g,"")) - parseInt(data.VOUCHER_AMOUNT.replace(/,/g,"")) - parseInt(data.OPX_AMOUNT.replace(/,/g,""));
      
      netSales = new Number(netSales).toLocaleString("us-Us");  
      return <Row>
              <Col xs="12" sm="6" lg="3">
                <Card className="text-white bg-info">
                  <CardBody className="pb-0">
                    
                    <div className="text-value">{data.TOTAL_SALES}</div>
                    <div>Total Sales</div>
                  </CardBody>
                  <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                    <Line data={cardChartData2} options={cardChartOpts2} height={70} />
                  </div>
                </Card>
              </Col>

              <Col xs="12" sm="6" lg="3">
                <Card className="text-white bg-primary">
                  <CardBody className="pb-0">
                    <div className="text-value">{data.VOUCHER_AMOUNT}</div>
                    <div>Voucher Amount</div>
                  </CardBody>
                  <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                    <Line data={cardChartData1} options={cardChartOpts1} height={70} />
                  </div>
                </Card>
              </Col>

              <Col xs="12" sm="6" lg="3">
                <Card className="text-white bg-warning">
                  <CardBody className="pb-0">
                    
                    <div className="text-value">{data.OPX_AMOUNT}</div>
                    <div>Operational Costs</div>
                  </CardBody>
                  <div className="chart-wrapper" style={{ height: '70px' }}>
                    <Line data={cardChartData3} options={cardChartOpts3} height={70} />
                  </div>
                </Card>
              </Col>

              <Col xs="12" sm="6" lg="3">
                <Card className="text-white bg-danger">
                  <CardBody className="pb-0">
                    <div className="text-value">{netSales}</div>
                    <div>Net Sales</div>
                  </CardBody>
                  <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                    <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
                  </div>
                </Card>
              </Col>
            </Row>
    })


    let dash3 = this.state.datadash3.map((data, i) =>{

     
      let totalsales = parseInt(data.CASH_AMOUNT) +
                     parseInt(data.OVO_AMOUNT) + 
                     parseInt(data.GOPAY_AMOUNT) + 
                     parseInt(data.DEBIT_AMOUNT) + 
                     parseInt(data.VOUCHER_AMOUNT) + 
                    parseInt(data.OWN_AMOUNT);

      console.log(totalsales)

      let percentCash = (data.CASH_AMOUNT / totalsales) * 100;
      let percentOvo = (data.OVO_AMOUNT / totalsales) * 100;
      let percentGopay = (data.GOPAY_AMOUNT / totalsales) * 100;
      let percentDebit = (data.DEBIT_AMOUNT / totalsales) * 100;
      let percentVoucher = (data.VOUCHER_AMOUNT / totalsales) * 100;
      let percentOwn = (data.OWN_AMOUNT / totalsales) * 100;

      console.log("percent",percentOwn.toFixed(0))
                    // totalsales = new Number(totalsales).toLocaleString("us-Us");  
      return <Row className="text-center">
              <Col sm={12} md className="mb-sm-2 mb-0">
                <div className="text-muted">Cash </div>
                <strong>{new Number(data.CASH_AMOUNT).toLocaleString("us-Us")}  ({percentCash.toFixed(2)}%)</strong>
                <Progress className="progress-xs mt-2" color="success" value={percentCash.toFixed(0)} />
              </Col>
              <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                <div className="text-muted">Ovo</div>
                <strong>{new Number(data.OVO_AMOUNT).toLocaleString("us-Us")}  ({percentOvo.toFixed(2)}%)</strong>
                <Progress className="progress-xs mt-2" color="primary" value={percentOvo.toFixed(0)} />
              </Col>
              <Col sm={12} md className="mb-sm-2 mb-0">
                <div className="text-muted">Gopay</div>
                <strong>{new Number(data.GOPAY_AMOUNT).toLocaleString("us-Us")}  ({percentGopay.toFixed(2)}%)</strong>
                <Progress className="progress-xs mt-2" color="primary" value={percentGopay.toFixed(0)}/>
              </Col>
              <Col sm={12} md className="mb-sm-2 mb-0">
                <div className="text-muted">Debit</div>
                <strong>{new Number(data.DEBIT_AMOUNT).toLocaleString("us-Us")}  ({percentDebit.toFixed(2)}%)</strong>
                <Progress className="progress-xs mt-2" color="primary" value={percentDebit.toFixed(0)} />
              </Col>
              <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                <div className="text-muted">Voucher</div>
                <strong>{new Number(data.VOUCHER_AMOUNT).toLocaleString("us-Us")}  ({percentVoucher.toFixed(2)}%)</strong>
                <Progress className="progress-xs mt-2" color="warning" value={percentVoucher.toFixed(0)} />
              </Col>
              <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                <div className="text-muted">Own</div>
                <strong>{new Number(data.OWN_AMOUNT).toLocaleString("us-Us")}  ({percentOwn.toFixed(2)}%)</strong>
                <Progress className="progress-xs mt-2" color="danger" value={percentOwn.toFixed(0)} />
              </Col>
            </Row>
    })

    return (
      <div className="animated fadeIn">
        {dash1}
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Sales Traffic</CardTitle>
                    <div className="small text-muted">{txt}</div>
                  </Col>
                 
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
              <CardFooter>
                {dash3}
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
